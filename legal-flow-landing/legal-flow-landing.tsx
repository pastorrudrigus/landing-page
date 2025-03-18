import { Button } from "@/components/ui/button"
import { Sparkles, FileText, Zap, CheckCircle, ArrowRight, Brain, Gavel, Shield, Clock } from "lucide-react"
import { ScrollToSection } from "./components/scroll-to-section"
import { ContactForm } from "./components/contact-form"
import { OptimizedImage } from "./components/optimized-image"
import { Header } from "./components/header"
import { Footer } from "./components/footer"
import { FloatingCTA } from "./components/floating-cta"

export default function LegalFlowLanding() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-gradient-to-br from-background to-background">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-violet-500/20 via-primary/10 to-cyan-500/20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                    Revolucionando o Direito com IA
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    A revolução jurídica brasileira começa aqui
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    O LegalFlow é um sistema completo com inteligência artificial avançada que transforma a maneira como
                    advogados e escritórios criam documentos jurídicos, analisam processos e tomam decisões
                    estratégicas.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <ScrollToSection targetId="contato">
                    <Button size="lg" className="gap-1">
                      Experimente o Beta <ArrowRight className="h-4 w-4" />
                    </Button>
                  </ScrollToSection>
                  <ScrollToSection targetId="como-funciona">
                    <Button size="lg" variant="outline">
                      Conheça a Plataforma
                    </Button>
                  </ScrollToSection>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Inteligência Artificial</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>100% Brasileiro</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Seguro</span>
                  </div>
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600/30 via-primary/30 to-cyan-500/30 rounded-3xl blur-3xl animate-pulse"></div>
                <OptimizedImage
                  src="/images/hero-dashboard.jpg"
                  width={450}
                  height={550}
                  alt="LegalFlow Interface - Dashboard inteligente com análise de processos e geração de documentos"
                  className="relative mx-auto aspect-video overflow-hidden rounded-xl sm:w-full shadow-2xl shadow-primary/20 border border-white/20"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="recursos" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Sistema Completo
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Transforme seu escritório com IA jurídica avançada
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  O LegalFlow é um ecossistema completo que integra inteligência artificial de ponta com conhecimento
                  jurídico brasileiro para revolucionar a prática do direito no país.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-lg bg-white/5 backdrop-blur-sm hover:shadow-primary/20 hover:border-primary/50 transition-all duration-300">
                <div className="rounded-full bg-primary/10 p-3">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">IA Jurídica Avançada</h3>
                <p className="text-center text-muted-foreground">
                  Nossa IA foi treinada com milhões de documentos jurídicos brasileiros e compreende a legislação,
                  jurisprudência e doutrina nacional.
                </p>
                <OptimizedImage
                  src="/images/ai-legal-analysis.jpg"
                  width={300}
                  height={200}
                  alt="Análise jurídica com IA mostrando processamento de documentos legais"
                  className="rounded-lg border shadow-md mt-2"
                />
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-lg bg-white/5 backdrop-blur-sm hover:shadow-primary/20 hover:border-primary/50 transition-all duration-300">
                <div className="rounded-full bg-primary/10 p-3">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Geração de Documentos</h3>
                <p className="text-center text-muted-foreground">
                  Crie petições iniciais, recursos, pareceres e contratos personalizados em minutos, não em horas ou
                  dias.
                </p>
                <OptimizedImage
                  src="/images/document-generation.jpg"
                  width={300}
                  height={200}
                  alt="Interface de geração de documentos jurídicos mostrando um modelo de petição"
                  className="rounded-lg border shadow-md mt-2"
                />
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-lg bg-white/5 backdrop-blur-sm hover:shadow-primary/20 hover:border-primary/50 transition-all duration-300">
                <div className="rounded-full bg-primary/10 p-3">
                  <Gavel className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Análise Processual</h3>
                <p className="text-center text-muted-foreground">
                  Analise processos completos, identifique pontos fortes e fracos, e receba recomendações estratégicas.
                </p>
                <OptimizedImage
                  src="/images/case-analysis.jpg"
                  width={300}
                  height={200}
                  alt="Dashboard de análise processual mostrando estatísticas e insights"
                  className="rounded-lg border shadow-md mt-2"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="beneficios" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                    Vantagens Exclusivas
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Por que o LegalFlow vai revolucionar o direito brasileiro
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                    Nossa plataforma foi desenvolvida especificamente para o contexto jurídico brasileiro, considerando
                    todas as particularidades do nosso sistema legal.
                  </p>
                </div>
                <ul className="grid gap-6">
                  <li className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-1">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Economia de tempo extraordinária</h3>
                      <p className="text-muted-foreground">
                        Reduza em até 80% o tempo gasto na elaboração de documentos jurídicos complexos, permitindo que
                        você foque no que realmente importa: a estratégia jurídica.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-1">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Precisão jurídica incomparável</h3>
                      <p className="text-muted-foreground">
                        Nossa IA analisa a jurisprudência mais recente dos tribunais brasileiros e incorpora
                        automaticamente os entendimentos mais atuais em seus documentos.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-1">
                      <Sparkles className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Personalização completa</h3>
                      <p className="text-muted-foreground">
                        O sistema aprende com seu estilo de escrita e preferências, adaptando os documentos à sua voz
                        jurídica única e às necessidades específicas de cada caso.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-1">
                      <Shield className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Segurança de dados absoluta</h3>
                      <p className="text-muted-foreground">
                        Infraestrutura 100% hospedada no Brasil, com criptografia de nível militar e total conformidade
                        com a LGPD e regulamentações do setor jurídico.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600/30 via-primary/30 to-cyan-500/30 rounded-3xl blur-3xl animate-pulse"></div>
                <OptimizedImage
                  src="/images/benefits-showcase.jpg"
                  width={500}
                  height={600}
                  alt="LegalFlow em ação - Advogados utilizando a plataforma para análise de processos"
                  className="relative mx-auto aspect-video overflow-hidden rounded-xl sm:w-full shadow-2xl shadow-primary/20 border border-white/20"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="como-funciona" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Tecnologia Revolucionária
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Como o LegalFlow transforma seu trabalho
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nossa plataforma integra tecnologias de ponta para oferecer uma experiência jurídica sem precedentes.
                </p>
              </div>
            </div>

            <div className="relative mt-16 mb-20">
              <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-primary/80 to-primary/20"></div>

              <div className="grid gap-12">
                <div className="relative grid gap-6 lg:grid-cols-2">
                  <div className="flex flex-col items-end text-right lg:order-1 lg:pr-8">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Análise Inteligente de Dados</h3>
                      <p className="text-muted-foreground">
                        Nossa IA analisa milhões de processos, decisões e documentos jurídicos para identificar padrões
                        e tendências que seriam impossíveis de detectar manualmente.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 lg:static lg:translate-x-0">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-primary text-xl font-bold text-primary-foreground shadow-lg shadow-primary/30">
                      1
                    </div>
                  </div>
                  <div className="lg:pl-8">
                    <OptimizedImage
                      src="/images/ai-analysis.jpg"
                      width={400}
                      height={250}
                      alt="IA analisando documentos jurídicos e extraindo informações relevantes"
                      className="rounded-xl border shadow-lg"
                    />
                  </div>
                </div>

                <div className="relative grid gap-6 lg:grid-cols-2">
                  <div className="flex flex-col lg:pl-8">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Geração Contextualizada</h3>
                      <p className="text-muted-foreground">
                        Com base na análise, o sistema gera documentos jurídicos personalizados que incorporam
                        automaticamente a legislação, jurisprudência e doutrina mais relevantes.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 lg:static lg:translate-x-0">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-primary text-xl font-bold text-primary-foreground shadow-lg shadow-primary/30">
                      2
                    </div>
                  </div>
                  <div className="flex justify-end lg:order-first lg:pr-8">
                    <OptimizedImage
                      src="/images/document-creation.jpg"
                      width={400}
                      height={250}
                      alt="Interface mostrando a geração de um documento jurídico com sugestões inteligentes"
                      className="rounded-xl border shadow-lg"
                    />
                  </div>
                </div>

                <div className="relative grid gap-6 lg:grid-cols-2">
                  <div className="flex flex-col items-end text-right lg:order-1 lg:pr-8">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Revisão e Aprimoramento</h3>
                      <p className="text-muted-foreground">
                        O advogado revisa o documento gerado, faz ajustes necessários e o sistema aprende com essas
                        interações para melhorar continuamente seus resultados.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 lg:static lg:translate-x-0">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-primary text-xl font-bold text-primary-foreground shadow-lg shadow-primary/30">
                      3
                    </div>
                  </div>
                  <div className="lg:pl-8">
                    <OptimizedImage
                      src="/images/document-review.jpg"
                      width={400}
                      height={250}
                      alt="Advogado revisando e aprimorando um documento gerado pela IA"
                      className="rounded-xl border shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <ScrollToSection targetId="contato">
                <Button size="lg" className="gap-1">
                  Experimente o LegalFlow agora <ArrowRight className="h-4 w-4" />
                </Button>
              </ScrollToSection>
            </div>
          </div>
        </section>

        <section id="contato" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Seja pioneiro na revolução jurídica brasileira
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Junte-se ao nosso programa beta exclusivo e seja um dos primeiros a transformar seu escritório com a
                mais avançada tecnologia jurídica do Brasil.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                    Depoimentos
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    O que os profissionais estão dizendo
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                    Advogados e escritórios que já estão transformando sua prática jurídica com o LegalFlow.
                  </p>
                </div>
                <div className="space-y-4">
                  {[0, 1].map((index) => (
                    <div
                      key={index}
                      className="rounded-lg border p-4 hover:border-primary/50 transition-all duration-300 bg-white/5 backdrop-blur-sm"
                    >
                      <p className="italic text-muted-foreground">
                        {index === 0
                          ? `"O LegalFlow transformou completamente nosso escritório. Conseguimos reduzir o tempo de elaboração 
                          de petições iniciais em 75% e melhoramos significativamente a qualidade e fundamentação dos 
                          nossos documentos. É uma revolução na advocacia brasileira."`
                          : `"A precisão jurídica e a velocidade do LegalFlow são impressionantes. A plataforma entende 
                          perfeitamente as nuances do direito brasileiro e gera documentos que parecem ter sido escritos 
                          por um advogado experiente. Uma ferramenta essencial para qualquer escritório moderno."`}
                      </p>
                      <div className="mt-4 flex items-center gap-4">
                        <div className="rounded-full overflow-hidden h-10 w-10">
                          <OptimizedImage
                            src={index === 0 ? "/images/testimonial-1.jpg" : "/images/testimonial-2.jpg"}
                            width={40}
                            height={40}
                            alt={index === 0 ? "Dra. Ana Oliveira" : "Dr. Carlos Mendes"}
                          />
                        </div>
                        <div>
                          <p className="font-medium">{index === 0 ? "Dra. Ana Oliveira" : "Dr. Carlos Mendes"}</p>
                          <p className="text-sm text-muted-foreground">
                            {index === 0 ? "Sócia, Oliveira & Associados" : "Advogado Tributarista"}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">FAQ</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Perguntas frequentes</h2>
                </div>
                <div className="space-y-4">
                  <div className="rounded-lg border p-4 hover:border-primary/50 transition-all duration-300 bg-white/5 backdrop-blur-sm">
                    <h3 className="font-bold">O LegalFlow substitui advogados?</h3>
                    <p className="text-muted-foreground">
                      Não. O LegalFlow é uma ferramenta de apoio que potencializa o trabalho dos profissionais
                      jurídicos. A expertise, o julgamento e a estratégia jurídica continuam sendo responsabilidades do
                      advogado, que agora pode focar no que realmente importa.
                    </p>
                  </div>
                  <div className="rounded-lg border p-4 hover:border-primary/50 transition-all duration-300 bg-white/5 backdrop-blur-sm">
                    <h3 className="font-bold">Como garantem a precisão jurídica?</h3>
                    <p className="text-muted-foreground">
                      Nossa IA é treinada com milhões de documentos jurídicos brasileiros e atualizada diariamente com
                      as mais recentes legislações, jurisprudências e doutrinas. Além disso, contamos com uma equipe de
                      advogados especialistas que supervisionam e aprimoram constantemente o sistema.
                    </p>
                  </div>
                  <div className="rounded-lg border p-4 hover:border-primary/50 transition-all duration-300 bg-white/5 backdrop-blur-sm">
                    <h3 className="font-bold">Meus dados estão seguros?</h3>
                    <p className="text-muted-foreground">
                      Absolutamente. Utilizamos criptografia de ponta a ponta, servidores localizados no Brasil e
                      seguimos rigorosamente a LGPD e as normas éticas da OAB para garantir a segurança e
                      confidencialidade de todos os dados.
                    </p>
                  </div>
                  <div className="rounded-lg border p-4 hover:border-primary/50 transition-all duration-300 bg-white/5 backdrop-blur-sm">
                    <h3 className="font-bold">Quanto custa o LegalFlow?</h3>
                    <p className="text-muted-foreground">
                      Durante o programa beta, o acesso é gratuito para participantes selecionados. Após o lançamento,
                      ofereceremos planos flexíveis para profissionais individuais e escritórios de todos os tamanhos,
                      com preços acessíveis que garantem um excelente retorno sobre o investimento.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  )
}

