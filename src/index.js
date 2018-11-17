const express = require ('express');
const path = require('path');
const morgan = require ('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const app = express();

//importando rutas
 const rout =require('./routs/rout');
//setings
app.set('port',process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));//direcion de la carpeta viwes


// meddlewares
app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host:'localhost',
    user:'root',
    password:'azazazqaz',
    port: 3306,
    database:'DBHelpdesk'

},'single'));
app.use(express.urlencoded({extended:false}));
//routs 
app.use('/',rout);




//empezando el servidor 
app.listen(app.get('port'), () => {
    console.log('Server on port 3000');
});
