#!/usr/bin/env bash
# Publica el compilado del sitio en la rama gh-pages del repositorio aislado.
# No modifica ramas ni carpetas de otros demos.
set -euo pipefail
cd "$(dirname "$0")/.."

echo "→ Compilando Línea Blanca para /lineablanca…"
PUBLIC_SITE=https://demos.emp2web.com PUBLIC_BASE=/lineablanca npm run build

repo="https://github.com/Gestiona2/lineablanca.git"

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
git -c credential.helper= -c credential.helper='!gh auth git-credential' \
  push -q -f origin gh-pages
echo "✓ Publicado: https://demos.emp2web.com/lineablanca/"
