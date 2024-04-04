const app = require("../api");
const token = require("../util/token");
const usuarioModel = require('../models/usuarioModel');

app.use('/entrar',router.post('/entrar',async(req,res)=>{
    const usuarioController = require('./controllers/usuarioController')
    let resp = await usuarioController.entrar(req.body.nick);
    res.status(200).send(resp);
}))

app.use('/sair',router.post('/sair',async(req,res)=>{
    const usuarioController = require('./controllers/usuarioController')
    let resp = await usuarioController.entrar(req.body.nick);
    res.status(200).send(resp);
}))


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