import { ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className, 
  ...props 
}: ButtonProps) {
  
  const base = "inline-flex items-center justify-center font-semibold rounded-2xl transition-all active:scale-[0.985] disabled:opacity-60"
  
  const variants = {
    primary: "bg-[#2563eb] hover:bg-[#3b82f6] text-white",
    secondary: "bg-white text-[#0A0E1A] hover:bg-white/90",
    ghost: "border border-white/20 hover:bg-white/5"
  }

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-9 py-4 text-lg"
  }

  return (
    <button 
      className={cn(base, variants[variant], sizes[size], className)} 
      {...props}
    >
      {children}
    </button>
  )
}