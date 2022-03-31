import create from 'zustand'
import { User } from '@/types'

const tokenKey = '_kunlun_token'

const login = (..._args: any) =>
  Promise.resolve<User & { token: string }>({
    id: '1',
    name: 'test',
    role: 'admin',
    avatar: '',
    token: 'xxx'
  })

type AuthStore = {
  token: string | null
  user: User | null
  setUser: (user: User | null) => void
  initialize: () => Promise<User | null>
  login: (...args: any) => Promise<boolean>
  logout: () => void
}

export const useAuth = create<AuthStore>((set, get) => ({
  token: (localStorage.getItem(tokenKey) as string | undefined) || null,
  user: null,
  setUser: user => set(() => ({ user })),
  initialize: async () => {
    // TODO fetch user from server
    if (get().token) {
      const user = await new Promise<User>(resolve => {
        setTimeout(() => {
          resolve({
            id: '1',
            name: 'test',
            role: 'admin',
            avatar: ''
          })
        }, 1000)
      })
      set(() => ({ user }))
      return user
    }
    return null
  },
  login: async (params: unknown) => {
    // todo login
    const ret = await login(params)
    if (ret) {
      const { token, ...user } = ret
      localStorage.setItem(tokenKey, token)
      set(() => ({ token, user }))
      return true
    }
    return false
  },
  logout: () => {
    localStorage.removeItem(tokenKey)
    set(() => ({ token: null, user: null }))
  }
}))

export const useAuthorized = () => {
  const loggedIn = useAuth(state => !!state.user)
  return { loggedIn }
}
