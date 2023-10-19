import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const SectionContainer = ({ children }: Props) => {
  return <section className="max-w-3xl px-0 mx-auto xl:max-w-5xl">{children}</section>
}
