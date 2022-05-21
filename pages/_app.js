import { SessionProvider, useSession } from 'next-auth/react'
import NextNProgress from 'nextjs-progressbar'
import 'styles/globals.css'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      {Component.auth ? (
        <Auth>
          <NextNProgress />
          <Component {...pageProps} />
        </Auth>
      ) : (
          <>
            <NextNProgress />
            <Component {...pageProps} />
          </>
      )}
    </SessionProvider>
  )
}

function Auth({ children }) {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { data: session, status } = useSession({ required: true })

  if (status === 'loading') {
    return <div className="p-4">Espere...</div>
  }

  return children
}
