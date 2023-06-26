# Curriculum personal de almacenaje local

Este proyecto es un **simple generador del resumen profesional** de una persona (curriculum vitae), para ser **usado como página principal en Github.**
Su único objetivo es brindar un muy simple resumen de la vida profesional de una persona de manera legible y muy fácil de modificar.

* Su diseño es muy sencillo y está realizado con Bootstrap 5.
  * Es diseño adaptable
  * Modo claro y modo oscuro
* Las “bases de datos” están realizadas con archivos .json
  * Para crear, actualizar o eliminar información solo se requiere modificar los archivos ubicados en “db\_local”

## Permisos

* Se permite usar y modificar a cualquier persona para fines personales y no comerciales.
* Si los cambios **son significativos**, el editor podrá eliminar la mención del autor original.
  * De lo contrario, se solicita respetar la mención al autor original.

## ¿Cómo usarlo?

1. Crear un nuevo repositorio PÚBLICO en su cuenta de Github

* El nombre del repositorio debe ser necesariamente "\[@su\_usuario\].github.io"
* Cualquier otro nombre que ponga, Github no sabrá que debe publicarlo
* Si su usuario es "usuario\_ejemplo", el nombre del nuevo repositorio deberá ser "usuario\_ejemplo.github.io"

2. Descargar o clonar este repositorio a través de su consola:

* Para clonar el respositorio con su consola utilice:

``` bash
git clone https://github.com/pablofontaine/pablofontaine.github.io.git
```

3. Subir el repositorio descargado al repositorio creado en el punto 1.

* Si usted respetó los requisitos del punto 1, entonces en menos de 10 minutos Github debería haberlo puesto en línea y será visible en <https://usuario_ejemplo.github.io/>

4. Modifique los archivos ubicados en "db_local" para crear, modificar o eliminar información.

* Vea _*"¿Cómo modificar los datos?"*_, en este mismo documento para más orientación.

## ¿Cómo funciona?

El funcionamiento es realmente sencillo. Resuelve el problema. Básicamente, lo único que hace el código es inyectar información a una plantilla.

* El JS recoge la información de los archivos .json y los inyecta en el HTML. Nada más que eso. Esto es así porque no se pueden montar servidores de bases de datos en Github.

Entonces, para modificar la información basta con modificar los archivos contenidos en "db_local".
Existen 5 .json principales.

\- "main.json"
Aquí está la información principal de la persona. Contiene:

\- (fullname) El nombre completo
\- (main_title) El subtitulo principal
\- (links) Las url de los perfiles el usuario
\- (tags) Los tags principales de la persona
\- (my_description) Descripción personal

``` JS
{
    "fullname": "Su nombre",
    "main_title": "Su subtitulo principal",
    "links": {
        "url_linkedin": "https://www.linkedin.com/in/su_usuario/",
        "url_github": "https://github.com/su_usuario/"
    },
    "tags": ["ejemplo1", "ejemplo2", "ejemplo3", "ejemplo4"],
    "my_description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.."
}
```

### "jobs.json"

Información referida a la experiencia laboral

\- (title) Titulo del puesto
\- (subtitle) Organización o empresa
\- (keyboards) Palabras claves
\- (status) Estado
\- (start) Fecha de inicio
\- (finish) Fecha de fin
\- (certificate) Para certificados digitales
\- (link) Si existe algún referido
\- (location) Lugar donde se trabajó
\- (description) Descripción del puesto o actividades principales

``` js
{
    "title": "Nombre del puesto",
    "subtitle": "Empresa u organización",
    "keyboards": ["ejemplo1", "ejemplo2", "ejemplo3", "ejemplo4"],
    "status": null,
    "start": "Fecha de inicio",
    "finish": "Fecha de fin",
    "certificate": null,
    "link": null,
    "location": "Lugar geográfico de trabajo",
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.."
}
```

### "studies.json"

Información referida a la experiencia laboral

\- (degree) Titulo del estudio
\- (college) Organización, universidad, escuela, etc.
\- (keyboards) Palabras claves
\- (status) Estado
\- (start) Fecha de inicio
\- (finish) Fecha de fin
\- (certificate) Para certificados digitales
\- (link) Si existe algún referido
\- (description) Si se quisiera, es posible poner una descripción.

``` js
{
    "degree": "Titulo del estudio",
    "college": "Organización, universidad, escuela, etc.",
    "keyboards": ["ejemplo1", "ejemplo2", "ejemplo3", "ejemplo4"],
    "status": null,
    "start": "Fecha de inicio",
    "finish": "Fecha de fin",
    "certificate": null,
    "link": null,
    "description": "Si se quisiera, es posible poner una descripción."
}
```

### "technologies.json" & "tools.json"

Información adicional respecto a herramientas o tecnologías que maneje el usuario.

\- (title) Título de la herramienta o tecnología
\- (frequency_of_use) No disponible en esta versión
\- (title) Palabras claves

``` js
{
    "title": "Título de la herramienta o tecnología",
    "frequency_of_use": null,
    "ability": null
}
```
