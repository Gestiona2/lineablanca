#!/usr/bin/env bash
# Publica el compilado del sitio en la rama gh-pages del repositorio aislado.
# No modifica ramas ni carpetas de otros demos.
set -euo pipefail
cd "$(dirname "$0")/.."

echo "→ Compilando Línea Blanca para /lineablanca…"
PUBLIC_SITE=https://demos.emp2web.com PUBLIC_BASE=/lineablanca npm run build

repo="${LINEABLANCA_DEMO_REPO:-}"
if [[ -z "$repo" ]]; then
  echo "Falta LINEABLANCA_DEMO_REPO con el repositorio aislado asignado para este demo." >&2
  echo "El script no publicará en otro proyecto ni reutilizará credenciales de otro cliente." >&2
  exit 2
fi

tmp="$(mktemp -d)"
trap 'rm -rf "$tmp"' EXIT
cp -a dist/. "$tmp/"
touch "$tmp/.nojekyll"
cd "$tmp"
git init -q -b gh-pages
git add -A
git -c user.name="Gestiona2" -c user.email="gestiona2@users.noreply.github.com" \
  commit -q -m "Publicar demo Línea Blanca $(date '+%Y-%m-%d %H:%M')"
git remote add origin "$repo"
git push -q origin gh-pages
echo "✓ Publicado: https://demos.emp2web.com/lineablanca/"
