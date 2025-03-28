# Altiore Fiducia – Website Project

## Project Overview

This is a website for Altiore Fiducia, a reinsurance intermediary company located in Quito, Ecuador. The website will be available in both English and Spanish, with the Spanish version being developed first.

## Technical Specifications

- **Framework**: SvelteKit 5
- **Styling**: Tailwind CSS v4
- **Deployment**: Vercel
- **Languages**: Spanish (primary), English (to be added later)
- **SEO**: High priority, structure optimized for search engines
- **Accessibility**: WCAG compliance to be implemented

## Branding

- **Primary Color**: RGB (55 33 92) - To be implemented as a Tailwind theme color with shades from 50-900
- **Secondary Color**: RGB (210 208 51) - To be implemented as a Tailwind theme color with shades from 50-900
- **Design Style**: Serious but elegant, refreshing and unique to stand out from competitors

## Design Elements

- **Typography**: Starting with default fonts, custom fonts to be added later
- **Animations**: Dynamic animations throughout the site using SvelteKit's built-in animation capabilities
- **Media**: Placeholder images and videos initially, to be replaced with final assets

## Website Structure

### Navigation Menu

- Inicio (Home)
- Servicios (Services)
- Sobre Nosotros (About Us)

### Home Page (Inicio)

1. **Hero Section**

   - Background: Video loop (placeholder initially)
   - Title: "Bienvenido a Altiore Fiducia" (with company name highlighted)
   - Description: "Somos un intermediario de reaseguros y ayudamos a nuestros clientes a:"
   - Bullet Points:
     1. Manejar sus riegos
     2. Proteger sus Bienes y recuperar sus perdidas
     3. Mediante este servicio ayudamos a que los negocios e instituciones se mantengan operando y reconstruyendo sus activos

2. **About Us Section**

   - Title: "Sobre Nosotros"
   - Description: "Altiore Fiducia, en latín, significa "la confianza más alta" y es lo que queremos brindar a todos quienes lleguen a nosotros, mediante:"
     1. Coberturas de reaseguros con calidad de respaldo
     2. Security de excelente prestigio a nivel mundial
     3. Eficiencia
   - Includes placeholder image with decorative elements
   - Design Note: Creative title orientation and position, possibly with SVG decorations

3. **Business Values Section**

   - Title: "Nuestros valores empresariales"
   - Values: Trabajo en equipo, colaboracion, generar confianza, inegridad, etica, conocimiento, compromiso, excelencia en el servicio, pasion por el trabajo
   - Animation: Either carousel (infinite looping animation) or typewriter effect (typing characters one by one with blinking cursor, then deleting and typing the next word)

4. **Our Products Section**
   - Title: "Nuestros productos"
   - Description: "Nunca nos quedamos quietos y siempre estamos buscando nuevas formas de crecer y mejorar cómo hacer negocios. Ofrecemos varios productos según tus necesidades."
   - Display: 3 product cards with images
     1. Propiedad: Desde desastres naturales, como huracanes o terremotos, hasta interrupciones operativas y pérdidas económicas, las empresas deben encontrar soluciones de gestión de riesgos.
     2. Maritimo: Ampara las embarcaciones contra las pérdidas o daños que pueda sufrir en el ejercicio normal de sus operaciones de los diferentes tipos de embarcaciones.
     3. Aviacion: La cobertura de aviación se refiere a los seguros que protegen a las aerolíneas, aviones y los pasajeros en caso de accidentes, daños o responsabilidad civil.
   - Button: "Conoce todos nuestros productos" (links to products/services page)

### Footer (All Pages)

Three-column layout:

1. **First Column**

   - Title: "Direccion"
   - Address: Whymper E7 - 141 y Diego de Almagro, Edificio Millecento, Quito, Ecuador
   - Links to pages:
     - Servicios
     - Sobre Nosotros

2. **Second Column**

   - Title: "Nuestra Oficina"
   - Embedded Google Maps showing office location

3. **Third Column**
   - Title: "Contacto"
   - Phone: +593 98 495 1662
   - Emails:
     - Andrea.guevara@altiorefiducia.com
     - Nicole.molina@altiorefiducia.com
   - Social Media:
     - LinkedIn
     - Facebook
     - Instagram

### Other Pages

Additional page requirements (Services and About Us) will be provided after implementing the Home page.

## Implementation Priority

1. Setup project structure and base styling with Tailwind theme
2. Implement Spanish version of Home page
3. Add remaining pages (Services, About Us)
4. Optimize for SEO and accessibility
5. Add English version
