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

  // 4. Keyboard Shortcuts for Power Users / Engineers
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
