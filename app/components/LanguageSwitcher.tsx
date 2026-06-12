'use client'

import { usePathname, useRouter } from 'next/navigation'

export default function LanguageSwitcher({ currentLang }: { currentLang: 'es' | 'en' }) {
  const router = useRouter()
  const pathname = usePathname()

  const switchLang = (lang: 'es' | 'en') => {
    // For now, simple reload toggle until we implement full routing
    if (lang === 'en') {
      window.location.href = '/en' + pathname.replace(/^\/(en|es)?/, '')
    } else {
      window.location.href = pathname.replace(/^\/en/, '') || '/'
    }
  }

  return (
    <div className="flex items-center bg-[#111627] border border-white/10 rounded-full p-1 text-xs">
      <button
        onClick={() => switchLang('es')}
        className={`px-3 py-1 rounded-full transition-all ${currentLang === 'es' ? 'bg-[#2563eb] text-white font-medium' : 'text-white/60 hover:text-white'}`}
      >
        ES
      </button>
      <button
        onClick={() => switchLang('en')}
        className={`px-3 py-1 rounded-full transition-all ${currentLang === 'en' ? 'bg-[#2563eb] text-white font-medium' : 'text-white/60 hover:text-white'}`}
      >
        EN
      </button>
    </div>
  )
}