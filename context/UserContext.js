import { createContext, useEffect, useState } from 'react'

const UserContext = createContext({})

export function UserContextProvider ({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUser(() => JSON.parse(sessionStorage.getItem('user')))
    }
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
