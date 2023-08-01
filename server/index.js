const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { mongoose } = require('./config/db');
const app = express();
const port = 3000
app.set('nombreApp', 'Aplicacion Smarthome');
app.set('puerto', process.env.PORT || 3000);

//Codigo que permite los cors desde cualquier origen
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
    console.log(`Request: ${req.method} ${req.originalUrl}`);
    next();
  });
app.use('/api', require('./routes/usuario'))

app.listen(app.get('puerto'), () => {
    console.log('Nombre de la App', app.get('nombreApp'));
    console.log('Puesto del servidor', app.get('puerto'));

})
