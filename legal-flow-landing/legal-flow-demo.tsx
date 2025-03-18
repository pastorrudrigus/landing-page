import { Button } from "@/components/ui/button"
import { AnimatedGradientBorder } from "@/components/ui/animated-gradient-border"
import { FileText, Check, ArrowRight } from "lucide-react"

export default function LegalFlowDemo() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <AnimatedGradientBorder containerClassName="w-full">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-r from-violet-600 to-cyan-500 rounded-full p-1">
                <FileText className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-bold">Gerador de Petição Inicial</h3>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span className="text-xs text-green-500">Processando</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm text-slate-300">Tipo de Ação</label>
                <div className="bg-slate-700/50 p-3 rounded-lg text-sm">Ação de Cobrança</div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-slate-300">Partes</label>
                <div className="bg-slate-700/50 p-3 rounded-lg text-sm">
                  <p>
                    <span className="text-slate-400">Autor:</span> Empresa ABC Ltda.
                  </p>
                  <p>
                    <span className="text-slate-400">Réu:</span> XYZ Serviços S.A.
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-slate-300">Valor da Causa</label>
                <div className="bg-slate-700/50 p-3 rounded-lg text-sm">R$ 50.000,00</div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm text-slate-300">Fatos</label>
                <div className="bg-slate-700/50 p-3 rounded-lg text-sm h-32 overflow-y-auto">
                  O autor firmou contrato de prestação de serviços com o réu em 10/01/2023, para desenvolvimento de
                  software. Após a entrega do produto, o réu não efetuou o pagamento conforme acordado, mesmo após
                  diversas tentativas de contato e notificações extrajudiciais.
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-slate-300">Progresso</label>
                <div className="w-full bg-slate-700/50 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-violet-600 to-cyan-500 h-2.5 rounded-full w-[75%]"></div>
                </div>
                <div className="flex justify-between text-xs text-slate-400">
                  <span>Analisando</span>
                  <span>Redigindo</span>
                  <span>Revisando</span>
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-700 hover:to-cyan-600">
                <Check className="mr-2 h-4 w-4" /> Gerar Documento Final
              </Button>
            </div>
          </div>

          <div className="mt-6 border-t border-slate-700 pt-4">
            <h4 className="font-medium mb-2 text-sm">Sugestões de Jurisprudência</h4>
            <div className="space-y-2">
              <div className="bg-slate-700/30 p-2 rounded text-xs">
                STJ - REsp 1.568.245/RJ - Rel. Min. Ricardo Villas Bôas Cueva - Julgado em 14/03/2022
              </div>
              <div className="bg-slate-700/30 p-2 rounded text-xs">
                TJSP - Apelação Cível 1002345-67.2021.8.26.0100 - Rel. Des. Maria Silva - Julgado em 05/05/2022
              </div>
            </div>
          </div>
        </div>
      </AnimatedGradientBorder>

      <div className="flex justify-center mt-4">
        <Button variant="outline" size="sm" className="text-xs gap-1">
          Ver demonstração completa <ArrowRight className="h-3 w-3" />
        </Button>
      </div>
    </div>
  )
}

