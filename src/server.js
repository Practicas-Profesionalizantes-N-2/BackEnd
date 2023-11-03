import express from 'express';
import cors from 'cors';
import LoginRoutes from './routes/login.routes.js';
import UserRoutes from './routes/user.routes.js';

//este es el archivo principal para configurar todo nuestro entorno

class Server{



    constructor(){
        this.app = express();

        this.middlewares();

        this.listen();
        this.routes();
    }


    middlewares(){
        this.app.use(express.json());
        this.app.use(cors());
    }


    routes(){
        this.app.use('/api/auth', LoginRoutes);
        this.app.use('/api/users', UserRoutes );

    }


    connectionDb(){


    }

    listen(){ 
        this.app.listen(3000, () => {
            console.log('servidor corriendo en puerto', 3000)
        })

    }




}

export default Server;