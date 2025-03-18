"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { sendContactEmail } from "@/actions/email"
import { Loader2, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<{
    success?: boolean
    message?: string
  }>({})

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setFormStatus({})

    try {
      const result = await sendContactEmail(formData)
      setFormStatus(result)

      // Se for bem-sucedido, limpe o formulário
      if (result.success) {
        const form = document.getElementById("contact-form") as HTMLFormElement
        form?.reset()
      }
    } catch (error) {
      setFormStatus({
        success: false,
        message: "Erro ao enviar mensagem. Por favor, tente novamente.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="mx-auto w-full max-w-md space-y-4">
      <form id="contact-form" action={handleSubmit} className="grid gap-4">
        <Input type="text" name="name" placeholder="Nome completo" required />
        <Input type="email" name="email" placeholder="E-mail profissional" required />
        <Input type="tel" name="phone" placeholder="Telefone" />
        <Textarea
          name="message"
          placeholder="Como você acha que o LegalFlow pode ajudar seu escritório?"
          className="min-h-[120px]"
        />
        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Enviando...
            </>
          ) : (
            "Participar do Programa Beta"
          )}
        </Button>
      </form>

      {formStatus.message && (
        <div
          className={`p-3 rounded-lg flex items-start gap-2 ${
            formStatus.success
              ? "bg-green-500/10 text-green-600 border border-green-200"
              : "bg-red-500/10 text-red-600 border border-red-200"
          }`}
        >
          {formStatus.success ? (
            <CheckCircle className="h-5 w-5 shrink-0 mt-0.5" />
          ) : (
            <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
          )}
          <p>{formStatus.message}</p>
        </div>
      )}

      <p className="text-xs text-muted-foreground">
        Ao se inscrever, você concorda com nossos{" "}
        <Link href="#termos" className="underline underline-offset-2">
          Termos de Serviço
        </Link>{" "}
        e{" "}
        <Link href="#privacidade" className="underline underline-offset-2">
          Política de Privacidade
        </Link>
        .
      </p>
    </div>
  )
}

