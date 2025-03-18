"use server"

import { Resend } from "resend"

// Usando a variável de ambiente para a chave API
const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(formData: FormData) {
  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const message = formData.get("message") as string

    if (!name || !email) {
      return {
        success: false,
        message: "Nome e email são obrigatórios",
      }
    }

    // Validação básica de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return {
        success: false,
        message: "Email inválido",
      }
    }

    console.log("Enviando email com Resend...")
    console.log("API Key definida:", !!process.env.RESEND_API_KEY)

    // Enviar email usando Resend
    const { data, error } = await resend.emails.send({
      from: "LegalFlow <onboarding@resend.dev>", // Use este email enquanto seu domínio não estiver verificado
      to: ["rodrigoafonsosiqueira@gmail.com"], // Substitua pelo seu email pessoal
      subject: "Novo contato do programa beta LegalFlow",
      html: `
        <h1>Novo contato do programa beta</h1>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone || "Não informado"}</p>
        <p><strong>Mensagem:</strong> ${message || "Não informada"}</p>
      `,
    })

    if (error) {
      console.error("Erro ao enviar email:", error)
      return {
        success: false,
        message: "Erro ao enviar mensagem. Por favor, tente novamente.",
      }
    }

    console.log("Email enviado com sucesso:", data)
    return {
      success: true,
      message: "Mensagem enviada com sucesso! Entraremos em contato em breve.",
    }
  } catch (error) {
    console.error("Erro ao processar formulário:", error)
    return {
      success: false,
      message: "Erro ao processar sua solicitação. Por favor, tente novamente.",
    }
  }
}

