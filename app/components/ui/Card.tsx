import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div className={cn(
      "rounded-3xl border border-white/10 bg-[#111627] p-8",
      hover && "transition-all hover:border-white/20",
      className
    )}>
      {children}
    </div>
  )
}