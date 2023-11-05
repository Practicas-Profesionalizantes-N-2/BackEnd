import express from 'express';
import cors from 'cors';
import LoginRoutes from './routes/login.routes.js';
import UserRoutes from './routes/user.routes.js';
import sequelize from './db/config.js';

//este es el archivo principal para configurar todo nuestro entorno
//de esta manera podemos configurar nuestro servidor para que sea robusto y mantenible en el tiempo.

class Server{



    constructor(){
        
        this.app = express();

        this.middlewares();

        this.listen();

        this.routes();

        this.connectionDb()
    }

    
    //funcion para utilizar middlewares
    middlewares(){
        this.app.use(express.json());
        this.app.use(cors());
    }


    //configuramos con prefijos las rutas por donde va a ingresar el usuario
    //colocamos como un sufijo la palabra api, para que sea mas legible a donde e dirige el usuario
    routes(){
        this.app.use('/api/auth', LoginRoutes);
        this.app.use('/api/users', UserRoutes );

    }


    //configuramos la conexion a la base de datos a travez de su metodo authenticate
    //lanza un error en caso de que no se concrete la conexion
    connectionDb(){

        console.log("me estoy ejecutando")
        sequelize.authenticate()
        .then(()=>{
            console.log('Conexion exitosa a la BD')
        })
        .catch((error)=>{
            console.log('error al conectar con la BD', error)
        })


    }

    //aca hacemos escucha del servidor y el puerto en donde se va a alojar nuestro servidor
    //esto siempre va a estar escuchando los cambios que vamos realizando en el servidor.
    listen(){ 
        this.app.listen(3000, () => {
            console.log('servidor corriendo en puerto', 3000)
        })

    }

}

export default Server;