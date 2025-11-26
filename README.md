# Prueba técnica DUX – Página Home

Este proyecto ha sido desarrollado con **Angular 17.1.0**, utilizando *Standalone Components* y SCSS siguiendo una estructura modular basada en BEM. Su finalidad es implementar la página de inicio proporcionada en Figma, replicando el diseño en móvil, tablet y escritorio.

---

## 🧩 Tecnologías utilizadas

- **Angular 17.1.0**  
- **TypeScript**  
- **SCSS modular** (variables, mixins, tipografías y base)  
- **Swiper 12** para el hero slider  
- **HTML semántico**  
- **Metodología BEM**

---

## 📁 Estructura del proyecto

El proyecto está organizado en componentes independientes:

- **HeaderComponent**  
- **HeroComponent** (Swiper)  
- **CardsGridComponent**  
- **TravelCardComponent**  
- **FooterComponent**
- **Hero**
- **Price-modal**
- **Filters-sidebar**
- **Travel-card**

La maquetación se ha realizado con enfoque **mobile-first**, aplicando breakpoints adaptados al diseño de Figma.

---

## 🎨 Estilos y maquetación

Los estilos globales se organizan en:

- `styles/variables.scss`  
- `styles/mixins.scss`  
- `styles/typography.scss`  
- `styles/base.scss` 
- `styles/atoms/buttons.scss`
- `styles/atoms/tooltip.scss`

Cada componente incorpora su propio archivo SCSS siguiendo **BEM**, priorizando claridad y mantenibilidad.

También se han personalizado algunos estilos del componente Swiper mediante selectores específicos para adaptar la paginación y las flechas de navegación al diseño proporcionado.

---

## ♿ Accesibilidad

- Estructura semántica (section, nav, article…).  
- Correcta jerarquía de títulos.  
- Colores y contrastes coherentes con el diseño.

---

## 🗂️ Datos y contenido

El grid de tarjetas utiliza **datos mock** definidos en el componente, ya que la prueba no incluye conexión a API.

---


## 📌 Comentarios finales

El objetivo principal ha sido reproducir el diseño de Figma de forma fiel, priorizando:

- Responsive en mobile, tablet, tablet-lg y desktop.  
- Código limpio y organizado.  
- Separación clara entre componentes.  
- Uso adecuado de Angular y SCSS para un proyecto escalable.

El diseño no utiliza un sistema de breakpoints consistente, lo que limitó la posibilidad de definir variables globales exactamente alineadas con el Figma.

---

## 🚀 Instalación y ejecución

### 1. Instalar dependencias
```bash
npm install
```

### 2. Ejecutar el servidor de desarrollo
```bash
ng serve
```

### 3. Acceder en navegador
```
http://localhost:4200/
```

La aplicación recargará automáticamente al modificar cualquier archivo fuente.

---
## 🛠️ Build

```bash
ng build
```

Los artefactos generados se almacenarán en la carpeta `dist/`.



