import { SessionProvider, useSession } from "next-auth/react"
import { OnlineStatusProvider } from "hooks/useOnlineStatus"
import { PermissionsProvider } from "context/PermissionsContext"
import NextNProgress from "nextjs-progressbar"
import "styles/globals.css"

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <OnlineStatusProvider>
      <SessionProvider session={session}>
        <NextNProgress />
        {Component.auth ? (
          <Auth>
            {Component.permissions ? (
              <PermissionsProvider>
                <Component {...pageProps} />
              </PermissionsProvider>
            ) : (
              <Component {...pageProps} />
            )}
          </Auth>
        ) : (
          <Component {...pageProps} />
        )}
      </SessionProvider>
    </OnlineStatusProvider>
  )
}

function Auth({ children }) {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { data: session, status } = useSession({ required: true })
  if (status === "loading") {
    return <div className="p-4">Espere...</div>
  }
  return children
}
