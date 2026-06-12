'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export default function RastrearPage() {
  const [orderId, setOrderId] = useState('')
  const [result, setResult] = useState<any>(null)

  const buscar = () => {
    if (!orderId) return
    setResult({
      id: orderId.toUpperCase(),
      estado: 'Entregado',
      destinatario: 'María López',
      ciudad: 'San Miguel',
      fecha: '11 de junio',
      mensaje: 'Tu pedido fue entregado exitosamente.'
    })
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
          <Link href="/" className="text-sm text-white/60">Volver al inicio</Link>
        </div>
      </nav>

      <div className="mx-auto max-w-md px-6 py-20">
        <h1 className="text-4xl font-black tracking-tight mb-2">Rastrea tu pedido</h1>
        <p className="text-white/70 mb-8">Ingresa el número de orden que recibiste por WhatsApp.</p>

        <div className="flex gap-3">
          <input
            type="text"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            placeholder="MC-28491"
            className="flex-1 rounded-2xl border border-white/10 bg-[#111627] px-6 py-4 text-lg"
          />
          <Button onClick={buscar}>Buscar</Button>
        </div>

        {result && (
          <div className="mt-10 rounded-3xl border border-white/10 bg-[#111627] p-8">
            <div className="text-sm text-white/50">Orden #{result.id}</div>
            <div className="mt-4 text-3xl font-bold">{result.estado}</div>
            <div className="mt-8 space-y-4 text-sm">
              <div><span className="text-white/50">Destinatario:</span> {result.destinatario}</div>
              <div><span className="text-white/50">Ciudad:</span> {result.ciudad}</div>
              <div><span className="text-white/50">Fecha:</span> {result.fecha}</div>
            </div>
            <div className="mt-8 text-[#22c55e] text-sm font-medium">{result.mensaje}</div>
          </div>
        )}
      </div>
    </div>
  )
}
