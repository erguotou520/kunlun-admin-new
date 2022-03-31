import { useEffect } from 'react'
import { ReactNode } from 'react'
import { useAuth } from '@/stores'
interface AuthProviderProps {
  children: ReactNode
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  // const isLoggedIn = useAuthorized()
  // const navigate = useNavigate()
  // const { pathname } = useLocation()

  // for test
  // useEffect(() => {
  //   if (isLoggedIn && pathname.startsWith('/auth')) {
  //     navigate('/app', { replace: true })
  //   } else {
  //     navigate('/auth/login', { replace: true })
  //   }
  // }, [isLoggedIn, pathname])
  const { token, initialize } = useAuth()
  useEffect(() => {
    if (token) {
      initialize()
    }
  }, [token])
  return <div>{children}</div>
}

export default AuthProvider
