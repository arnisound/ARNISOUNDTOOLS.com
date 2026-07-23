import { createClient } from '@supabase/supabase-js';

// Valeurs PUBLIQUES : destinées au navigateur, protégées côté Supabase par les
// Row Level Security policies. Sans danger dans le code client / un dépôt public.
// (La clé secrète `service_role` n'est JAMAIS ici — elle restera un secret Cloudflare.)
export const SUPABASE_URL = 'https://knudezgfliycmakdpdmg.supabase.co';
export const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtudWRlemdmbGl5Y21ha2RwZG1nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ0MDYxMzksImV4cCI6MjA5OTk4MjEzOX0.MWdVW0p2uLnSmhc3q2woJjQ4y9CTbHxyQhOPXaUh3yY';

// Clé de stockage partagée entre le site et les apps (doit être identique partout).
export const STORAGE_KEY = 'arnisound-auth';

// Stockage de session par COOKIE sur `.arnisoundtools.com` → la connexion est
// partagée entre le site et les sous-domaines des apps (avcalc, speedrf, rfshot…).
// Hors production (dev/local, autre hôte) : on laisse Supabase utiliser localStorage.
function cookieStorage() {
  if (typeof document === 'undefined') return undefined;
  if (!location.hostname.endsWith('arnisoundtools.com')) return undefined;

  const domainAttr = '; domain=.arnisoundtools.com';
  const secureAttr = location.protocol === 'https:' ? '; Secure' : '';
  const CHUNK = 3500;
  const b64e = (s: string) =>
    btoa(unescape(encodeURIComponent(s))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  const b64d = (s: string) => {
    s = s.replace(/-/g, '+').replace(/_/g, '/');
    while (s.length % 4) s += '=';
    return decodeURIComponent(escape(atob(s)));
  };
  const readCookie = (name: string): string | null => {
    const esc = name.replace(/([.*+?^${}()|[\]\\])/g, '\\$1');
    const m = document.cookie.match('(?:^|; )' + esc + '=([^;]*)');
    return m ? m[1] : null;
  };
  const writeCookie = (name: string, value: string, maxAge: number) => {
    document.cookie = `${name}=${value}${domainAttr}; path=/; max-age=${maxAge}; SameSite=Lax${secureAttr}`;
  };

  return {
    getItem(key: string): string | null {
      let raw = readCookie(key);
      if (raw === null) {
        let i = 0, acc = '', part: string | null;
        while ((part = readCookie(`${key}.${i}`)) !== null) { acc += part; i++; }
        raw = acc || null;
      }
      if (raw === null) return null;
      try { return b64d(raw); } catch { return null; }
    },
    setItem(key: string, value: string) {
      this.removeItem(key);
      const b = b64e(value);
      if (b.length <= CHUNK) writeCookie(key, b, 31536000);
      else for (let i = 0; i * CHUNK < b.length; i++)
        writeCookie(`${key}.${i}`, b.slice(i * CHUNK, (i + 1) * CHUNK), 31536000);
    },
    removeItem(key: string) {
      writeCookie(key, '', 0);
      for (let i = 0; i < 16; i++) writeCookie(`${key}.${i}`, '', 0);
    },
  };
}

const storage = cookieStorage();

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    ...(storage ? { storage } : {}),
    storageKey: STORAGE_KEY,
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});
