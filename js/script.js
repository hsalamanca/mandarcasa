/* MandarCasa v2 — Polished scripts including Airtable + mobile nav */
(function () {
  // Mobile nav (all pages)
  const navBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (navBtn && mobileMenu) {
    navBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
  }

  // Active nav highlighting
  const current = location.pathname.split('/').pop();
  document.querySelectorAll('nav a').forEach(a => {
    if (a.getAttribute('href') === current) a.classList.add('text-[#3b82f6]');
  });

  // Vendor recruitment form
  const vendorForm = document.getElementById('vendorForm');
  if (vendorForm) {
    vendorForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      const submitBtn = vendorForm.querySelector('button[type="submit"]');
      submitBtn.textContent = 'Enviando...';
      submitBtn.disabled = true;

      const data = {
        negocio: document.getElementById('nombre')?.value,
        categoria: document.getElementById('categoria')?.value,
        whatsapp: document.getElementById('whatsapp')?.value,
        ciudad: document.getElementById('ciudad')?.value,
        descripcion: document.getElementById('descripcion')?.value,
        timestamp: new Date().toISOString()
      };

      // Send to Airtable (if keys present)
      const token = window.MC_AT || '';
      const base  = window.MC_BASE || 'appTwPCd9SiCxSkbL';
      if (token && token.length > 20) {
        try {
          await fetch(`https://api.airtable.com/v0/${base}/Vendors`, {
            method: 'POST',
            headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
            body: JSON.stringify({ fields: data })
          });
        } catch (_) {}
      }

      // Local backup
      const leads = JSON.parse(localStorage.getItem('mc_vendors') || '[]');
      leads.push(data);
      localStorage.setItem('mc_vendors', JSON.stringify(leads));

      vendorForm.style.display = 'none';
      document.getElementById('vendorSuccess').hidden = false;
    });
  }

  // Contact form handling
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      contactForm.style.display = 'none';
      document.getElementById('contactSuccess').hidden = false;
    });
  }
})();