import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export function MainInnerContainer({ children }: Props) {
  return (
    <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      {children}
    </div>
  )
}
