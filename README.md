# Proyecto-De-Login
 Simulación de Login con HTML y JavaScript
## Portada
* **Nombre del Instituto:** Instituto Tecnológico de Oaxaca
* **Materia:** Programación Web
* **Tema:** Actividad 5. Proyecto de Login
* **Integrantes del Equipo:**
  * Alonso Heredia Miguel Alberto
  * Rodriguez Juarez Jose Daniel
* **Grupo:** 7SE




---


## Explicación


### 1. Framework CSS
* El proyecto está construido de manera personalizada utilizando CSS3 nativo, priorizando fuentes estilizadas como `'Montserrat', sans-serif.
* La estructura no depende de frameworks como Bootstrap, esto lo hace que tenga velocidad de carga buena.


### 2. Flujo
1. El usuario accede al login.html, donde se encuentra con los campos de correo y contraseña protegidos.
2. Al escribir, los oninput activan a las funciones de JavaScript de validación en tiempo real.
3. Al accionar el botón de envío submit, se ejecuta una simulación donde se almacena localmente la información requerida y se redirige a index.html.


### 3. Nombre del usuario
* Para pasar el nombre del usuario que entro a su cuenta en tiempo real sin una base de datos, se utiliza el API de persistencia en el navegador localStorage.
* **En el Login:** Al dar acceso válido, se ejecuta:  
  `localStorage.setItem('usuarioLogueado', document.getElementById('username').value);`
* **En el Navbar en el index.html:** Cuando se carga el DOM, el script busca el contenedor de texto del menú superior y actualiza el campo:  
  `const usuario = localStorage.getItem('usuarioLogueado') || 'Miguel Alberto';`  
  `document.getElementById('user-name').innerText = usuario;`


### 4. Métodos y Funciones
* **`validarcontrasena()`**: Revisa que la contraseña con la que se inicia sesión no esté vacía.
* **`validarlongitudControl()`**: Valida que no posea letras y restringe el acceso si contiene menos de 6 dígitos en adelante.
* **`validarEdad()`**: Convierte la entrada a un entero, valida que no sea menor a 1 y luego imprime si el alumno pertenece al grupo de Mayor de edad o menor.
* **`validarsololetras()`**: Evalúa mediante la expresión regular `/^[a-zA-ZÁÉÍÓÚÑáéíóúñ ]+$/` que el nombre ingresado conste exclusivamente de caracteres alfabéticos y espacios.
* **`validarContrasenaEstricta()`**: Valida en el formulario de captura que la clave tenga las siguiente estructura: longitud mínima de 8 caracteres, al menos una mayúscula, una minúscula, un número y un símbolo especial.


---


## Proceso de Creación Paso a Paso


### Paso 1: Interfaz y Lógica del Login
Se estructuró el formulario de login y se agregaron las validaciones de `validar contrasena` y `validar correo`en el JS de login.js adaptando nuestras validaciones de el trabajo de Utileria.


### Paso 2: El Sidebar Modular
Diseñado con posición fija `position: fixed`, un ancho compacto inicial de `80px` y animaciones fluidas con `transition: all .5s`. El submenú de usuarios se despliega de manera vertical y se utiliza checkboxes ocultos `.toggle-submenu` para que se muestren.


### Paso 3: El Navbar Superior y Cierre de Sesión
Se añadió la barra superior blanca con sombra para que se vea la profundidad. El botón de hamburguesa (`#bar`) se incrementó su `z-index: 1000` para que se viera sobre el sidebar. Se programó el cierre del menú de usuario al hacer clic fuera de él con `event.stopPropagation()`.


### Paso 4: El Modal de Alumnos y Reglas Dinámicas
Se crearon las interfaces modales flotantes cubiertas con fondos oscuros controladas por la clase de ocultación. Se adaptaron los métodos de las utilidades `validarlongitudControl` y `validarEdad` agregados en el archivo `funcionesModal.js` para verificar al Número de Control y a la Edad.


---


## Capturas de Pantalla

1. **Pantalla de Inicio de Sesión:** img/captura-sesion1.png img/captura-sesion2.png
2. **Dashboard Principal:** img/cap-dashboard.png
3. **Despliegue del Menú de Usuario:** img/Menu-user.png
4. **Modal Captura de Usuarios:** img/moda-cap.png
