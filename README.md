# Centro Médico Campeche — sitio web

Sitio informativo estático del Centro Médico Campeche, hospital privado en
San Francisco de Campeche.

Estado: Inicio, Sobre Nosotros, Servicios y Paquetes de Maternidad están
construidos con contenido real. Promociones, Contacto y Aviso de Privacidad
siguen como páginas de andamio.

---

## Requisitos

| Herramienta | Versión           |
| ----------- | ----------------- |
| Node.js     | **22.12 o mayor** |
| npm         | 10 o mayor        |

Astro 7 exige Node `>=22.12.0` y el motor de Tailwind v4 (`@tailwindcss/oxide`)
exige `>=20`. Con Node 18 el proyecto **no compila**.

Si usa `nvm-windows`:

```sh
nvm install 22.20.0
nvm use 22.20.0
node -v          # debe imprimir v22.x
```

## Puesta en marcha

```sh
npm install
npm run dev      # http://localhost:4321/CentroMedicoCampeche/
npm run build    # genera dist/
npm run preview  # sirve dist/ tal como quedará publicado
npm run check    # revisión de tipos de Astro
```

> El servidor sirve bajo `/CentroMedicoCampeche/` porque ese es el `base`
> configurado para GitHub Pages. **`http://localhost:4321/` a secas devuelve
> 404**: hay que entrar con la ruta completa. No es un error del sitio.

---

## Cómo mostrar el avance

### Si `node -v` no imprime v22 o mayor

`nvm use` requiere una terminal de administrador. Para una sesión suelta, sin
tocar la configuración global, basta con anteponer la ruta al `PATH`:

```powershell
# PowerShell
$env:Path = "$env:LOCALAPPDATA\nvm\v22.23.2;$env:Path"
node -v      # v22.23.2
```

Para dejarlo permanente, en una terminal **como administrador**:

```powershell
nvm use 22.23.2
```

### Para enseñarlo

```powershell
npm run build
npm run preview -- --host
```

Imprime dos direcciones:

- `http://localhost:4321/CentroMedicoCampeche/` — en esta computadora
- `http://<IP-local>:4321/CentroMedicoCampeche/` — desde un celular o tablet
  en la misma red Wi-Fi

La segunda es la que conviene para enseñar el sitio: el diseño es mobile-first
y el carrusel tiene swipe táctil, cosas que no se aprecian en un escritorio.

El servidor queda corriendo en segundo plano. Para detenerlo:

```sh
npx astro preview stop     # o `npx astro dev stop` si usó dev
npx astro preview status   # para saber si sigue vivo
```

### `preview` o `dev`

- **`preview`** sirve `dist/`, es decir el resultado real del build. Es lo que
  conviene para una demo: idéntico a lo que verá el cliente publicado.
- **`dev`** recarga al guardar. Para editar textos mientras alguien mira.

> No sirva el proyecto desde Apache/XAMPP. El `base` del sitio es
> `/CentroMedicoCampeche/` y la carpeta del proyecto ocupa esa misma ruta en
> `htdocs`, así que Apache mostraría el listado de archivos, no el sitio.

---

## Stack

- **Astro 7**, salida 100 % estática
- **Tailwind CSS 4** vía `@tailwindcss/vite`, con los tokens declarados en
  `@theme` dentro de `src/styles/global.css`
- **TypeScript** en modo estricto
- **Embla Carousel** para el hero, cargado de forma diferida
- **@fontsource** para autoalojar Inter y Source Serif 4
- Imágenes optimizadas a WebP con el componente `<Image />` de Astro

---

## Estructura

```
src/
├── assets/img/      Imágenes fuente (placeholders, ver más abajo)
├── components/
│   ├── home/        Secciones exclusivas de la página de Inicio
│   ├── layout/      Header, footer, barra de utilidad, menú móvil, logo
│   └── ui/          Piezas reutilizables + set de iconos
├── data/            TODO el contenido editable, tipado
├── layouts/         BaseLayout: <head>, header, main, footer
├── lib/url.ts       Helper de rutas (obligatorio por el `base` de Pages)
├── pages/           Una ruta por archivo
├── scripts/         Lógica de cliente del carrusel
└── styles/          Sistema de diseño
```

**Regla del proyecto:** el texto no se escribe dentro de los componentes. Todo
contenido editable vive en `src/data/`, para que actualizarlo no obligue a tocar
el marcado.

---

## Contenido pendiente de reemplazar

Todo lo marcado con `{{DOBLE_LLAVE}}` es provisional. Búsquelo con:

```sh
grep -rn "{{" src/
```

### Contacto y ubicación — `src/data/site.ts`

Ya son datos reales confirmados: dirección, mapa, WhatsApp, conmutador,
urgencias (981 175 6512), Facebook e Instagram. El hospital no publica correo: la cuenta que
se usaba quedó fuera de servicio. Queda un punto abierto:

| Marcador                      | Qué es                                              |
| ----------------------------- | --------------------------------------------------- |
| `{{RAZON_SOCIAL}}`            | Nombre legal, para el aviso de privacidad           |

> `directionsUrl` y las redes sociales deben quedar como **URL absolutas**
> (`https://…`). Una cadena suelta se interpreta como ruta interna y el helper
> `withBase` la prefijaría con `/CentroMedicoCampeche/`, generando un enlace roto.

### Cifras y servicios

| Marcador                               | Archivo                               |
| -------------------------------------- | ------------------------------------- |
| `{{NUMERO_ESPECIALISTAS}}`             | `src/data/stats.ts`                   |
| `{{NUMERO_CAMAS}}`                     | `src/data/stats.ts`                   |
| `{{NUMERO_ASEGURADORAS}}`              | `src/data/stats.ts`                   |
| `{{ESTUDIOS_DE_IMAGEN_DISPONIBLES}}`   | `src/data/services.ts`                |
| `{{NUMERO_ESPECIALIDADES}}`            | `src/data/quickAccess.ts`             |
| `{{NUMERO_CONSULTAS}}`                 | `src/components/home/Maternity.astro` |
| `{{VIGENCIA_PAQUETES_MATERNIDAD}}`     | `src/data/maternity.ts`               |
| `{{VIGENCIA_PROMO_*}}`                 | `src/data/promotions.ts`              |
| `{{SEMANA_GESTACION}}`                 | `src/data/promotions.ts`              |

Los marcadores no se escriben crudos en pantalla: `src/components/ui/Val.astro`
los convierte en una ficha pequeña, para que un dato pendiente compuesto a 40 px
no desborde la retícula.

En `promotions.ts` cada promoción lleva **dos** campos de fecha:
`validUntilLabel` (lo que se lee) y `validUntilISO` (el `datetime` del elemento
`<time>`, en formato `AAAA-MM-DD`). Deben coincidir.

### Imágenes

Casi todas las fotos de `src/assets/img/` son **recortes de las piezas
promocionales** del hospital, hechos para quitarles el texto incrustado. Los
archivos `*-ficha.jpg` son la pieza original completa; los demás, el recorte
que se publica.

Van de 348 a 1020 px de ancho, así que `ServiceDetail.astro` acota el `srcset`
y el ancho de presentación al tamaño nativo de cada archivo: ninguna se amplía.
**Si aparecen las fotografías originales —no los flyers— varias se verían al
doble de tamaño**, sobre todo laboratorio (348 px), cirugía (420 px) y
urología (480 px).

Las cuatro `hero-0*.png` del carrusel son **piezas gráficas terminadas del
cliente**, de 1920x800 px (proporción 12:5). El marco del carrusel usa esa misma
proporción en todos los tamaños, así que entran completas: ni recorte ni bandas.
Al reemplazar alguna, conserve los 1920x800 y **reescriba su `alt`** en
`src/data/heroSlides.ts`, que transcribe el texto incrustado en la pieza.

> Estas piezas se leen mal en un teléfono: su texto está compuesto para 1920 px
> de ancho y en una pantalla de 375 px se reduce cinco veces. Para móvil hacen
> falta versiones más cerradas, con el titular y poco más.

Pendiente `{{LOGOTIPO_PNG_O_SVG_CON_TRANSPARENCIA}}`: el logotipo actual es un
JPG con fondo azul macizo, por eso se presenta como disco circular. Con un PNG
o SVG transparente podría ir recortado sobre el blanco del header.

---

## Sistema de diseño

Definido una sola vez en `src/styles/global.css`, dentro de `@theme`. Tailwind
genera las utilidades a partir de esos tokens, así que **no debe aparecer un
color, un tamaño de fuente ni un radio escrito a mano** en ningún componente.

### Color

| Token             | Valor     | Uso                                            |
| ----------------- | --------- | ---------------------------------------------- |
| `--color-deep`    | `#0A2540` | Header, footer, franjas oscuras, títulos       |
| `--color-primary` | `#1264A3` | Botones principales y enlaces                  |
| `--color-mid`     | `#3A8DCB` | Bordes y elementos secundarios                 |
| `--color-aqua`    | `#7FC3D9` | Detalles e iconos, y texto sobre azul profundo |
| `--color-surface` | `#EDF4F9` | Fondo de secciones alternas                    |
| `--color-amber`   | `#E39A2C` | **Solo** CTA del hero y CTA de Maternidad      |
| `--color-urgent`  | `#C0342B` | **Solo** el botón de urgencias                 |
| `--color-ink`     | `#12222E` | Texto                                          |
| `--color-muted`   | `#56707F` | Texto tenue                                    |

Dos reglas heredadas del brief que conviene no romper al seguir construyendo:

- **El ámbar aparece dos veces en toda la página de Inicio.** Ni una más. Por eso
  el botón «Agendar cita» del header es azul y no ámbar: al ser un header
  pegajoso, el acento saldría en todas las pantallas.
- **El rojo es exclusivo del botón de urgencias.** La tarjeta de urgencias en
  los accesos rápidos se destaca invirtiéndola a azul profundo, no con rojo.

### Accesibilidad

Decisiones que ya están tomadas y no deberían revertirse sin medir contraste:

- El botón ámbar lleva **texto tinta**, no blanco: blanco sobre `#E39A2C` da
  2.3:1 y reprueba AA. Con `#12222E` sube a 6.9:1.
- El velo del carrusel deja el azul profundo al 80–94 % sobre la zona del texto.
  Eso da 8.6:1 con texto blanco **incluso si la fotografía de abajo fuera
  completamente blanca**, así que cualquier foto que se coloque después seguirá
  cumpliendo.
- Toda área táctil mide al menos 44 × 44 px (utilidad `tap-target`).
- Cada animación está dentro de `prefers-reduced-motion: no-preference`, y el
  carrusel no arranca solo si el usuario pidió menos movimiento.
- El `<h1>` de Inicio está oculto visualmente y es fijo. El titular de cada
  diapositiva es un `<p>`: un documento no puede cambiar de encabezado principal
  cada seis segundos.

---

## Despliegue en GitHub Pages

1. En `astro.config.mjs`, cambie `usuario-github` por su usuario u organización
   (marcador `{{GITHUB_USER}}`). Si el repositorio no se llama
   `CentroMedicoCampeche`, ajuste también `BASE`.
2. Suba el proyecto a la rama `main`.
3. En GitHub: **Settings › Pages › Build and deployment › Source: GitHub Actions**.
4. Cada push a `main` dispara `.github/workflows/deploy.yml`.

Para publicar en un dominio propio: ponga `BASE = '/'`, actualice `SITE` con el
dominio y agregue un archivo `public/CNAME` con el nombre del dominio.

`public/.nojekyll` es obligatorio: sin él, GitHub Pages ignora los directorios
que empiezan con guion bajo que genera Astro.
