# Movies API

API REST minimalista construida con Node.js, Express, Mongoose y MongoDB. El proyecto contiene diez errores deliberados para practicar su deteccion y correccion.

## Requisitos

- Node.js 18 o superior
- MongoDB accesible localmente o mediante una URI remota

## Instalacion

```bash
npm install
copy .env.ejemplo .env
```

Configura `MONGODB_URI` y `PORT` en `.env`.

## Comandos

```bash
npm run dev
npm start
npm run seed
```

El seed crea tres generos y tres peliculas. Sus referencias de genero son deliberadamente incorrectas para formar parte del ejercicio.

## Endpoints

### Generos

- `GET /api/genres`: devuelve todos los generos.
- `GET /api/genres/:id`: devuelve un genero por ID.
- `POST /api/genres`: crea un genero. Body: `{ "name": "Comedia" }`.
- `DELETE /api/genres/:id`: elimina un genero.

### Peliculas

- `GET /api/movies`: lista peliculas y debe mostrar el genero poblado.
- `GET /api/movies/:id`: obtiene una pelicula con su genero.
- `POST /api/movies`: crea una pelicula. Body: `{ "title": "Superbad", "genre": "64b0f..." }`.
- `PUT /api/movies/:id`: cambia el titulo. Body: `{ "title": "Superbad (Unrated)" }`.
- `DELETE /api/movies/:id`: elimina una pelicula.

La consulta `GET /api/movies?title=Alien` esta pensada para filtrar por titulo y `GET /api/movies?genre=<id>` para filtrar por genero.

## Documentacion protegida

La tabla con la solucion de los diez errores esta cifrada en `SOLUCION_ERRORES.md.enc`. Para recuperarla, usa OpenSSL y la contrasena entregada fuera del repositorio:

```bash
openssl enc -d -aes-256-cbc -pbkdf2 -in SOLUCION_ERRORES.md.enc -out SOLUCION_ERRORES.md
```

El archivo `SOLUCION_ERRORES.md` esta ignorado por Git.