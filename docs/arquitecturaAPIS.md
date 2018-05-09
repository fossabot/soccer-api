# Manual tecnico - Integración REST API

> Este documento tendrá como propósito explicar y dar ejemplos para poder consumir las apis de manera correcta, esta se conectará a mongo para extraer los datos y manipularlos desde el backend.

## **Estructura general**

> Cada api tendrá por defecto las siguientes rutas de consumo con sus métodos respectivos, en caso que un api determinada no tenga la estructura general o esta sea modificada se marcará con un 🚩

| Metodo | Url                            | Descripción                                             |
|:------ |:------------------------------ |:------------------------------------------------------- |
| GET    | /```nombre_api```              | Obtiene todos los registros del api correspondiente     |
| GET    | /```nombre_api```/```:id```    | Obtiene el registro según el id                         |
| POST   | /```nombre_api```              | Registra un nuevo elemento en la base de datos          |
| PUT    | /```nombre_api```/```:id```    | Actualiza un único registro                             |
| DELETE | /```nombre_api```/```:id```    | Elimina el registro correspondiente                     |
| POST   | /```nombre_api```/```search``` | Busca los registros correspondientes a la trama enviada |

⚠️ NOTA: Para los métodos, ```DELETE``` y  ```GET``` no debe haber trama (cuerpo del paquete)

⚠️ NOTA 2: El método ```PUT``` tendrá parámetros(id_entidad) en la url como trama











## **APIS**

> A continuación se listará cada una de las apis con trama(request) y sus respectivos campos obligatorios para cada método, el método GET no se tomará ya que no posee una trama
> 
> ✔️ = Atributo obligatorio en el método correspondiente.
> 
> 🏴 = Atributo opcional.
> 
> ❌ = Se omite este campo.

## **Jugador**

**Ruta consumo:** ``http://localhost:8008/jugador``

**Ejemplo trama:**

```json
{
   "nombre": "Juan Sebastián",
   "apellido": "González Rivera",
   "correo": "juanmarfil9696@gmail.com",
   "contrasena": "123",
   "lider": false,
   "estado": "A",
   "descripcion": "Soy un jugador capaz..."
}
```

**Obligatoriedad:**

| Atributo          | POST | PUT |
|:----------------- |:---- |:--- |
| ```nombre```      | ✔️   | 🏴  |
| ```apellido```    | ✔️   | 🏴  |
| ```correo```      | ✔️   | 🏴  |
| ```contrasena```  | ✔️   | 🏴  |
| ```lider```       | 🏴️  | 🏴  |
| ```estado```      | 🏴️  | 🏴  |
| ```descripcion``` | 🏴   | 🏴  |

## **Equipo**

**Ruta consumo**: ``http://localhost:8008/equipo``

**Ejemplo trama:**

```json
{
   "nombre": "Las aguilas",
   "descripcion": "Descripción...",
   "foto": "Base64/path",
   "categoria": "A|B|C",
   "estado": "A",
   "integrantes": [
      "idJugador1",
      "idJugador2",
      "idJugador3"
   ]
}
```

**Obligatoriedad:**

| Atributo          | POST | PUT |
|:----------------- |:---- |:--- |
| ```nombre```      | ✔️   | 🏴  |
| ```descrpcion```  | ✔️   | 🏴  |
| ```foto```        | ✔️   | 🏴  |
| ```categoria```   | ✔️   | 🏴  |
| ```estado```      | 🏴️  | 🏴  |
| ```integrantes``` | 🏴️  | 🏴  |













## **Partido**

**Ruta consumo:** ``http://localhost:8008/partido``

**Ejemplo trama:**

```json
  {
    "marcador": "1-1",
    "lugar": "Galerías cancha Sintetica",
    "estado": "A",
    "fecha": "2018/05/24 14:00:00",
    "equipos": [
      "idEquipo1",
      "idEquipo2"
    ],
    "resenas": [
      "idResena1",
      "idResena2",
      "idResena3"
    ]
  }
```

| Atributo       | POST | PUT |
|:-------------- |:---- |:--- |
| ```marcador``` | ✔️   | 🏴  |
| ```lugar```    | ✔️   | 🏴  |
| ```estado```   | ✔️   | 🏴  |
| ```fecha```    | ✔️   | 🏴  |
| ```equipos```  | 🏴️  | 🏴  |
| ```resenas```  | 🏴️  | 🏴  |











## **Reseña**

**Ruta consumo**: ``http://localhost:8008/resena``

**Ejemplo trama:**

```json
{
   "puntaje": "5",
   "descripcion": "El partido estuvo reñido pero...",
      "jugador": "idJugador1",
      "estado": "A"
}
```

| Atributo          | POST | PUT |
|:----------------- |:---- |:--- |
| ```puntaje```     | ✔️   | 🏴  |
| ```descripcion``` | ✔️   | 🏴  |
| ```jugador```     | ✔️   | 🏴  |
| ```estado```      | ✔️   | 🏴  |



























## **Common API**

> Las rutas a continuación no corresponden a la estructura general de las apis, ya que tienen diferente funcionalidad del crud, estarán catalogadas por método de consumo.

## **GET**

| Url                                                             | Descripción                                                                  |
|:--------------------------------------------------------------- |:---------------------------------------------------------------------------- |
| ```http://localhost:8008/jugador/sendMailConfirm/{idUsuario}``` | Envía el correo de confirmación al usuario según el id establecido en la url |
| ```http://localhost:8008/jugador/confirmEmail/{idUsuario}```    | Confirma la cuenta si el idUsuario cuenta con una confirmación pendiente     |

## **POST**

| Url                                         | Descripción                                                  | Petición                                                                                                |
|:------------------------------------------- |:------------------------------------------------------------ |:------------------------------------------------------------------------------------------------------- |
| ```http://localhost:8008/basics/sendMail``` | Envía un correo de acuerdo al cuerpo de la petición          | ![RequesMail](https://raw.githubusercontent.com/jugonzalez40/soccer-api/master/docs/postRequesMail.JPG) |
| ```http://localhost:8008/basics/sendSms```  | Envía un mensaje por sms de acuerdo al cuerpo de la petición | ![RequesSMs](https://raw.githubusercontent.com/jugonzalez40/soccer-api/master/docs/postRequestSMS.JPG)  |

> ##### Para visualizar este documento adecuadamente consultar la siguiente [url](https://github.com/jugonzalez40/soccer-api/blob/master/docs/arquitecturaAPIS.md): https://github.com/jugonzalez40/soccer-api/blob/master/docs/arquitecturaAPIS.md

##### Soccer League | Institución Educativa Politécnico Grancolombiano | Ingeniería de software | 2018
