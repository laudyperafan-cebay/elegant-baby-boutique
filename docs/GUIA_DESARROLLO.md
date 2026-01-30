# Guía de Desarrollo y Despliegue

## Pañalera La Elegancia del Baby - Sitio Web

Esta guía explica cómo descargar el código del proyecto, ejecutarlo localmente y desplegarlo en producción.

---

## 📥 1. Descargar el Código

### Requisitos Previos

- **Node.js** (versión 18 o superior) - [Descargar aquí](https://nodejs.org/)
- **Git** - [Descargar aquí](https://git-scm.com/)
- Un editor de código como **VS Code** - [Descargar aquí](https://code.visualstudio.com/)

### Clonar el Repositorio

1. Abre una terminal o consola de comandos
2. Navega a la carpeta donde quieres guardar el proyecto
3. Ejecuta el siguiente comando:

```bash
git clone <URL_DEL_REPOSITORIO>
```

> 💡 **Nota:** Puedes encontrar la URL del repositorio en GitHub, en el botón verde "Code".

4. Entra a la carpeta del proyecto:

```bash
cd nombre-del-proyecto
```

---

## 💻 2. Configuración Local

### Instalar Dependencias

Una vez dentro de la carpeta del proyecto, instala las dependencias necesarias:

```bash
npm install
```

Este comando descargará todas las librerías necesarias para el proyecto.

### Variables de Entorno

El proyecto utiliza Lovable Cloud como backend. Las variables de entorno están preconfiguradas cuando trabajas desde Lovable.

Para desarrollo local, crea un archivo `.env` en la raíz del proyecto con:

```env
VITE_SUPABASE_URL=https://hkptetwbdkosjwuloonr.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhrcHRldHdiZGtvc2p3dWxvb25yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk3MDAwMjQsImV4cCI6MjA4NTI3NjAyNH0.ckKB0KJ_QX-DCFKu3KpOJgYpgLJHNQT8qXfnvzsaKBU
VITE_SUPABASE_PROJECT_ID=hkptetwbdkosjwuloonr
```

### Ejecutar en Desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

El sitio estará disponible en: **http://localhost:5173**

Los cambios que hagas en el código se reflejarán automáticamente en el navegador.

---

## 🏗️ 3. Compilar para Producción

Para crear una versión optimizada lista para producción:

```bash
npm run build
```

Esto generará una carpeta `dist/` con todos los archivos estáticos optimizados.

### Previsualizar la Versión de Producción

Para verificar que todo funciona correctamente antes de desplegar:

```bash
npm run preview
```

---

## 🚀 4. Opciones de Despliegue

### Opción 1: Lovable (Recomendado)

La forma más sencilla de publicar tu aplicación:

1. Ve a tu proyecto en [Lovable](https://lovable.dev)
2. Haz clic en **Share** → **Publish**
3. ¡Listo! Tu sitio estará en vivo

**URL actual del sitio:** https://elegant-baby-boutique.lovable.app

### Opción 2: Vercel

1. Crea una cuenta en [Vercel](https://vercel.com)
2. Conecta tu repositorio de GitHub
3. Configura las variables de entorno:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_PUBLISHABLE_KEY`
   - `VITE_SUPABASE_PROJECT_ID`
4. Haz clic en **Deploy**

### Opción 3: Netlify

1. Crea una cuenta en [Netlify](https://netlify.com)
2. Conecta tu repositorio de GitHub
3. Configura:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Agrega las variables de entorno
5. Haz clic en **Deploy**

### Opción 4: Hosting Propio

Si tienes tu propio servidor:

1. Ejecuta `npm run build`
2. Sube el contenido de la carpeta `dist/` a tu servidor web
3. Configura tu servidor (Nginx/Apache) para servir archivos estáticos
4. Asegúrate de configurar las rutas SPA (todas las rutas deben redirigir a `index.html`)

**Ejemplo de configuración Nginx:**

```nginx
server {
    listen 80;
    server_name tu-dominio.com;
    root /var/www/tu-sitio/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

---

## 📁 5. Estructura del Proyecto

```
├── docs/                    # Documentación
│   ├── CHATBOT_CONTEXT.md   # Contexto del chatbot
│   └── GUIA_DESARROLLO.md   # Esta guía
├── public/                  # Archivos estáticos públicos
├── src/
│   ├── assets/              # Imágenes y recursos
│   ├── components/          # Componentes React
│   │   ├── ui/              # Componentes de interfaz (shadcn)
│   │   ├── Chatbot.tsx      # Chatbot de atención
│   │   ├── Header.tsx       # Encabezado
│   │   ├── Footer.tsx       # Pie de página
│   │   └── ...
│   ├── contexts/            # Contextos de React (carrito, etc.)
│   ├── data/                # Datos mock de productos
│   ├── hooks/               # Hooks personalizados
│   ├── integrations/        # Integraciones (Supabase/Lovable Cloud)
│   ├── pages/               # Páginas de la aplicación
│   └── lib/                 # Utilidades
├── supabase/
│   └── functions/           # Funciones del backend
│       └── chatbot/         # API del chatbot
└── package.json             # Dependencias del proyecto
```

---

## 🔧 6. Comandos Útiles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Compila para producción |
| `npm run preview` | Previsualiza la build de producción |
| `npm run lint` | Verifica errores de código |

---

## ❓ 7. Solución de Problemas

### El chatbot no responde

- Verifica que las variables de entorno estén configuradas correctamente
- Revisa la consola del navegador para ver errores
- Asegúrate de que el backend (Lovable Cloud) esté activo

### Los estilos no cargan

- Ejecuta `npm install` nuevamente
- Borra la carpeta `node_modules` y reinstala

### Error al compilar

- Verifica que tengas Node.js versión 18+
- Revisa los mensajes de error en la terminal

---

## 📞 Soporte

Para dudas o problemas:
- **WhatsApp:** 320 969 4966
- **Proyecto Lovable:** https://lovable.dev/projects/f19f480d-b7a6-49f7-ad90-690669f05770

---

*Última actualización: Enero 2026*
