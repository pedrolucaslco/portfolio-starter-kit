'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Lang = 'en' | 'pt-br'

const translations: Record<Lang, Record<string, string>> = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.blog': 'Blog',
    'nav.contribute': 'Contribute',
    'nav.work': 'Experience',
    'hero.subtitle':
      'Product-minded Fullstack Developer · IA · Laravel · UX/UI',
    'hero.bio':
      "I'm a Fullstack Developer at EasySchool (Swisslink), where I solve complex problems for 450k+ users across Brazil. I integrate AI into development workflows, optimize critical systems at scale, and think beyond code — from product strategy to marketing, sales, and customer success.",
    'hero.cta.projects': 'Projects',
    'hero.cta.blog': 'Blog',
    'hero.cta.contact': 'Contact',
    'hire.title': 'Why hire me',
    'hire.fullstack-scale.title': 'Full Stack at Scale',
    'hire.fullstack-scale.desc': 'Built and maintained features for a platform used by 450k+ users across Brazil. Deep expertise in Laravel, MySQL, and performance optimization at scale.',
    'hire.ai-augmented.title': 'AI-Augmented Development',
    'hire.ai-augmented.desc': 'Integrate AI tools into daily workflows to accelerate development, automate repetitive tasks, and improve code quality.',
    'hire.product-vision.title': 'End-to-End Product Vision',
    'hire.product-vision.desc': 'Understand the full product lifecycle: from development and UX to marketing, sales, and customer success. Build with business outcomes in mind.',
    'hire.ux-ui-dev.title': 'UX/UI Design & Development',
    'hire.ux-ui-dev.desc': 'Design and implement interfaces with a strong foundation in both visual design and frontend engineering. No handoff gap.',

    'section.projects': 'Projects',
    'section.posts': 'Latest Posts',
    'section.view-all': 'View all',
    'section.open-blog': 'Open full blog',
    'section.experience': 'Full Experience',
    'section.support': 'Support',
    'section.support-desc':
      'Support my work',
    'section.contribute': 'Contribute',
    'section.contribute-desc':
      'If you like my work, consider contributing',
    'timeline.show-more': 'Show more',
    'timeline.show-less': 'Show less',
    'footer.copyright': 'All rights reserved.',
  },
  'pt-br': {
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.projects': 'Projetos',
    'nav.blog': 'Blog',
    'nav.contribute': 'Contribuir',
    'nav.work': 'Experiência',
    'hero.subtitle':
      'Desenvolvedor Fullstack com visão de produto · IA · Laravel · UX/UI',
    'hero.bio':
      'Sou Desenvolvedor Fullstack na EasySchool (Swisslink), onde resolvo problemas complexos para mais de 450 mil usuários em todo o Brasil. Integro IA nos fluxos de desenvolvimento, otimizo sistemas críticos em escala e penso além do código — da estratégia de produto ao marketing, vendas e sucesso do cliente.',
    'hero.cta.projects': 'Projetos',
    'hero.cta.blog': 'Blog',
    'hero.cta.contact': 'Contato',
    'hire.title': 'Por que me contratar',
    'hire.fullstack-scale.title': 'Full Stack em Escala',
    'hire.fullstack-scale.desc': 'Construí e mantive funcionalidades para uma plataforma usada por mais de 450 mil usuários em todo o Brasil. Expertise profunda em Laravel, MySQL e otimização de performance em escala.',
    'hire.ai-augmented.title': 'Desenvolvimento com IA',
    'hire.ai-augmented.desc': 'Integro ferramentas de IA nos fluxos diários de trabalho para acelerar o desenvolvimento, automatizar tarefas repetitivas e melhorar a qualidade do código.',
    'hire.product-vision.title': 'Visão de Produto Completa',
    'hire.product-vision.desc': 'Entendo todo o ciclo de vida do produto: do desenvolvimento e UX ao marketing, vendas e sucesso do cliente. Construo pensando nos resultados do negócio.',
    'hire.ux-ui-dev.title': 'Design e Desenvolvimento UX/UI',
    'hire.ux-ui-dev.desc': 'Projeto e implemento interfaces com forte base em design visual e engenharia frontend. Sem gap de handoff.',

    'section.projects': 'Projetos',
    'section.posts': 'Últimos Posts',
    'section.view-all': 'Ver todos',
    'section.open-blog': 'Abrir blog completo',
    'section.experience': 'Experiência Completa',
    'section.support': 'Apoiar',
    'section.support-desc':
      'Apoie meu trabalho',
    'section.contribute': 'Contribuir',
    'section.contribute-desc':
      'Se você gosta do meu trabalho, considere contribuir',
    'timeline.show-more': 'Mostrar mais',
    'timeline.show-less': 'Mostrar menos',
    'footer.copyright': 'Todos os direitos reservados.',
  },
}

const LangContext = createContext<{
  lang: Lang
  setLang: (lang: Lang) => void
  t: (key: string) => string
  mounted: boolean
}>({
  lang: 'en',
  setLang: () => {},
  t: (key) => key,
  mounted: false,
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    let stored = localStorage.getItem('lang') as Lang | null
    if (stored === 'en' || stored === 'pt-br') {
      setLang(stored)
    }
    setMounted(true)
  }, [])

  const updateLang = (next: Lang) => {
    setLang(next)
    localStorage.setItem('lang', next)
  }

  const t = (key: string) => translations[lang]?.[key] ?? key
  return (
    <LangContext.Provider value={{ lang, setLang: updateLang, t, mounted }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LangContext)
}

export function Trans({ en, pt }: { en: string; pt: string }) {
  const { lang } = useLanguage()
  return <>{lang === 'pt-br' ? pt : en}</>
}
