import { SessionProvider, useSession } from "next-auth/react"
import "styles/globals.css"
import { QueryClient } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client"
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister"
import { Toaster } from "react-hot-toast"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      // staleTime: Infinity,
      // cacheTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
})

let persister
if (typeof window !== "undefined") {
  persister = createSyncStoragePersister({
    storage: window.localStorage,
  })
}

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
    >
      <SessionProvider session={session}>
        {Component.auth ? (
          <Auth>
            <Component {...pageProps} />
          </Auth>
        ) : (
          <Component {...pageProps} />
        )}
        <Toaster position="top-right" reverseOrder={false} />
      </SessionProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </PersistQueryClientProvider>
  )
}

function Auth({ children }) {
  const { status } = useSession({ required: true })
  if (status === "loading") {
    return <div className="p-4">Espere...</div>
  }
  return children
}
