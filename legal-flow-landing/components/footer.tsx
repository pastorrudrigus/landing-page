"use client"

import type React from "react"

import { Scale } from "lucide-react"
import Link from "next/link"
import { ScrollToSection } from "./scroll-to-section"

export function Footer() {
  // Função para lidar com cliques em links externos ou seções que ainda não existem
  const handleExternalLink = (e: React.MouseEvent) => {
    e.preventDefault()
    alert("Esta funcionalidade estará disponível em breve!")
  }

  return (
    <footer className="w-full border-t py-6 md:py-12">
      <div className="container flex flex-col gap-6 px-4 md:flex-row md:items-center md:px-6">
        <div className="flex flex-col gap-2">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
            <Scale className="h-6 w-6" />
            <span>LegalFlow</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Transformando a prática jurídica brasileira com inteligência artificial.
          </p>
        </div>
        <div className="flex-1"></div>
        <nav className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Produto</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <ScrollToSection targetId="recursos" className="text-muted-foreground hover:text-foreground">
                  Recursos
                </ScrollToSection>
              </li>
              <li>
                <a href="#" onClick={handleExternalLink} className="text-muted-foreground hover:text-foreground">
                  Preços
                </a>
              </li>
              <li>
                <ScrollToSection targetId="contato" className="text-muted-foreground hover:text-foreground">
                  Programa Beta
                </ScrollToSection>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Empresa</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" onClick={handleExternalLink} className="text-muted-foreground hover:text-foreground">
                  Sobre nós
                </a>
              </li>
              <li>
                <a href="#" onClick={handleExternalLink} className="text-muted-foreground hover:text-foreground">
                  Carreiras
                </a>
              </li>
              <li>
                <ScrollToSection targetId="contato" className="text-muted-foreground hover:text-foreground">
                  Contato
                </ScrollToSection>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" onClick={handleExternalLink} className="text-muted-foreground hover:text-foreground">
                  Termos
                </a>
              </li>
              <li>
                <a href="#" onClick={handleExternalLink} className="text-muted-foreground hover:text-foreground">
                  Privacidade
                </a>
              </li>
              <li>
                <a href="#" onClick={handleExternalLink} className="text-muted-foreground hover:text-foreground">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium">Social</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="container mt-6 flex flex-col items-center justify-between gap-4 border-t py-6 md:h-24 md:flex-row md:py-0">
        <p className="text-center text-sm text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} LegalFlow. Todos os direitos reservados.
        </p>
        <p className="text-center text-sm text-muted-foreground md:text-left">Feito com paixão em São Paulo, Brasil</p>
      </div>
    </footer>
  )
}

