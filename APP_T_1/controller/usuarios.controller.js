const Usuarios=require("../models/usuarios.model");

async function createUsuarios(req,res){
 function createUsuarios(req,res){
    const usuarios=new Usuarios(req.body);

    usuarios.save((error, usuarioStored)=>{
        if(error){
            res.status(400).send({msg: "Error al guardar los datos"})
        }else{
            res.status(200).send(usuarioStored)
        }
    })
}


async function updateUsuarios(req,res){
    console.log("Actualización de Usuarios");
function getUsuarios(req,res){
    Usuarios.find((error, usuarioStored)=>{
        if(error){
            res.status(500).send({msg:"No hay datos que consultar"})
        }else{
            res.status(200).send(usuarioStored)
        }
})
}


async function deleteUsuario(req,res){
    console.log("Eliminar Usuarios");
 function deleteUsuario(req,res){
    const {id}=req.params;

    Usuarios.findByIdAndDelete(id, (error)=>{
        if(error){
            res.status(400).send({msg:"Error al eliminar el Usuario"})
        }else{
            res.status(200).send({msg: "Usuario eliminado"})
        }
    })
}


function updateUsuarios(req,res){
   const {id}=req.params;
   const datosUsuarios=req.body;

   Usuarios.findByIdAndUpdate({_id:id},datosUsuarios, (error)=>{
    if(error){
        res.status(400).send({msg: "Datos no actualizados"})
    }else{
        res.status(200).send({msg: "Los datos fueron actualizados correctamente"})
    }
   })


async function getUsuario(req,res){
    console.log("Obtener los Usuarios");
}



module.exports={
    createUsuarios,
    updateUsuarios,
    deleteUsuario,
    getUsuario,
    getUsuario,
    getUsuarios
}
}
}
}
}