// Préfixe les chemins internes ("/x") avec le base path du site.
// En local / sur domaine racine : BASE_URL = "/" → aucun changement.
// Sur GitHub Pages projet : BASE_URL = "/ARNISOUNDTOOLS.com/" → liens corrects.
// Laisse passer ancres (#...), mailto:, tel:, http(s):// inchangés.
const BASE = import.meta.env.BASE_URL;

export function url(path: string): string {
  if (!path.startsWith('/')) return path;
  return BASE.replace(/\/$/, '') + path;
}
