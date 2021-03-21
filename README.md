# Antes de empezar:
- Para reportar tu trabajo debes crear un repositorio GIT público.

- Crea tantos commits como consideres necesario. Parte de nuestra evaluación se basa en como afrontas los problemas y la única forma que tenemos de verlo es mediante commits. Esta parte puede ser más decisiva que la calidad de la entrega.
- En el comentario del commit especifica los cambios que has realizado, así como explicaciones o aportaciones que consideres importante comentar. Valoraremos especialmente que los commits estén bien documentados
- En caso de que surjan dudas intenta buscar alternativas y justifícalas en el mensaje de commit.

# Tasks.

1.  RE-Estructura el proyecto como mejor consideres. 
    1.  Como mínimo se debe crear un modulo a parte para la autenticación y registro.
    2.  Implementa Interficies  o clases  para los tipos de datos que consideres.
2. Implementa un sistema de login/registro que persista los datos correctamente.
   1. Puedes utilizar:
      1. LocalStorage, 
      2. Alguna api externa
      3. Implementar servicio propio con Nodejs.
3. Implementa el patron de diseño redux para la gestion del listado de naves.
   1. No es necesario implementar redux para todo el aplicativo, solo para la gestión de naves.
4.  Implementa la carga de multiples "páginas" en el apartado de ships.
    1.   Actualmente solo carga una página de la api.
    2.   Revisar la API para saber como consumir el resto de páginas. https://swapi.dev/
5.  Implementa test unitarios para el modulo de login/registro.
6.  Añade imágenes a las CARDS de naves: Puedes usar esta api  'https://starwars-visualguide.com/assets/img/starships/' + ID_DE NAVE -->  https://starwars-visualguide.com/assets/img/starships/5.jpg
7.  Suponiendo que esta página tiene un numero elevado de usuarios simultáneos, implementa las mejoras que consideres oportunas para evitar la saturación del servidor.
    1.  Si alguna de las medidas no es de código, comentalas a continuación en este Readme.


# Getting Started 

`npm i`  for install
Run `npm run start` for a dev server. 
Navigate to `http://localhost:4200/`.


# Notas del desarrollador:

 Para la tarea número 7: 

    1.- Se ha añadido un lazy loading a las imágenes. Esto permite que no se carguen todas las imágenes al cargar
    la página, sino que las carga según el usuario vaya moviendo la vista. El servidor se satura menos porque se
    hacen menos peticiones de golpe y la página carga antes.

    2.- Se ha simulado el guardado de los datos en cache para no hacer repetición de peticiones. Esto se ha hecho
    con localStorage, pero lo óptimo sería instalar plugins mejor pensados para esta tarea.

    Otras posibles mejoras no dependientes de código incluirían:

    3.- Aumentar el número de servidores para tener una mayor potencia.

    4.- Actualizar la caché con menos frecuencia (depende de los usuarios).

Además de realizar las tareas previstas, se han añadido algunas funcionalidades ideadas por mí para mejorar la
experiencia de usuario. Estas medidas incluyen:

    - Botón funcional de logout que permite salir de la cuenta de usuario. Este botón se encuentra dentro de un
    desplegable en la parte derecha de la barra de navegación. Dentro de este desplegable se incluyen también 
    los botones "Account settings" y "My ships", que en un proyecto real podrían servir para cambiar la 
    configuración de la cuenta o para almacenar los items favoritos del usuario. Intencionalmente, estas 
    funcionalidades no han sido implementadas al clickar en dichos botones, sólo ejemplifican mi concepto sobre
    cómo mejorar la página.

    - Sistema de alerta que muestra mensajes en forma de modal para informar al usuario durante el registro y 
    el loggin de la cuenta. Estos mensajes incluyen la alerta de "usuario o contraseña no válidos" durante el 
    loggin, informan del error de "usuario ya registrado" y del correcto registro del usuario en el sistema.