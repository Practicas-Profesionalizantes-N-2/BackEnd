const express = require('express'); //Importacion del modulo express

const app = express(); //Definir que app utilizar la funcion de express

//MIDLEWARES

app.get("/", (req, res) => {
    res.send("hello world");
});

//Definir el puerto del servidor
app.listen(3000, ()=>{
    console.log("Server corriendo en puerto", 3000);
});