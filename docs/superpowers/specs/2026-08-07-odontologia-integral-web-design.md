# Odontología Integral — Sitio web (Home one-page)

**Fecha:** 2026-08-07
**Estado:** Aprobado por el usuario, listo para plan de implementación

## Objetivo

Sitio de presencia y captación de pacientes para el consultorio "Odontología Integral", con dos odontólogos (Adrián Nader y Carolina Bellido). Objetivo principal: que un visitante entienda los servicios ofrecidos, conozca a los profesionales, y contacte por WhatsApp fácilmente.

## Stack

- **React + TypeScript**, bundler **Vite**.
- **Firebase**: Hosting para deploy, Firestore inicializado con una colección `contacts` que registra cada click en el botón de WhatsApp (para tener historial desde ya, sin exponer un formulario visible todavía). Pensado para poder crecer a turnos online más adelante sin rehacer la base.
- **Atomic Design** en `src/components/`.
- Código (archivos, componentes, props, tipos) en **inglés**. Comentarios en **español**, solo donde algo no sea obvio a partir del código (ej. por qué se registra el click de WhatsApp en Firestore).

## Estructura de carpetas

```
odontologia-integral/
├── firebase.json
├── .firebaserc
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── firebase/
│   │   ├── config.ts          # Inicialización de Firebase App
│   │   └── contacts.ts        # logContactClick(): escribe en Firestore
│   ├── assets/
│   │   └── logo.png           # Logo real provisto por el usuario
│   ├── styles/
│   │   └── tokens.css         # Variables CSS (color, tipografía, espaciado)
│   ├── data/
│   │   └── content.ts         # Datos estáticos: doctores, servicios, contacto
│   ├── types/
│   │   └── index.ts           # Doctor, Service, ContactInfo
│   └── components/
│       ├── atoms/
│       │   ├── Button.tsx
│       │   ├── Heading.tsx
│       │   ├── Text.tsx
│       │   ├── Icon.tsx
│       │   ├── Badge.tsx
│       │   ├── GradientText.tsx
│       │   └── Logo.tsx
│       ├── molecules/
│       │   ├── NavLink.tsx
│       │   ├── DoctorCard.tsx
│       │   ├── ServiceCard.tsx
│       │   ├── ContactInfoItem.tsx
│       │   └── WhatsAppButton.tsx
│       ├── organisms/
│       │   ├── Header.tsx
│       │   ├── Hero.tsx
│       │   ├── ServicesSection.tsx
│       │   ├── DoctorsSection.tsx
│       │   ├── ContactSection.tsx
│       │   └── Footer.tsx
│       ├── templates/
│       │   └── HomeTemplate.tsx
│       └── pages/
│           └── HomePage.tsx
```

## Diseño visual

Basado en la opción "C — Cálido intermedio" validada por mockup.

- **Paleta**: blanco `#ffffff` (base), negro `#0a0a0a` (texto/acentos), gris secundario `#555555` / `#999999`, degradé `#0a0a0a → #2b2b2b` usado puntualmente (tarjeta de Adrián, botones, texto destacado).
- **Tipografía**: serif de display (Georgia/Fraunces) para títulos, sans-serif del sistema para cuerpo y UI.
- **Un solo tema (blanco fijo)**: el sitio no se adapta al modo oscuro del sistema operativo del visitante — se decidió mantener siempre el look blanco/negro del mockup aprobado, sin importar la preferencia de tema del dispositivo.
- **Íconos**: SVG en línea (trazo simple, sin relleno), no emoji — coherentes con la paleta blanco/negro.
- **Logo**: provisto por el usuario (isotipo en degradé negro con "Odontología Integral" en texto negro). Se guarda en `src/assets/logo.png` y se usa en `Logo.tsx` (Header y Footer).

## Contenido y secciones (Home, one-page con scroll)

1. **Header**: `Logo` + nav anclada a secciones (`#servicios`, `#nosotros`, `#contacto`) + `WhatsAppButton` visible.
2. **Hero**: título con `GradientText` de acento + CTA "Agendar consulta" → WhatsApp.
3. **Servicios** (grilla única, 4 tarjetas): Endodoncia, Implantes dentales, Odontopediatría, Ortodoncia — ícono + descripción corta.
4. **Nosotros / Doctores**: `DoctorCard` para cada uno.
   - **Adrián Nader** — Endodoncia, Implantes dentales
   - **Carolina Bellido** — Odontopediatría, Ortodoncia
5. **Contacto**:
   - WhatsApp: **+54 9 11 5834-8249** (link `wa.me`, con mensaje predefinido)
   - Horarios: Lunes a Viernes, 9:00 a 20:00 hs
   - Dirección: Domingo de Acassuso 6201, B1606 Carapachay, Provincia de Buenos Aires, Argentina
   - Mapa embebido (Google Maps `iframe`, sin API key — embed simple)
   - Sin redes sociales por ahora (no se muestra esa sección)
6. **Footer**: nombre del consultorio, dirección corta, WhatsApp — sin íconos de redes sociales.

## Integración con Firebase (contacts)

- `src/firebase/config.ts` inicializa la app de Firebase (usa variables de entorno `VITE_FIREBASE_*` vía `.env`, no hardcodeadas).
- `src/firebase/contacts.ts` expone `logContactClick(source: string)`, que escribe un documento en la colección `contacts` de Firestore con `{ source, timestamp: serverTimestamp() }` cada vez que se hace click en un `WhatsAppButton`. `source` identifica desde qué botón se originó el click (ej. `"hero"`, `"contact-section"`, `"header"`).
- El click abre el link de WhatsApp (`wa.me/5491158348249?text=...`) en paralelo, sin bloquear la navegación si Firestore falla (best-effort, con `catch` silencioso — no debe impedir que el usuario contacte).
- Reglas de Firestore (`firestore.rules`): la colección `contacts` permite solo `create` desde el cliente (sin `read`/`update`/`delete` públicos), para no exponer los datos registrados.

## Deploy

- `firebase.json` configura Hosting apuntando a `dist/` (build de Vite), con rewrite a `index.html` (SPA).
- Deploy manual vía `firebase deploy` cuando el usuario lo decida (no se automatiza en este proyecto).
- La creación del proyecto de Firebase (`firebase login`, `firebase projects:create` o alta desde la consola) la hace el usuario con su propia cuenta de Google — no es una acción que se automatice acá. El plan de implementación deja instrucciones paso a paso para esto.
- **Dominio custom**: el usuario tiene `odontologiaintegral.ar` registrado en Donweb. Conectarlo a Firebase Hosting requiere, del lado del usuario: agregar el dominio en Firebase Hosting (consola) y cargar los registros DNS que Firebase indique (A o TXT de verificación) en el panel de Donweb. Se documentan los pasos exactos en el plan de implementación; no se puede automatizar sin acceso a esas cuentas.

## Fuera de alcance (explícitamente no incluido ahora)

- Formulario de contacto con validación.
- Sistema de turnos online / disponibilidad.
- Envío de email vía Cloud Functions.
- Múltiples páginas (todo vive en la Home).
- Sección de redes sociales (el consultorio no tiene aún).
- Imágenes reales de doctores/consultorio (se usan placeholders hasta que el usuario las provea; el logo sí es real y se integra desde el inicio).
