import { getSession, signOut } from "next-auth/react"
import { useEffect } from "react"
import { useRouter } from "next/router"

export default function Index({ user }) {
  const router = useRouter()
  useEffect(() => {
    if (user) router.push("/profile")
  }, [])

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
