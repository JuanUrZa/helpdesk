const express= require('express');

const router = express.Router();
const controller = require('../controllers/controller');

 router.get('/',controller.login);

 router.post('/login-users',controller.LoginUsers);

 router.get('/register', controller.register);
 
 router.post('/cliente',controller.Cliente);

 
module.exports= router;