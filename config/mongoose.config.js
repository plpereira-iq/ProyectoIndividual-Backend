
        const mongoose = require('mongoose')
        require('dotenv').config();
        mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster1.3lsojym.mongodb.net/${process.env.DB_NAME}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then((res) => {
            console.log("Conectado a la base de datos: " + process.env.DB_NAME);
        })
        .catch((err) => {
            console.error("Error al conectar a la base de datos:", err);
        });
        