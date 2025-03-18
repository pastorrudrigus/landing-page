"use client"

import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface AnimatedGradientBorderProps {
  children: ReactNode
  className?: string
  containerClassName?: string
}

export function AnimatedGradientBorder({ children, className, containerClassName }: AnimatedGradientBorderProps) {
  return (
    <div className={cn("relative rounded-xl p-[1px] overflow-hidden", containerClassName)}>
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-primary to-cyan-500 rounded-xl animate-spin-slow" />
      <div className={cn("relative bg-background rounded-xl p-4 h-full", className)}>{children}</div>
    </div>
  )
}

