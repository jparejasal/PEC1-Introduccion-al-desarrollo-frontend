1. La aparición de HTML5/CSS3/JS ha supuesto el nacimiento del desarrollo front-end moderno.
1.1 ¿Cuál es la ventaja del uso de etiquetas semánticas? Nombra y explica al menos 3 de estas ventajas.
* Estructuración de contenido: se describe la distribución y el significado del contenido, además, permiten más claridad en los sitios web tanto para desarrolladores como usuarios finales que procesan información.
* Accesibilidad: a partir de una adecuada estructuración, permite al lector (correinte y discapacitado) identificar y comprender la información desplegada en el sitio web, de forma jerarquizada y organizada.
* Posicionamiento: la correcta estructuración semántica (a partir del uso de etiquetas) de un sitio web, incrementa la probalididad de que nuestro sitio web sea encontrado fácil y masivamente por medio de un motor de búsqueda avanzado.

1.2 Cita al menos 3 APIs HTML5 y explica brevemente su funcionalidad.
* Gelocation: se utiliza para localizar la posición de un usuario, un ejemplo común de su uso es el uso de la ubicación en google maps.
* Canvas: se utiliza para dibujar gráficos en el sitio web.
* Web Storage: las aplicaciones web pueden almacenar datos localmente dentro del navegador del usuario.

1.3 Cita qué opción ofrece CSS3 para conseguir que se apliquen diferentes estilos CSS sobre el mismo elemento en su visualización en diferentes dispositivos.
CSS3 ofrece el uso de Media Queries, que son un conjunto de reglas de CSS que permiten crear un bloque de código que sólo se procesará en los dispositivos que cumplan los criterios especificados como condición; las reglas en mención permiten crear sitios web responsive, es decir, adaptables a cualquier dimensión de pantalla de dispositivo.

1.4 Cita al menos 4 de las características principales de TypeScript.
* Es un leguaje construído sobre JavaScript, con sintaxis agregada para tipos de datos.
* A diferencia de Javascript, permite especificar los tipos de datos que se pasan dentro del código, incluso reporta errores cuando los tipos de datos no concuerdan.
* Utiliza la verificación de tipos en tiempo de compilación, lo que significa que comprueba si los tipos especificados coinciden antes de ejecutar el código, no mientras lo ejecuta.
* Se emplea en proyectos de gran complejidad, los cuales mediante el uso de un compilador de TypeScript se traducen a código JavaScript original.


2. El lenguaje CSS es muy rígido, poco práctico y ordenado a la hora de programar. Para evitar este problema se han creado los preprocesadores CSS, que ofrecen evidentes ventajas:
2.1 Cita al menos 2 de estos preprocesadores.
Dos preprocesadores CSS conocidos son: SASS y LESS

2.2 Cita al menos 4 ventajas que ofrecen estos preprocesadores.
* Facilitan el mantenimiento del código, guardando los estilos en un solo archivo.
* Permiten la reutilización de código, reduciendo la repetición del mismo.
* Permiten la escritura ágil y sencilla del código, aumentando así la rapidez y produtividad.
* Facilitan el trabajo con los sitios web de forma responsive.

2.3 Explica brevemente en qué consisten los sourcemaps.
Sourcemaps: son una especie de mapa que vincula el código fuente original al código generado, son archivos que actúan como un puente entre el código fuente original y el código generado, de modo que le permiten a los desarrolladores depurar y entender mejor sus aplicaciones en un entorno de producción.

2.4 Explica qué es un transpilador.
Transpilador: es un tipo especial de compilador que traduce de un lenguaje fuente a otro fuente también de un nivel de abstracción parecido. Se utiliza en las siguientes situaciones:
* La necesidad portar un código existente a otro lenguaje más moderno.
* Si se requiere migrar de una versión antigua del lenguaje o librerías a otra más moderna.
* Cuando se utiliza un compilador de modelos (UML) se genera un código de alto nivel que puede ser transpilado a código en lenguajes tradicionales.


3. El flujo de trabajo profesional en front-end hace indispensable el uso de herramientas como controles de versiones y herramientas de gestión de módulos
3.1 Cita al menos dos sistemas de control de versiones y dos herramientas de gestión de módulos.
* Sistemas de control de versiones: CVS, Subversion, SourceSafe, ClearCase, Darcs, Bazaar , Plastic SCM, Git, Mercurial, Perforce.
* Herramientas de gestión de módulos: Webpack, Parcel y Rollup.

3.2 Cita y explica al menos 3 comandos de Git.
* git add: se utiliza para incluir cambios en uno o varios archivos en un eventual commit.
* git commit: se utiliza para guardar y explicar cambios en un punto específico de un desarrollo.
* git push: se utiliza para enviar los cambios del commit al servidor remoto.
* git clone: se utiliza para clonar un repositorio presente en github o bitbucket.

3.3 Cita y explica brevemente las características más definitorias de WebPack.
* Es un paquete de módulos de JavaScript de código abierto.
* Está hecho principalmente para JavaScript,​ pero puede transformar activos de front-end como HTML, CSS e imágenes si se incluyen los loaders correspondientes.
* Toma módulos con dependencias y genera archivos estáticos que representan esos módulos.
* Se puede utilizar desde la línea de comandos, o se puede configurar utilizando un archivo de configuración que se llama webpack.config.js (archivo usado para  definir reglas, plugins, etc., para un proyecto)
* Es altamente extensible a través de reglas que permiten a los desarrolladores escribir tareas personalizadas que quieren realizar cuando se agrupan los archivos.
