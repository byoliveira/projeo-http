const express = require("express");
const { v4 } = require("uuid");

const app = express();

app.use(express.json());

const usuarios = [];

app.post("/users", (request, response) => {
    const {nome, sobrenome, sexo, data, contato} = request.body

    const usuario = { id: v4(), nome, sobrenome, sexo, data, contato}

    usuarios.push(usuario)

    return response.json(usuario)
})

app.listen(3333); // http://localhost:3333/users