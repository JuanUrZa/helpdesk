const objcontroller ={};


objcontroller.login= function (req,res){
    res.render('login',{
        data:""
    });
};



objcontroller.LoginUsers =function (req,res){
    const usuario = req.body.strCorreo;
    const contraseña = req.body.strContraseña;
 
 req.getConnection(function(err,conn){
  if(err){
 console.log(err);
 return;
  }

    conn.query('SELECT * FROM  Usuario  WHERE strCorreo = ? AND strContraseña = ?',[usuario,contraseña],function(err,rows){
    
        if(err){
            res.json(err);
        }

        if(!rows.length){
            res.render('login',{
                data:'NO SE ENCONTRO REGISTRADO'
            });

            
        }else{
        res.redirect('/');// PENDIENTE 
        }
        
    });

 });

    

}

objcontroller.register= function(req,res){
res.render('register');
}


objcontroller.Cliente =function (req,res){
    
   const intID = req.body.intID;
   const strNombre=req.body.strNombre;
   const strContraseña= req.body.strContraseña;
   const blnEstado = 1;
   const  strCorreo =req.body.strCorreo;
   const intBitacoras_Abiertas =0;
   const intBitacoras_Resueltas=0;

    conn.query('INSERT INTO Usuario  VALUES ??????',[intID,strNombre,strContraseña,blnEstado,strCorreo,intBitacoras_Abiertas],function(err,rows){
        if(err){
            res.json(err);
            console.log('la cago marica ');
        }else{
            console.log('Registro en la tabla usuario exitoso');
        }
       
    });
    conn.query('INSERT INTO Cliente (intID,intBitacoras_Resueltas) VALUES ??',[intID,strNombre,intBitacoras_Resueltas],function(err,rows){
        if(err){
            res.json(err);
        }else{
            console.log('Registro en la tabla Cliente exitoso');
            
        }
        
    });

   

 
    res.render('login');
}





module.exports = objcontroller;