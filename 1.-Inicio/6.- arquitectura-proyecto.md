### Arquitectura del Proyecto

- **Interfaz de Usuario (UI):**
   - Componente encargado de interactuar con el usuario.
   - Recoge las longitudes de los lados del triángulo.

- **Lógica de Negocio (Business Logic):**
   - Contiene la lógica para identificar el tipo de triángulo (equilátero, isósceles, escaleno) basándose en las longitudes de los lados.
   - Realiza los cálculos asociados, como el perímetro y el área.

- **Manejo de Errores y Excepciones:**
   - Componente encargado de manejar errores y excepciones de manera adecuada.
   - Garantiza una experiencia de usuario robusta y libre de problemas.

- **Pruebas Unitarias:**
   - Conjunto de pruebas para cada componente a nivel de unidad.
   - Asegura la calidad y el correcto funcionamiento de cada parte del sistema.

- **Documentación:**
   - Documentación detallada del código y la funcionalidad.
   - Facilita el entendimiento y el mantenimiento del código.

### Flujo de Ejecución

1. El usuario ingresa las longitudes de los lados del triángulo a través de la interfaz de usuario.

2. El controlador valida la entrada del usuario y coordina la llamada a la lógica de negocio.

3. La lógica de negocio identifica el tipo de triángulo y realiza los cálculos asociados.

4. Los resultados se devuelven al controlador, que los presenta en la interfaz de usuario.

### Tecnologías Sugeridas

- **Lenguaje de Programación:**
  - JavaScript.
  - HTML
  - CSS

- **Interfaz de Usuario (UI):**
  - HTML, CSS, JavaScript 

