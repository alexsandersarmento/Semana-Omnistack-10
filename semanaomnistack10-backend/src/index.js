const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const {setupWebsocket} = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://alex180496:180496alex@cluster0-1hn75.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

//Métodos HTTP: GET, POST, PUT, DELETE

//Tipos de parâmetros:
//Query Params: request.query (filtros, ordenação, paginação...)
//Route Params: request.params (identificar um recurso na alteração ou remoção...)
//Body: resquest.body (dados para criação ou alteração de um registro...)

//MongoDB (banco de dados não-relacionado)

server.listen(3333);