const express=require("express");
const UsuariosController= require("../controller/usuarios.controller");
const api=express.Router();

api.post("/usuario",UsuariosController.createUsuarios);
api.get("/usuario",UsuariosController.getUsuario);
api.get("/usuarios",UsuariosController.getUsuarios);
api.delete("/usuario/:id",UsuariosController.deleteUsuario);
api.put("/usuarios",UsuariosController.updateUsuarios);
api.patch("/usuario/:id",UsuariosController.updateUsuarios);
api.get("/usuario/:id",UsuariosController.getUsuario);


module.exports=api;