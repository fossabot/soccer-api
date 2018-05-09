# Estructura de APIS

Este documento describirá cada una de las rutas, sus posibles entradas, el esquema de cada petición si tiene y sus posibles respuestas

## Estructura general

Cada api tendrá por defecto las siguientes rutas de consumo con sus metodos respectivos, en caso que un api determinada no tenga la estructura general o esta sea modificada se marcará con un 🚩

| Metodo | Url                            | Descripción                                             |
|:------ |:------------------------------ |:------------------------------------------------------- |
| GET    | /```nombre_api```              | Obtiene todos los registros del api correspondiente     |
| GET    | /```nombre_api```/```:id```    | Obtiene el registro según el id                         |
| POST   | /```nombre_api```              | Registra un nuevo elemento en la base de datos          |
| PUT    | /```nombre_api```/```:id```    | Actualiza un unico registro                             |
| DELETE | /```nombre_api```/```:id```    | Elimina el registro correspondiente                     |
| POST   | /```nombre_api```/```search``` | Busca los registros correspondientes a la trama enviada |

⚠️ NOTA: Para los metodos, ```DELETE``` y  ```GET``` no debe haber trama (cuerpo del paquete)

⚠️ NOTA 2: El metodo ```PUT``` tendrá parametros(id_entidad) en la url como trama

## APIS

A continuación se listará cada una de las apis con trama(request) y sus respectivos campos obligatorios para cada metodo, el metodo GET no se tomará ya que no posee una trama(request)

```
✔️ = Atributo obligatorio en el metodo correspondiente.

🏴 = Atributo opcional.

❌ = Se omite este campo.
```

### Jugador

- ```nombre_api``` = jugador```
- ```url``` = .../jugador
- Trama (request)

  ```json
  {
    "nombre": "Juan Sebastiàn",
    "apellido": "González Rivera",
    "correo": "juanmarfil9696@gmail.com",
    "contrasena": "123",
    "lider": false,
    "estado": "A",
    "descripcion": "Soy un jugador capaz..."
  }
  ```

| Atributo          | POST | PUT |
|:----------------- |:---- |:--- |
| ```nombre```      | ✔️   | 🏴  |
| ```apellido```    | ✔️   | 🏴  |
| ```correo```      | ✔️   | 🏴  |
| ```contrasena```  | ✔️   | 🏴  |
| ```lider```       | 🏴️  | 🏴  |
| ```estado```      | 🏴️  | 🏴  |
| ```descripcion``` | 🏴   | 🏴  |

### Equipo

- ```nombre_api``` = equipo
- ```url``` = .../equipo
- Trama (request)

  ```json
  {
    "nombre": "Juan Sebastiàn",
    "apellido": "González Rivera",
    "correo": "juanmarfil9696@gmail.com",
    "contrasena": "123",
    "lider": false,
    "estado": "A",
    "descripcion": "Soy un jugador capaz..."
  }
  ```

| Atributo          | POST | PUT |
|:----------------- |:---- |:--- |
| ```nombre```      | ✔️   | 🏴  |
| ```apellido```    | ✔️   | 🏴  |
| ```correo```      | ✔️   | 🏴  |
| ```contrasena```  | ✔️   | 🏴  |
| ```lider```       | 🏴️  | 🏴  |
| ```estado```      | 🏴️  | 🏴  |
| ```descripcion``` | 🏴   | 🏴  |

### Partido

- ```nombre_api``` = partido
- ```url``` = .../partido
- Trama (request)

  ```json
  {
    "nombre": "Juan Sebastiàn",
    "apellido": "González Rivera",
    "correo": "juanmarfil9696@gmail.com",
    "contrasena": "123",
    "lider": false,
    "estado": "A",
    "descripcion": "Soy un jugador capaz..."
  }
  ```

| Atributo          | POST | PUT |
|:----------------- |:---- |:--- |
| ```nombre```      | ✔️   | 🏴  |
| ```apellido```    | ✔️   | 🏴  |
| ```correo```      | ✔️   | 🏴  |
| ```contrasena```  | ✔️   | 🏴  |
| ```lider```       | 🏴️  | 🏴  |
| ```estado```      | 🏴️  | 🏴  |
| ```descripcion``` | 🏴   | 🏴  |

### Reseña

- ```nombre_api``` = resena
- ```url``` = .../resena
- Trama (request)

  ```json
  {
    "nombre": "Juan Sebastiàn",
    "apellido": "González Rivera",
    "correo": "juanmarfil9696@gmail.com",
    "contrasena": "123",
    "lider": false,
    "estado": "A",
    "descripcion": "Soy un jugador capaz..."
  }
  ```

| Atributo          | POST | PUT |
|:----------------- |:---- |:--- |
| ```nombre```      | ✔️   | 🏴  |
| ```apellido```    | ✔️   | 🏴  |
| ```correo```      | ✔️   | 🏴  |
| ```contrasena```  | ✔️   | 🏴  |
| ```lider```       | 🏴️  | 🏴  |
| ```estado```      | 🏴️  | 🏴  |
| ```descripcion``` | 🏴   | 🏴  |
