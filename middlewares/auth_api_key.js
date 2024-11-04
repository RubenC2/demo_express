//http://localhost:3000/api/books?API_KEY=123abc

const checkApiKey = function (req, res, next) {
    // Comprobar si existe API KEY en BBDD pasada por cliente
    // Llamada al modelo de users de la bbdd
    //Select from * users where api_key = req.query.Api_key
    if (req.query.API_KEY === "123abc") {
        next(); // Pasa a la siguiente tarea
    } else {
        //Mando mensaje de error
        res.status(401).send("Error. API KEY no proveída");
    }
}

module.exports = checkApiKey;