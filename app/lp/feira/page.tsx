import type { Metadata } from 'next'
import Link from 'next/link'
import { ProductHero, PhoneFrame } from 'app/components/mdx'

export const metadata: Metadata = {
  title: 'Feira — Sua lista de compras inteligente',
  description:
    'Organize suas compras, acompanhe seu orçamento mensal e compartilhe a lista com quem precisa. Um PWA offline-first, direto do celular, sem instalação.',
  openGraph: {
    title: 'Feira — Sua lista de compras inteligente',
    description:
      'Organize suas compras, acompanhe seu orçamento mensal e compartilhe a lista com quem precisa.',
    type: 'website',
  },
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.5 4L6 13L2.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function FeiraLanding() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      <header className="border-b border-[#e5e5e5] dark:border-[#262626]">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-sm font-medium text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
            Pedro Lucas
          </Link>
          <a
            href="https://feira-flame.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium border border-neutral-900 dark:border-neutral-100 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 px-4 py-2 hover:opacity-80 transition-opacity"
          >
            Abrir o App
            <ArrowRight />
          </a>
        </div>
      </header>

      <main>
        <section className="border-b border-[#e5e5e5] dark:border-[#262626] px-6 py-20 md:py-28">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <p className="text-sm font-mono uppercase tracking-wider text-neutral-400 mb-4">Aplicativo de lista de compras</p>
              <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 text-neutral-900 dark:text-neutral-100">
                Sua lista de compras inteligente
              </h1>
              <p className="text-lg leading-relaxed mb-8 text-neutral-600 dark:text-neutral-400">
                Organize suas compras, acompanhe seu orçamento mensal e compartilhe a lista com quem precisa — tudo offline, direto do celular. Sem cadastro, sem instalação.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://feira-flame.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium border border-neutral-900 dark:border-neutral-100 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 px-6 py-3 hover:opacity-80 transition-opacity"
                >
                  Começar a usar
                  <ArrowRight />
                </a>
                <a
                  href="https://github.com/pedrolucaslco/feira"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm border border-[#e5e5e5] dark:border-[#262626] px-6 py-3 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-[#f2f2f2] dark:hover:bg-[#141414] transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" /></svg>
                  GitHub
                </a>
              </div>
            </div>
            <PhoneFrame />
          </div>
        </section>

        <section className="border-b border-[#e5e5e5] dark:border-[#262626] px-6 py-20">
          <div className="max-w-5xl mx-auto">
            <p className="text-sm font-mono uppercase tracking-wider text-neutral-400 mb-2">Benefícios</p>
            <h2 className="text-3xl font-medium tracking-tight mb-12 text-neutral-900 dark:text-neutral-100">Por que usar o Feira?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-[#e5e5e5] dark:border-[#262626] p-6">
                <div className="w-8 h-8 border border-[#e5e5e5] dark:border-[#262626] flex items-center justify-center mb-4">
                  <CheckIcon />
                </div>
                <h3 className="text-lg font-medium mb-2 text-neutral-900 dark:text-neutral-100">Controle do orçamento</h3>
                <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  Defina quanto quer gastar no mês e veja em tempo real quanto ainda pode gastar na semana. Sem surpresas na hora de pagar.
                </p>
              </div>
              <div className="border border-[#e5e5e5] dark:border-[#262626] p-6">
                <div className="w-8 h-8 border border-[#e5e5e5] dark:border-[#262626] flex items-center justify-center mb-4">
                  <CheckIcon />
                </div>
                <h3 className="text-lg font-medium mb-2 text-neutral-900 dark:text-neutral-100">Lista sempre organizada</h3>
                <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  Crie seções do seu jeito: laticínios, limpeza, hortifrúti. Arraste itens entre seções e encontre tudo fácil.
                </p>
              </div>
              <div className="border border-[#e5e5e5] dark:border-[#262626] p-6">
                <div className="w-8 h-8 border border-[#e5e5e5] dark:border-[#262626] flex items-center justify-center mb-4">
                  <CheckIcon />
                </div>
                <h3 className="text-lg font-medium mb-2 text-neutral-900 dark:text-neutral-100">Compartilhado em tempo real</h3>
                <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  Crie um espaço e adicione quem mora com você. Cada um marca os itens no próprio celular e a lista sincroniza na hora.
                </p>
              </div>
              <div className="border border-[#e5e5e5] dark:border-[#262626] p-6">
                <div className="w-8 h-8 border border-[#e5e5e5] dark:border-[#262626] flex items-center justify-center mb-4">
                  <CheckIcon />
                </div>
                <h3 className="text-lg font-medium mb-2 text-neutral-900 dark:text-neutral-100">Funciona sem internet</h3>
                <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  Dentro do mercado, no subsolo, em área com sinal fraco — o Feira continua funcionando. Sincroniza automaticamente quando houver conexão.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#e5e5e5] dark:border-[#262626] px-6 py-20">
          <div className="max-w-5xl mx-auto">
            <p className="text-sm font-mono uppercase tracking-wider text-neutral-400 mb-2">Como funciona</p>
            <h2 className="text-3xl font-medium tracking-tight mb-12 text-neutral-900 dark:text-neutral-100">Começar é simples</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: '01', title: 'Acesse o link', desc: 'Abra o app pelo navegador do celular. Sem instalação, sem cadastro.' },
                { step: '02', title: 'Monte sua lista', desc: 'Adicione itens, crie seções, defina seu orçamento do mês.' },
                { step: '03', title: 'Vá ao mercado', desc: 'Ative a compra, marque os itens e veja o total enquanto faz as compras.' },
              ].map(({ step, title, desc }) => (
                <div key={step}>
                  <p className="text-3xl font-mono text-neutral-300 dark:text-neutral-600 mb-3">{step}</p>
                  <h3 className="text-lg font-medium mb-2 text-neutral-900 dark:text-neutral-100">{title}</h3>
                  <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-medium tracking-tight mb-6 text-neutral-900 dark:text-neutral-100">
              Pronto para organizar suas compras?
            </h2>
            <p className="text-lg leading-relaxed mb-8 text-neutral-600 dark:text-neutral-400">
              Sem complicação, sem instalação. Acesse pelo celular e comece agora.
            </p>
            <a
              href="https://feira-flame.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-base font-medium border border-neutral-900 dark:border-neutral-100 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 px-8 py-3.5 hover:opacity-80 transition-opacity"
            >
              Abrir o Feira
              <ArrowRight />
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#e5e5e5] dark:border-[#262626] px-6 py-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <p className="text-sm text-neutral-400">
            Feito por <Link href="/" className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors underline underline-offset-2">Pedro Lucas</Link>
          </p>
          <a
            href="https://github.com/pedrolucaslco/feira"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors inline-flex items-center gap-1.5"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" /></svg>
            Código aberto
          </a>
        </div>
      </footer>
    </div>
  )
}
