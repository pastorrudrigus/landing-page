"use client"

import type React from "react"

import type { ReactNode } from "react"

interface ScrollToSectionProps {
  children: ReactNode
  targetId: string
  className?: string
}

export function ScrollToSection({ children, targetId, className }: ScrollToSectionProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()

    const element = document.getElementById(targetId)
    if (element) {
      // Scroll suave para a seção
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <a href={`#${targetId}`} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}

