/**
 * Aravindh Subramaniyan — Portfolio Minimal Script
 * Principles: Minimalist, Accessible, Zero Bloat, Fast
 */

(function () {
  'use strict';

  // 1. Theme Toggle Management
  const STORAGE_KEY = 'aravindh-theme';
  const html = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');

  function getSystemPreference() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme, save = true) {
    if (theme === 'system') {
      html.removeAttribute('data-theme');
      if (save) localStorage.removeItem(STORAGE_KEY);
      if (themeToggle) themeToggle.textContent = 'theme: auto';
    } else {
      html.setAttribute('data-theme', theme);
      if (save) localStorage.setItem(STORAGE_KEY, theme);
      if (themeToggle) themeToggle.textContent = `theme: ${theme}`;
    }
  }

  // Initialize theme
  const savedTheme = localStorage.getItem(STORAGE_KEY);
  if (savedTheme === 'dark' || savedTheme === 'light') {
    applyTheme(savedTheme, false);
  } else {
    applyTheme('system', false);
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      const current = html.getAttribute('data-theme');
      if (!current) {
        // Was system, toggle to opposite of current system
        const sys = getSystemPreference();
        applyTheme(sys === 'dark' ? 'light' : 'dark');
      } else if (current === 'light') {
        applyTheme('dark');
      } else {
        applyTheme('system');
      }
    });
  }

  // 2. Clipboard utility for email
  window.copyEmail = function (event) {
    if (event) event.preventDefault();
    const email = 'aravinth30x@gmail.com';
    
    function showToast() {
      const toasts = document.querySelectorAll('.copy-feedback-toast');
      toasts.forEach(toast => {
        toast.style.display = 'inline';
        setTimeout(() => {
          toast.style.display = 'none';
        }, 2400);
      });
    }

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(email).then(showToast).catch(() => {
        fallbackCopy(email, showToast);
      });
    } else {
      fallbackCopy(email, showToast);
    }
  };

  function fallbackCopy(text, callback) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    textArea.style.top = '0';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      if (callback) callback();
    } catch (err) {
      console.error('Fallback copy failed', err);
    }
    document.body.removeChild(textArea);
  }

  // 3. Listen to system preference changes if in auto mode
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if (!localStorage.getItem(STORAGE_KEY)) {
        applyTheme('system', false);
      }
    });
  }

  // 4. Fallback for opening index.html directly via file:// (CORS bypass for local inspection)
  if (window.location.protocol === 'file:') {
    document.addEventListener('click', function(e) {
      const btn = e.target.closest('.btn-arch-inspect');
      if (!btn) return;
      const targetId = btn.getAttribute('hx-target');
      if (!targetId) return;
      const targetEl = document.querySelector(targetId);
      if (!targetEl) return;

      // Map partial to content if file protocol blocks fetch
      const partialPath = btn.getAttribute('hx-get');
      const specs = {
        'partials/schooliq-arch.html': `
          <div class="project-deepdive-panel" id="deepdive-schooliq">
            <div class="deepdive-header">
              <div class="deepdive-title-wrap">
                <span class="deepdive-tag">ARCH_SPEC // 01</span>
                <h4 class="deepdive-title">SchoolIQ — System Architecture & Data Flow</h4>
              </div>
              <button type="button" class="deepdive-close-btn" onclick="document.getElementById('deepdive-schooliq').remove()" aria-label="Close">[close ✕]</button>
            </div>
            <div class="deepdive-grid">
              <div class="deepdive-block"><h5>Multi-Tenant Isolation</h5><p>Tenant partitioning at PostgreSQL schema level with row-level security (RLS) policies. Connection pooling via PgBouncer.</p></div>
              <div class="deepdive-block"><h5>Curriculum RAG Engine</h5><p>NCERT / State Board textbooks chunked via recursive character tokenizers, embedded via Vertex AI, and indexed into ChromaDB.</p></div>
              <div class="deepdive-block"><h5>Asynchronous Workflows</h5><p>Redis-backed BullMQ clusters handle long-running operations: PDF exam compilation and WhatsApp notifications.</p></div>
              <div class="deepdive-block"><h5>Telematics & Live Tracking</h5><p>School transit fleet tracking using WebSockets and Google Maps API with server-side point clustering.</p></div>
            </div>
          </div>`,
        'partials/cheran-arch.html': `
          <div class="project-deepdive-panel" id="deepdive-cheran">
            <div class="deepdive-header">
              <div class="deepdive-title-wrap">
                <span class="deepdive-tag">ARCH_SPEC // 02</span>
                <h4 class="deepdive-title">Cheran Groups ERP — Relational Schema & State Machine</h4>
              </div>
              <button type="button" class="deepdive-close-btn" onclick="document.getElementById('deepdive-cheran').remove()" aria-label="Close">[close ✕]</button>
            </div>
            <div class="deepdive-grid">
              <div class="deepdive-block"><h5>Strict Transactional Integrity</h5><p>PostgreSQL SERIALIZABLE transactions and row locking prevent double-allocation during peak production shifts.</p></div>
              <div class="deepdive-block"><h5>WIP State Machine</h5><p>Formal state transitions for shop-floor job cards, tracking materials from consumption to finished goods.</p></div>
              <div class="deepdive-block"><h5>Query Optimization</h5><p>Composite indexing and materialized views reduce complex inventory aggregation from 1.8s to under 45ms.</p></div>
              <div class="deepdive-block"><h5>Audit Trails</h5><p>Immutable event log tables capturing every ledger adjustment and operator authorization for compliance.</p></div>
            </div>
          </div>`,
        'partials/ithihasa-arch.html': `
          <div class="project-deepdive-panel" id="deepdive-ithihasa">
            <div class="deepdive-header">
              <div class="deepdive-title-wrap">
                <span class="deepdive-tag">ARCH_SPEC // 03</span>
                <h4 class="deepdive-title">Ithihasa — High-Performance Mobile Commerce Architecture</h4>
              </div>
              <button type="button" class="deepdive-close-btn" onclick="document.getElementById('deepdive-ithihasa').remove()" aria-label="Close">[close ✕]</button>
            </div>
            <div class="deepdive-grid">
              <div class="deepdive-block"><h5>PWA Architecture</h5><p>Service workers with Cache-First strategies for static assets and Stale-While-Revalidate for catalog queries.</p></div>
              <div class="deepdive-block"><h5>Offline Cart Sync</h5><p>Client-side IndexedDB persistence with automated exponential backoff synchronization when connectivity fluctuates.</p></div>
              <div class="deepdive-block"><h5>Merchant Portal</h5><p>Real-time SKU stock synchronization, bulk product variant upload, and automated webhook triggers for orders.</p></div>
              <div class="deepdive-block"><h5>Optimized Asset Pipeline</h5><p>Automated WebP compression with responsive srcset generation keeping mobile payload under 250KB.</p></div>
            </div>
          </div>`
      };

      if (specs[partialPath]) {
        targetEl.innerHTML = specs[partialPath];
      }
    });
  }

  // 5. Keyboard Shortcuts for Power Users / Engineers
  document.addEventListener('keydown', function (e) {
    // Only trigger if not typing in an input/textarea
    if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

    if (e.key === 'c' || e.key === 'C') {
      window.copyEmail();
    } else if (e.key === 't' || e.key === 'T') {
      if (themeToggle) themeToggle.click();
    } else if (e.key === 'r' || e.key === 'R') {
      const resumeLink = document.querySelector('a[href*="resume.pdf"]');
      if (resumeLink) resumeLink.click();
    }
  });

})();

