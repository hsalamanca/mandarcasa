/* ── MandarCasa shared JavaScript ── */

/* ── Nav active link ── */
(function () {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links li, .nav__mobile li').forEach(li => {
    const a = li.querySelector('a');
    if (a && a.getAttribute('href') === page) li.classList.add('active');
  });
})();

/* ── Mobile hamburger ── */
const hamburger = document.querySelector('.nav__hamburger');
const mobileMenu = document.querySelector('.nav__mobile');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', open);
  });
  document.addEventListener('click', e => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.remove('open');
    }
  });
}

/* ── Scroll-reveal ── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── Sticky nav border ── */
const nav = document.querySelector('.nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.style.borderBottomColor = window.scrollY > 10 ? 'rgba(30,48,80,0.9)' : 'var(--border)';
  }, { passive: true });
}

/* ── Smooth scroll for anchor links ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ── Vendor form (proveedores.html) ── */
const vendorForm = document.getElementById('vendorForm');
if (vendorForm) {
  vendorForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    const btn = vendorForm.querySelector('.submit-btn');
    btn.textContent = 'Enviando...';
    btn.disabled = true;

    const data = {
      negocio:     document.getElementById('nombre')?.value || '',
      categoria:   document.getElementById('categoria')?.value || '',
      whatsapp:    document.getElementById('whatsapp')?.value || '',
      ciudad:      document.getElementById('ciudad')?.value || '',
      descripcion: document.getElementById('descripcion')?.value || '',
      timestamp:   new Date().toISOString(),
      origen:      'mandarcasa.com/proveedores'
    };

    /* ── Airtable submission ── */
    const AIRTABLE_TOKEN = window.MC_AT || '';
    const AIRTABLE_BASE  = window.MC_BASE || 'appTwPCd9SiCxSkbL';
    const AIRTABLE_TABLE = 'Vendors';

    let submitted = false;
    if (!AIRTABLE_TOKEN.startsWith('AIRTABLE')) {
      try {
        const resp = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE}/${AIRTABLE_TABLE}`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${AIRTABLE_TOKEN}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            typecast: true,
            fields: {
              'Vendor Name': data.negocio,
              'Categoria':   data.categoria,
              'WhatsApp':    data.whatsapp,
              'Ciudad':      data.ciudad,
              'Descripcion': data.descripcion,
              'Origen':      data.origen
            }
          })
        });
        submitted = resp.ok;
      } catch (_) { submitted = false; }
    }

    /* Fallback: save to localStorage */
    const leads = JSON.parse(localStorage.getItem('mc_vendor_leads') || '[]');
    leads.push(data);
    localStorage.setItem('mc_vendor_leads', JSON.stringify(leads));

    vendorForm.style.display = 'none';
    const successEl = document.getElementById('vendorSuccess');
    if (successEl) { successEl.style.display = 'block'; successEl.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
  });
}

/* ── Contact form (contacto.html) ── */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    contactForm.style.display = 'none';
    const successEl = document.getElementById('contactSuccess');
    if (successEl) { successEl.style.display = 'block'; successEl.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
  });
}

/* ── Toast helper ── */
function showToast(msg, type = 'info') {
  const toast = document.createElement('div');
  toast.textContent = msg;
  Object.assign(toast.style, {
    position: 'fixed', bottom: '100px', right: '24px', zIndex: '999',
    background: type === 'success' ? '#10b981' : '#2563eb',
    color: '#fff', padding: '12px 20px', borderRadius: '8px',
    fontSize: '0.875rem', fontWeight: '600', boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
    transition: 'opacity 0.4s', opacity: '1'
  });
  document.body.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; setTimeout(() => toast.remove(), 400); }, 3000);
}
