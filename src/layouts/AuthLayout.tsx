import { ReactNode } from 'react'

interface AuthLayoutProps {
  children?: ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="flex min-h-screen items-stretch">
      <div className="flex flex-col flex-1 min-h-120 p-10 items-center justify-center">
        <div className="border border-solid rounded border-gray-100 shadow p-12 xl:p-16">
          {children}
        </div>
      </div>
      <div className="flex flex-col bg-blue-400 flex-shrink-0 w-64 items-center !text-white lg:w-80 2xl:w-102">
        <h1 className="font-semibold font-mono mt-20vh text-white tracking-widest text-2xl">
          WELCOME
        </h1>
        <div className="mt-auto text-center mb-4">Powered by Kunlun Admin</div>
      </div>
    </div>
  )
}

export default AuthLayout
