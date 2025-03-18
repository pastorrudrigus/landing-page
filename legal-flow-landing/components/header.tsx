"use client"

import { Scale } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollToSection } from "./scroll-to-section"
import { MobileMenu } from "./mobile-menu"

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b backdrop-blur-sm bg-background/80 sticky top-0 z-50">
      <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
        <Scale className="h-6 w-6" />
        <span>LegalFlow</span>
      </Link>
      <nav className="hidden md:flex gap-6">
        <ScrollToSection targetId="recursos" className="text-sm font-medium hover:text-primary">
          Recursos
        </ScrollToSection>
        <ScrollToSection targetId="beneficios" className="text-sm font-medium hover:text-primary">
          Benefícios
        </ScrollToSection>
        <ScrollToSection targetId="como-funciona" className="text-sm font-medium hover:text-primary">
          Como Funciona
        </ScrollToSection>
        <ScrollToSection targetId="contato" className="text-sm font-medium hover:text-primary">
          Contato
        </ScrollToSection>
      </nav>
      <ScrollToSection targetId="contato" className="hidden md:inline-flex">
        <Button>Experimente Grátis</Button>
      </ScrollToSection>
      <MobileMenu />
    </header>
  )
}

