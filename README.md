# Simple manejador de post 

### Ejemplo online

[Click aquí](https://611353614d4c2e6018136cb0--affectionate-benz-ec37eb.netlify.app/) si desea ver el proyecto ya corriendo (Tarda un momento cargar en un principio).
* **Back-End**: Heroku
* **Database**: Postgres (Heroku Plugin)
* **Front-End**: Netlify

Si desea correrlo localmente en su equipo, siga las instrucciones a continuacion:

## 1) Instalación:

- Instalar yarn

```
npm install --global yarn
```
- Clonar el repositorio.

- Dentro de ambas carpetas **/api** y en **/app** ejecutar el siguiente comando para instalar las dependencias necesarias para cada proyecto.

```
yarn install
```

En caso de estar en windows, instalar el siguiente paquete:

```
yarn add cross-env
```
## 2) Configuración Docker para PostgreSQL:

- Dentro de la carpeta docker, ejecutar los siguientes comandos para crear la imagen a través de **docker-compose** . 

```sh
docker-compose up
```

Se creará un contenedor con el servicio declarado en el archivo **docker-compose**, database.

## 3) Arrancar proyecto:

Ambos proyectos tienen sus archivos de variables de entorno .env ya configurados por defecto con **localhost**, es decir, se tomara la ip asignada por su router.

### 3.1) Arrancar Back-End

Ingrese a la carpeta **/api** y ejecute el siguiente comando.
```
yarn start:dev
```
En caso de estar en windows
```
yarn start:dev:win
```

### 3.2) Arrancar Front-End
Ingrese a la carpeta **/app** desde la raiz y ejecute el siguiente comando.
```
yarn start
```

## 4) Utilización:
- A través de ***localhost:3000*** en el navegador se podra acceder a la aplicación.

---
## Autor

[IGNACIO PATRICIO FUENZALIDA VEAS](https://github.com/NaChOoV) - <fuenzalida.veas6@gmail.com> 