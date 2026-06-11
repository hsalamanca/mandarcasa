# MandarCasa — Brand Assets (Logo + Icons)

## Logo Principal (Recomendado)

Versión oficial del logo:

- **Nombre:** MandarCasa
- **Tipografía:** Inter (Black / 900)
- **Colores:**
  - "Mandar" → Blanco (`#FFFFFF`)
  - "Casa" → Azul MandarCasa (`#2563EB`)
- **Ícono:** Casa simplificada (estilo minimalista)

**Uso recomendado:**
- Fondo oscuro (el sitio usa `#07101f`)
- Nunca usar el logo en fondos claros sin modificar

---

## Propuesta de Íconos para Categorías

Usaremos íconos minimalistas (estilo lineal) en color `#2563EB`:

1. **Despensa** → Bolsa de compras / Canasta
2. **Farmacia** → Pastilla o Botella de medicina
3. **Pasteles** → Pastel con vela
4. **Flores** → Flor estilizada

---

## Logo en HTML (Listo para usar)

```html
<div class="flex items-center gap-2">
  <!-- Ícono de casita -->
  <div class="w-8 h-8 bg-[#2563eb] rounded flex items-center justify-center">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
      <path d="M9 22V12h6v10"/>
    </svg>
  </div>
  
  <span class="font-black text-3xl tracking-tighter">
    Mandar<span class="text-[#2563eb]">Casa</span>
  </span>
</div>
```

---

## Paleta de Colores Oficial

- **Primary Navy:** `#07101f`
- **Accent Blue:** `#2563EB`
- **Surface:** `#0d1a2e`
- **Success Green:** `#22C55E`
- **Text White:** `#F8FAFC`

---

## Próximos Pasos Recomendados

1. Usar el logo HTML arriba en todas las páginas
2. Reemplazar los emojis actuales (`🛒 💊 🎂`) por íconos SVG más profesionales
3. Subir el archivo `logo.svg` a Vercel para usarlo en el favicon y og:image

¿Quieres que reemplace los emojis actuales por íconos SVG en las páginas principales?