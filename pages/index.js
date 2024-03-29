import { getSession } from "next-auth/react"

export default function Index() {
  return
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
    redirect: {
      destination: "/profile",
      permanent: false,
    },
  }
}
