# Publicación

Demo prevista: `https://demos.emp2web.com/lineablanca/`.

El script `scripts/publicar-demo.sh` compila con base `/lineablanca` y publica el resultado en la rama `gh-pages` de un repositorio aislado. Requiere que Emp2Web asigne `LINEABLANCA_DEMO_REPO` y configure autenticación. Si falta el repositorio, el script aborta sin subir nada.

No usar una publicación forzada ni apuntar a repositorios de otros demos. El cliente debe aprobar la vista previa antes de publicar.
