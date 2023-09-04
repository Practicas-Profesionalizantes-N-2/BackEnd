import express from 'express';
import cors from 'cors';
import LoginRoutes from './routes/login.routes.js';



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
        this.app.use('/api', LoginRoutes)

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