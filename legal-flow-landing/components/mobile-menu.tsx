"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ScrollToSection } from "./scroll-to-section"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Abrir menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center mb-8">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
              <span>LegalFlow</span>
            </Link>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          <nav className="flex flex-col gap-4">
            <ScrollToSection
              targetId="recursos"
              className="px-4 py-3 rounded-md hover:bg-muted transition-colors"
              onClick={handleLinkClick}
            >
              Recursos
            </ScrollToSection>
            <ScrollToSection
              targetId="beneficios"
              className="px-4 py-3 rounded-md hover:bg-muted transition-colors"
              onClick={handleLinkClick}
            >
              Benefícios
            </ScrollToSection>
            <ScrollToSection
              targetId="como-funciona"
              className="px-4 py-3 rounded-md hover:bg-muted transition-colors"
              onClick={handleLinkClick}
            >
              Como Funciona
            </ScrollToSection>
            <ScrollToSection
              targetId="contato"
              className="px-4 py-3 rounded-md hover:bg-muted transition-colors"
              onClick={handleLinkClick}
            >
              Contato
            </ScrollToSection>
          </nav>

          <div className="mt-auto pt-8">
            <Button
              className="w-full"
              onClick={() => {
                setOpen(false)
                document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Experimente Grátis
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

