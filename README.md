# react-starWars-grupo2-fsj22
Para realizar esta actividad, se utilizará Firebase para el inicio de sesión dentro de la aplicación. La aplicación consumirá la Star Wars API para obtener información sobre personajes, planetas y películas del universo de Star Wars. Se implementarán las siguientes vistas:

Inicio de sesión de usuarios con Firebase dentro de la aplicación.
Vistas de la aplicación:
Listado de personajes: Mostrará una lista de los personajes famosos del universo de Star Wars obtenidos de la Star Wars API.
Listado de planetas: Mostrará una lista de los planetas presentados en las películas de Star Wars, utilizando datos de la Star Wars API.
Listado de películas: Mostrará una lista de las películas de Star Wars, junto con sus detalles, obtenidos de la Star Wars API.
Guardar en favoritos: Después de iniciar sesión con Firebase, los usuarios pueden marcar los personajes, peliculas y planetas como favoritas. Se almacenarán localmente por LocalStorage o Context.

Para implementar estas funcionalidades, se utilizarán las capacidades de autenticación de Firebase para gestionar el inicio de sesión de los usuarios dentro de la aplicación. Luego, se realizarán solicitudes a la Star Wars API para obtener la información requerida y se mostrará en las diferentes vistas de la aplicación. StarWars API: https://swapi.dev/documentation
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
