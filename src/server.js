import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import LoginRoutes from './routes/login.routes.js';
import sequelize from './db/config.js';


class Server{



    constructor(){
        this.app = express();

        this.middlewares();
        this.connectionDb();
        this.listen();
        this.routes();
    }


    middlewares(){
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(morgan());
    }


    routes(){
        this.app.use('/api', LoginRoutes)
        

    }


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

    listen(){ 
        this.app.listen(3000, () => {
            console.log('servidor corriendo en puerto', 3000)
        })

    }




}

export default Server;