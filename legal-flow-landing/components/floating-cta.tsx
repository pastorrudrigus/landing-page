"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"

export function FloatingCTA() {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar o botão quando o usuário rolar para baixo
      if (window.scrollY > 500) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById("contato")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!showButton) return null

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-2 z-50">
      <Button onClick={scrollToContact} className="shadow-lg" size="lg">
        Experimente Grátis
      </Button>
      <Button onClick={scrollToTop} variant="outline" size="icon" className="rounded-full shadow-lg">
        <ArrowUp className="h-5 w-5" />
      </Button>
    </div>
  )
}

