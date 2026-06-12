'use client'

import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0E1A]">
      {/* NAV */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0A0E1A]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2563eb]">
              <span className="text-xl font-black text-white">M</span>
            </div>
            <span className="font-black text-2xl tracking-tighter">Mandar<span className="text-[#2563eb]">Casa</span></span>
          </Link>

          <div className="flex items-center gap-8 text-sm font-medium">
            <a href="#como" className="text-white/70 hover:text-white transition-colors">Cómo funciona</a>
            <Link href="/vendedores" className="text-white/70 hover:text-white">Vendedores</Link>
            <Link href="/pedido">
              <Button>Hacer pedido</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <div className="mx-auto max-w-5xl px-6 pt-20 pb-24 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-3xl border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/80">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10B981] opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#10B981]"></span>
          </span>
          Última entrega hace <span className="font-semibold text-white">18 min</span>
        </div>

        <h1 className="text-7xl font-black tracking-[-4.5px] leading-none mb-6">
          Envía comida,<br />medicinas y<br /> 
          <span className="text-[#2563eb]">más a tu familia</span>
        </h1>

        <p className="text-2xl text-white/70 max-w-md mx-auto mb-10">Ordena desde cualquier ciudad de EE.UU. Tu familia en El Salvador recibe el mismo día.</p>

        <div className="flex justify-center gap-4">
          <Link href="/pedido">
            <Button size="lg" className="gap-2">Hacer un pedido <span>→</span></Button>
          </Link>
          <a href="#como" className="inline-flex items-center justify-center rounded-3xl border border-white/15 px-9 py-4 text-lg font-medium hover:bg-white/5">Ver cómo funciona</a>
        </div>
      </div>

      {/* STATS */}
      <div className="border-y border-white/10 bg-white/5 py-8">
        <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4 gap-y-8 px-6 text-center">
          {[
            ["$8B+", "enviados cada año"],
            ["3M+", "salvadoreños en EE.UU."],
            ["24h", "entrega promedio"],
            ["0", "costo para el receptor"],
          ].map(([stat, label], i) => (
            <div key={i}>
              <div className="font-black text-4xl text-[#2563eb]">{stat}</div>
              <div>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CATEGORIES */}
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12 text-center">
          <div className="text-xs tracking-[3px] text-[#2563eb]">QUÉ PUEDES ENVIAR</div>
          <h3 className="text-4xl font-bold tracking-tight">Todo lo que tu familia necesita</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: "🛒", title: "Despensa y comida", price: "$35 – $65", desc: "Arroz, frijoles, aceite, carnes, leche" },
            { icon: "💊", title: "Medicinas y farmacia", price: "$25 – $80", desc: "Medicamentos recetados y de venta libre" },
            { icon: "🎂", title: "Pasteles y regalos", price: "$30 – $55", desc: "Cumpleaños, flores, joyería y más" },
          ].map((cat, i) => (
            <Card key={i}>
              <div className="text-6xl mb-4">{cat.icon}</div>
              <div className="font-semibold text-2xl mb-1">{cat.title}</div>
              <div className="text-[#22c55e] font-semibold text-xl">{cat.price} USD</div>
              <p className="text-white/60 mt-1 text-sm">{cat.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}