import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import UserModel from 'models/general/usuarios'
import bcrypt from 'bcrypt'

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
    CredentialsProvider({
      name: "London Manager",
      authorize: async (credentials) => {
        const { correo_electronico, contrasena } = credentials
        
        if (correo_electronico.length < 6 || contrasena.length < 6) {
          throw new Error('Hay un error en los datos enviados.')
        }
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(correo_electronico)) {
          throw new Error('El email ingresado no tiene un formato válido.')
        }

        try {
          const user = await UserModel.findOne({ attributes: ['id', 'correo_electronico', 'contrasena', 'nombre', 'apellido', 'foto'], where: { correo_electronico: correo_electronico } })
          if (!user) {
            throw new Error('Los datos ingresados son incorrectos.')
          }
          const passwordCorrect = user === null
            ? false
            : await bcrypt.compare(contrasena, user.contrasena)
          if (!passwordCorrect) {
            throw new Error('La contraseña ingresada es incorrecta.')
          }
          return {
            id: user.id,
            email: user.correo_electronico,
            name: `${user.nombre} ${user.apellido}`,
            image: user.foto
          }
        } catch (err) {
          throw new Error(err)
        }
      }
    })
  ],
  callbacks: {
    signIn: async ({ user, account, profile }) => {
      if (account.provider === "google") {
        const { email, picture, given_name, family_name } = profile
        try {
          const userBD = await UserModel.findOne({ attributes: ['id', 'google', 'admin'], where: { correo_electronico: email } })
          if (userBD.google === 'google') {
            user.id = userBD.id
            return true
          }
          return false
        } catch (err) {
          try {
            const userBD = await UserModel.create({
              correo_electronico: email,
              nombre: given_name,
              apellido: family_name,
              foto: picture,
              google: 'google',
              estado: 'approved'
            })
            user.id = userBD.id
            return true
          } catch (error) {
            return false
          }
        }
      }
      return true
    },
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id
      }
      return token
    },
    session: async ({ session, token }) => {
      if (token) {
        session.id = token.id
      }
      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  jwt: {
    secret: process.env.JWT_SIGNIN_PRIVATE_KEY,
    encryption: true
  },
  pages: {
    signIn: "/login",
  },
})