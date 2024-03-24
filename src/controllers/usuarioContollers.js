const app = require("../api");

app.use('/entrar',router.post('/entrar',async(req,res)=>{
    const usuarioController = require('./controllers/usuarioController')
    let resp = await usuarioController.entrar(req.body.nick);
    res.status(200).send(resp);
}))
const token = require("../util/token");
const usuarioModel = require('../models/usuarioModel');

exports.entar=async(nick)=>{
    let resp = await usuarioModel.registrarUsuario(nick);
    if(resp.insertedId){
        return {
            "idUser":resp.insertedId,
            "token":await token.setToken(JSON.stringify(resp.insertedId).replace(/"/g,''),nick),
            "nick":nick
        }
    }
}