'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export default function VendedoresPage() {
  const [form, setForm] = useState({
    negocio: '',
    ciudad: '',
    whatsapp: '',
    categoria: 'Pulpería',
    pago: 'USDT (Solana)',
  })

  const submit = () => {
    const msg = `Hola MandarCasa, quiero ser proveedor.%0A%0A` +
      `Negocio: ${form.negocio}%0ACiudad: ${form.ciudad}%0AWhatsApp: ${form.whatsapp}%0ACategoría: ${form.categoria}%0APago preferido: ${form.pago}`
    window.location.href = `https://wa.me/18323624499?text=${msg}`
  }

  return (
    <div className="min-h-screen bg-[#0A0E1A]">
      <nav className="border-b border-white/10 bg-[#0A0E1A]/95">
        <div className="mx-auto max-w-5xl flex items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#10B981]">
              <span className="font-black text-white">M</span>
            </div>
            <span className="font-black tracking-tighter">Mandar<span className="text-[#10B981]">Casa</span></span>
          </Link>
          <Link href="/pedido" className="text-sm text-white/60 hover:text-white">¿Quieres hacer un pedido?</Link>
        </div>
      </nav>

      <div className="mx-auto max-w-4xl px-6 pt-16 pb-20">
        <div className="max-w-2xl">
          <div className="inline px-4 py-1 rounded-full text-sm text-[#10B981] mb-4 border border-[#10B981]/30">PARA NEGOCIOS EN EL SALVADOR</div>

          <h1 className="text-6xl font-black tracking-[-3px] mb-6">Recibe pedidos pagados en dólares desde Estados Unidos</h1>
          <p className="text-2xl text-white/70 mb-12">Conecta tu negocio con miles de familias salvadoreñas en EE.UU. Sin costo inicial.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-12 max-w-5xl">
          {[
            { title: "Clientes nuevos", text: "Miles de salvadoreños listos para mandar" },
            { title: "Cobro al instante", text: "Paga vía USDT, Zelle o Cash App" },
            { title: "Sin contratos", text: "Solo ganas cuando vendes" },
          ].map((b, i) => (
            <div key={i} className="rounded-3xl border border-white/10 p-7">
              <div className="flex items-center gap-2 text-[#10B981]">
                <Check className="h-5 w-5" /> 
                <div className="font-semibold text-xl">{b.title}</div>
              </div>
              <p className="text-white/70 pl-7 mt-1">{b.text}</p>
            </div>
          ))}
        </div>

        <div className="max-w-lg">
          <div className="text-xs tracking-[3px] text-[#10B981]">REGÍSTRATE EN 60 SEGUNDOS</div>
          <div className="font-black text-4xl tracking-tighter mb-6 mt-2">Empieza a vender hoy</div>

          <div className="rounded-3xl border border-white/10 bg-[#111627] p-8 space-y-5">
            <input placeholder="Nombre del negocio" value={form.negocio} onChange={e => setForm({...form, negocio: e.target.value})} className="w-full px-6 py-4 rounded-2xl bg-[#0A0E1A] border border-white/10" />

            <div className="grid grid-cols-2 gap-4">
              <input placeholder="Ciudad" value={form.ciudad} onChange={e => setForm({...form, ciudad: e.target.value})} className="px-6 py-4 rounded-2xl bg-[#0A0E1A] border border-white/10" />
              <input placeholder="WhatsApp" value={form.whatsapp} onChange={e => setForm({...form, whatsapp: e.target.value})} className="px-6 py-4 rounded-2xl bg-[#0A0E1A] border border-white/10" />
            </div>

            <select value={form.pago} onChange={e => setForm({...form, pago: e.target.value})} className="w-full px-6 py-4 rounded-2xl bg-[#0A0E1A] border border-white/10">
              <option>USDT (Solana)</option>
              <option>Zelle</option>
              <option>Cash App</option>
            </select>

            <Button onClick={submit} className="w-full py-4 text-xl mt-3 bg-[#10B981] text-black hover:bg-[#10B981]/90">
              Enviar solicitud
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
