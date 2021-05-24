# Cliente
## Ejecutar los siguientes comandos en la carpeta cliente

```bash
docker build -t cliente .
```
```bash
docker run -p 3000:3000 cliente
```
```bash
docker build -t cliente .
```
entra en http:localhost:3000

# Api
## Ejecutar los siguientes comandos en la carpeta api
```bash
docker build -t api .
```
```bash
docker exec -it mongodb bash
```

## Entramos en la maquina virtual de docker para crear la bd, collections y ejecutar los siguientes comandos
```bash
docker exec -it mongodb bash
```
```bash
mongo
```
```bash
use walmart
```
- copia y pega el codigo en discounts.json en la consola
- copia y pega el codigo en products.json en la consola
```bash
exit
```

```bash
docker-compose up
```