const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
 
const route = require('./routes');
const db = require('./config/db');

// connect db
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

//body
app.use(express.urlencoded({
  extended: true
}));

app.use(express.json());

//HTTP loger  
app.use(morgan('combined'))

//template engine
app.engine('hbs', handlebars({
  extname: '.hbs'
})); 
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources' , 'views'));


route(app);






app.listen(port, () => {
  console.log(` Server listening at http://localhost:${port}`)
})