# Portafolio – Hernán Hernández

Sitio web personal (Digital Marketing & Web Developer). Es HTML, CSS y JavaScript puro: no necesita instalar nada.

## Estructura

```
index.html            Esqueleto de las páginas (Home, About me, Work, Contact me, Proyecto)
css/styles.css        Colores, diseño y versión para celular
js/content.js         TEXTOS de proyectos, certificados y logros  ← aquí se edita el contenido
js/app.js             Navegación, galerías, videos y formulario de contacto
js/media.js           Lista de imágenes y videos (rutas dentro de assets/)
assets/images/        Fotos, logos, logos de herramientas y certificados
assets/videos/        Videos de Routify, UniVan y Vida
```

## Ver el sitio en tu computadora

Abre `index.html` con doble clic. Las tipografías necesitan internet.

## Subirlo a GitHub (tu cuenta: Hdztheboy)

**Opción A – desde la página de GitHub**
1. Entra a https://github.com/Hdztheboy?tab=repositories y pulsa **New**.
2. Nombre del repositorio: `Hdztheboy.github.io` (así el sitio queda en `https://hdztheboy.github.io`). Público. Pulsa **Create repository**.
3. Pulsa **uploading an existing file** y arrastra TODO el contenido de esta carpeta (`index.html`, `css`, `js`, `assets` y este README). Pulsa **Commit changes**.
4. Ve a **Settings → Pages**. En *Branch* elige `main` y `/ (root)`. Pulsa **Save**.
5. En 1 o 2 minutos el sitio estará en `https://hdztheboy.github.io`.

**Opción B – con Git**
```
git init
git add .
git commit -m "Portfolio"
git branch -M main
git remote add origin https://github.com/Hdztheboy/Hdztheboy.github.io.git
git push -u origin main
```

Si usas otro nombre de repositorio, el sitio queda en `https://hdztheboy.github.io/NOMBRE/` y funciona igual (todas las rutas son relativas).

## Cómo editar

- **Textos de un proyecto, certificado o logro:** `js/content.js`. El orden de las tarjetas de Work es el orden de ese archivo (del más nuevo al más antiguo).
- **Cambiar una imagen o video:** reemplaza el archivo en `assets/` con el mismo nombre.
- **Agregar una herramienta:** guarda su logo en `assets/images/tools/`, agrégalo a `js/media.js` (`tool-nombre`) y a `TOOLS` en `js/app.js`. MySQL ya está lista, solo falta asignarla a un proyecto en `content.js`.
- **Colores:** variables al inicio de `css/styles.css`.

## Formulario de contacto

Por defecto el formulario abre un borrador de correo hacia `hernan.m.hernandez.g@gmail.com` (con tu app de correo o con Gmail) y la persona pulsa *Enviar*.

Para recibir los mensajes automáticamente: crea un formulario gratis en https://formspree.io con tu correo, copia su dirección (`https://formspree.io/f/xxxx`) y pégala en `formEndpoint` dentro de `CONFIG` en `js/app.js`. Funciona en GitHub Pages.
