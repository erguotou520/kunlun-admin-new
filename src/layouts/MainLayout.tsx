import { ReactNode } from 'react'

interface mainLayoutProps {
  children?: ReactNode
}

const mainLayout = ({ children }: mainLayoutProps) => {
  return <div>{children}</div>
}

export default mainLayout
