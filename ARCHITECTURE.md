# Arquitectura

La API sigue una estructura MVC sencilla:

- `src/config/database.js`: conexion unica a MongoDB mediante Mongoose.
- `src/models`: esquemas `Genre` y `Movie`; una pelicula referencia un genero mediante `ObjectId`.
- `src/controllers`: operaciones CRUD y validaciones de existencia.
- `src/routes`: expone `/api/genres` y `/api/movies`.
- `src/middleware/errorHandler.js`: ultimo middleware para excepciones.
- `src/seeds/seed.js`: limpia y carga datos de practica.
- `src/app.js`: configura Express y registra las rutas.
- `src/server.js`: carga variables de entorno, conecta la base de datos y arranca HTTP.

## Flujo de arranque

1. `server.js` carga `.env`.
2. Se establece la conexion con `MONGODB_URI`.
3. Express comienza a escuchar en `PORT` o en el puerto `3000`.

## Desencriptar la solucion

```bash
openssl enc -d -aes-256-cbc -pbkdf2 -in SOLUCION_ERRORES.md.enc -out SOLUCION_ERRORES.md
```

La solucion en texto plano no debe versionarse porque esta incluida en `.gitignore`.