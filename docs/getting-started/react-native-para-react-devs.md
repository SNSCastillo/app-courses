# React Native para desarrolladores de React

Esta guía está pensada para quien ya trabaja con React, Vite y Next.js. Lo nuevo es construir interfaces nativas y adaptarse a las APIs, navegación y herramientas móviles.

## 1. Preparar el entorno

Este proyecto usa Expo SDK 57, React Native y Expo Router.

1. Instala Node.js y npm.
2. Instala **Expo Go** desde Google Play en un teléfono Android.
3. Desde la raíz del proyecto, instala dependencias y arranca Expo:

   ```bash
   npm install
   npm run start
   ```

4. Escanea el QR que aparece en la terminal con Expo Go. Mantén el teléfono y el equipo en la misma red.

También puedes usar:

```bash
npm run android
```

Este comando inicia el proyecto apuntando a Android y puede abrirlo en un dispositivo conectado o emulador. Para usar un emulador necesitas tener preparado el entorno Android; para empezar rápido con un teléfono, `npm run start` y Expo Go son suficientes.

## 2. Comparación

| En React web | En React Native |
| --- | --- |
| `div` | `View` |
| `p`, `span`, títulos | `Text` |
| `button` | `Pressable` o `Button` |
| CSS / CSS Modules | `StyleSheet` y estilos en JavaScript |
| DOM y eventos web | Componentes y eventos nativos |
| Diseño principalmente web | Android, iOS y, si aplica, web |

Los componentes visuales vienen de `react-native`, no de HTML. Los estilos se escriben en JavaScript y Flexbox funciona de forma parecida a CSS, con diferencias importantes: por ejemplo, la dirección predeterminada es `column` y las dimensiones suelen expresarse en unidades independientes de densidad, sin `px`.

## 3. Aprender en este orden

1. **Componentes y estilos:** `View`, `Text`, `Image`, `Pressable`, `StyleSheet` y Flexbox.
2. **Diseño móvil:** áreas seguras, distintos tamaños de pantalla, teclado, gestos y accesibilidad.
3. **Navegación:** Expo Router usa archivos para definir rutas, algo familiar si conoces el App Router de Next.js. Aquí las rutas se encuentran en `src/app/`; `_layout.tsx` organiza la navegación. No hay que asumir que las funciones de servidor de Next.js se trasladan a una app nativa.
4. **Estado y datos:** reutiliza tus conocimientos de hooks, formularios y llamadas HTTP. Separa las pantallas de las reglas de negocio y del acceso a datos.
5. **Capacidades del dispositivo:** aprende permisos y módulos para cámara, ubicación, notificaciones u otras funciones solo cuando el producto las necesite.
6. **Pruebas y distribución:** valida en Android y iOS; cuando Expo Go no alcance, pasa a una development build y después prepara la distribución.

## 4. Expo Go y development builds

Expo Go sirve para ejecutar y probar rápidamente este proyecto mientras se trabaja con las APIs incluidas en Expo Go. No representa todos los módulos nativos posibles.

Si agregas una dependencia que requiere código nativo propio o Expo Go no la incluye, necesitarás una **development build** de la aplicación. En ese caso revisa la documentación del paquete y la guía de Expo antes de instalarlo; no basta con volver a abrir Expo Go.

## 5. Estructura actual del proyecto

- `src/app/`: pantallas y rutas (`index.tsx` para Inicio y `explore.tsx` para Explorar).
- `src/components/`: componentes compartidos y navegación.
- `src/constants/`: tema y valores compartidos.
- `src/hooks/`: hooks reutilizables.
- `assets/`: imágenes e iconos.
- `docs/`: documentación del proyecto.

Para validar cambios puedes ejecutar `npm run typecheck` y `npm run lint`.

## Referencias

- [Configuración del entorno de React Native](https://reactnative.dev/docs/environment-setup)
- [Configurar el entorno con Expo](https://docs.expo.dev/get-started/set-up-your-environment/)
- [Expo SDK 57](https://docs.expo.dev/versions/v57.0.0/)
- [Expo Router](https://docs.expo.dev/versions/v57.0.0/sdk/router/)
- [Flexbox en React Native](https://reactnative.dev/docs/flexbox)
