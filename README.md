# Portfolio — Leonel Rosado
**Vue 3 + Vite + Tailwind CSS**

## Configuración

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## Estructura

```
src/
├── components/
│   ├── TheNav.vue          # Navbar fija con scroll
│   ├── HeroSection.vue     # Hero con stats y stack
│   ├── AboutSection.vue    # Bio + timeline de experiencia
│   ├── ProjectsSection.vue # Grid de 4 proyectos
│   ├── ServicesSection.vue # 4 servicios ofrecidos
│   ├── ContactSection.vue  # Info de contacto
│   └── TheFooter.vue       # Footer
├── App.vue
├── main.js
└── style.css               # Tailwind directives + animaciones globales
```

## Deploy rápido

### Netlify (drag & drop)
```bash
npm run build
# Sube la carpeta /dist a netlify.com/drop
```

### Vercel
```bash
npm install -g vercel
vercel
```

### GitHub Pages
```bash
# En vite.config.js agrega: base: '/nombre-repo/'
npm run build
# Sube /dist a la rama gh-pages
```

## Personalización

- Actualiza tu URL de Upwork en `ContactSection.vue`
- Modifica los proyectos en `ProjectsSection.vue` con detalles reales
- Ajusta los stats en `HeroSection.vue` según tu experiencia
- Colores en `tailwind.config.js` bajo `theme.extend.colors`
