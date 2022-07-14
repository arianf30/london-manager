import { getSession, signOut } from "next-auth/react"

export default function Index({ user }) {
  return (
    <>
      Signed in as {user.email} <br />
      <button onClick={() => signOut()}>Sign out</button>
    </>
  )
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context)

  if (!session)
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    }

  return {
    props: {
      user: session.user,
    },
  }
}
