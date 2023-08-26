import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export function MainContainer({ children }: Props) {
  return <main className="flex flex-col items-center justify-between min-h-screen p-24">{children}</main>
}
