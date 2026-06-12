'use client'

import { useState } from 'react'
import { ArrowLeft, Check } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

type Step = 1 | 2 | 3 | 4

const baskets = [
  { id: 'despensa', name: 'Despensa Familiar', price: 49, desc: 'Arroz, frijoles, aceite, azúcar, leche, café' },
  { id: 'medicina', name: 'Kit Farmacia', price: 38, desc: 'Medicamentos básicos + vitaminas' },
  { id: 'cumple', name: 'Paquete Cumpleaños', price: 45, desc: 'Pastel + regalos + decoración' },
]

export default function PedidoPage() {
  const [step, setStep] = useState<Step>(1)
  const [selectedBasket, setSelectedBasket] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    categoria: '',
    descripcion: '',
    ciudad: '',
    destinatario: '',
    pago: 'USDT (Solana)',
  })

  const next = () => setStep((s) => Math.min(4, s + 1) as Step)
  const back = () => setStep((s) => Math.max(1, s - 1) as Step)

  const handleSubmit = () => {
    const msg = `Hola MandarCasa, quiero hacer un pedido.%0A%0ACategoría: ${formData.categoria || selectedBasket}%0ACiudad: ${formData.ciudad}%0ADestinatario: ${formData.destinatario}%0APago: ${formData.pago}`
    window.location.href = `https://wa.me/18323624499?text=${msg}`
  }

  return (
    <div className="min-h-screen bg-[#0A0E1A]">
      <nav className="border-b border-white/10 bg-[#0A0E1A]/95">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#2563eb]">
              <span className="font-black text-white">M</span>
            </div>
            <span className="font-black tracking-tighter">Mandar<span className="text-[#2563eb]">Casa</span></span>
          </Link>
          <div className="text-sm text-white/60">Paso {step} de 4</div>
        </div>
      </nav>

      <div className="mx-auto max-w-[620px] px-6 py-12">
        {step === 1 && (
          <div>
            <h2 className="text-4xl font-black tracking-tight mb-8">¿Qué necesitas enviar?</h2>
            <div className="space-y-3">
              {baskets.map((basket) => (
                <div
                  key={basket.id}
                  onClick={() => {
                    setSelectedBasket(basket.id)
                    setFormData(prev => ({ ...prev, categoria: basket.name }))
                  }}
                  className={`flex cursor-pointer justify-between rounded-3xl border p-6 transition-all active:scale-[0.985] ${selectedBasket === basket.id ? 'border-[#2563eb] bg-[#111627]' : 'border-white/10 hover:border-white/30'}`}
                >
                  <div>
                    <div className="text-xl font-semibold">{basket.name}</div>
                    <div className="text-[#22c55e]">${basket.price} USD</div>
                    <div className="text-sm text-white/60">{basket.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <Button onClick={next} disabled={!selectedBasket} className="mt-8 w-full text-xl py-4">
              Continuar
            </Button>
          </div>
        )}

        {step === 2 && (
          <div>
            <button onClick={back} className="mb-6 flex items-center gap-2 text-sm text-white/60">
              <ArrowLeft className="h-4 w-4" /> Volver
            </button>
            <h2 className="mb-8 text-4xl font-black tracking-tight">¿Dónde lo entrega?</h2>
            <div className="space-y-6">
              <div>
                <label className="mb-2 text-sm text-white/70">Ciudad en El Salvador</label>
                <input 
                  value={formData.ciudad} 
                  onChange={e => setFormData({...formData, ciudad: e.target.value})} 
                  placeholder="San Miguel, Santa Ana..." 
                  className="w-full rounded-2xl border border-white/10 bg-[#111627] px-6 py-4 text-lg" 
                />
              </div>
              <div>
                <label className="mb-2 text-sm text-white/70">Nombre de quien recibe</label>
                <input 
                  value={formData.destinatario} 
                  onChange={e => setFormData({...formData, destinatario: e.target.value})} 
                  placeholder="María López" 
                  className="w-full rounded-2xl border border-white/10 bg-[#111627] px-6 py-4 text-lg" 
                />
              </div>
            </div>
            <Button onClick={next} disabled={!formData.ciudad || !formData.destinatario} className="mt-10 w-full py-4 text-xl">
              Continuar
            </Button>
          </div>
        )}

        {step === 3 && (
          <div>
            <button onClick={back} className="mb-6 flex items-center gap-2 text-sm">← Volver</button>
            <h2 className="mb-3 text-4xl font-black tracking-tight">Método de pago</h2>
            <div className="space-y-3 mt-8">
              {['USDT (Solana)', 'Zelle', 'Cash App', 'Venmo'].map((method) => (
                <div 
                  key={method} 
                  onClick={() => setFormData({...formData, pago: method})} 
                  className={`flex justify-between cursor-pointer rounded-3xl border p-6 ${formData.pago === method ? 'border-[#22c55e] bg-[#111627]' : 'border-white/10'}`}
                >
                  <div>
                    <div className="font-semibold">{method}</div>
                    {method === 'USDT (Solana)' && <div className="text-sm text-[#22c55e]">Más rápido y barato • ~$0 fee</div>}
                  </div>
                  {formData.pago === method && <Check className="text-[#22c55e]" />}
                </div>
              ))}
            </div>
            <Button onClick={next} className="mt-10 w-full py-4 text-xl">
              Continuar
            </Button>
          </div>
        )}

        {step === 4 && (
          <div className="text-center">
            <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[#22c55e]/20">
              <Check className="h-12 w-12 text-[#22c55e]" />
            </div>
            <h2 className="text-3xl font-black">¡Pedido listo!</h2>
            <p className="mt-3 text-white/70 mb-10">Te redirigimos a WhatsApp para confirmar.</p>
            <Button onClick={handleSubmit} variant="secondary" className="w-full py-5 text-xl">Enviar por WhatsApp</Button>
          </div>
        )}
      </div>
    </div>
  )
}