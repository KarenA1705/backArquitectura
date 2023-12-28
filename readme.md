# Primer Parcial 2023 Arquitectura Orientada a Servicios
## Descripción
Servicio de API REST del primer parcial de la asignatura Arquitectura orientada a servicios (SOA), desarrollado con Node.js , Express y Postgresql.
Esta API permite obtener y almacenar información de productos varios, siempre y cuando el usuario este autenticado, registrando en una base de datos de posgrest. 
La API cuenta con las siguientes funciones:

* Autorización median Basic Auth
* Validación de parametros de entrada
* Manejador de errores

## Tabla de contenido
* Variables de Entorno
* Estructura del Proyecto
* API Endpoints
* Característica
* Node js
* NPM

## Variables de Entorno

* PORT=4200
* DB_URL_PG=postgres://postgres:123@127.0.0.1:5432/product
* SECRET_KEY=FRC14MFAU02

## Estructura del Proyecto
src\
 |--config\         # Variables de entorno y configuración 
 |--controllers\    # Controladores 
 |--middlewares\    # Middleware Personalizados
 |--models\         # Postgrest models (data layer) 
 |--routes\         # Rutas del sistema
 |--services\       # Servicios de conexión BD y Token 
 |--validator\      # Esquemas de validación
 |--index.js        # Express app

## API Endpoints
* GET /auth
* query:
username: requerido
password: requerido
GET /api/producto
* Request
query
Response
msg : string
data : array
* POST /api/producto
Request
body:
id : requerido
nombre : requerido
talla : requerido
precio
* Response
success : boolean
data : json
msg : string
* PUT /api/producto/:id
Request
body
nombre
talla
precio
* Response
success : boolean
data : json
msg : string
DELETE /api/producto/:id
* Request
params:
id : requerido
Response
data : array
msg : string
success : boolean
