const express =require('express')
const app= express();

app.use(express.urlencoded({extended:true}));
app.use(express.json())

const router = express.Router();
app.use('/',router.get('/'),(req,res)=>{
    res.status(200).send("<h1>API - CHAT <h1>")
})
app.use('/',router.get('/sobre',(req,res,next)=>{
    res.status(200).send({
        "nome":"API - CHAT",
        "Versão":"0.1.0",
        "autor":"Vitor Rodrigues"
    })
}))

app.use('/salas',router.get('/salas',(req,res)=>{
    const salaController = require('./controllers/salaController')
    let resp = salaController.get();
    res.status(200).send(resp);
}))
app.use("/salas",router.get("/salas",async(req,res,next)=>{
    if(await Token.checkToken(req.headers.Token,req.headers.iduser,req.headers.nick)){
        let resp = await salaController.get();
        res.status(200).send(resp);
    }else{
        res.status(400).send({msg:"usuario não autorizado"})
    }
}))
app.use("/sala/entrar",router.put("/sala/entrar",async(req,res)=>{
    if(!Token.checkToken(req.headers.Token,req.headers.iduser,req.headers))
    return false;
    let resp = await salaController.entrar(req.headers.iduser,req.query.idsala);
    res.status(200).send(resp);
}))
app.use('/sala/mensagem/',router.post('/sala/mensagem',async(req,res)=>{
    if(!TokenExpiredError.checkToken(req.headers.toke,req.headers.iduser,req.headers.nick)){
        return false;
        let resp = await ReadableStreamDefaultController.enviarMensagem(req.headers.nick,req.body.msg,req.body.idsala);
        res.status(200).send(resp);
    }
}))
app.use('/sala/mensagens/',router.get("/sala/mensagens",async(req,res)=>{
    if(!token.checkToken(req.headers.toke,req.headers.iduser,req.headers.nick)){
        return false;
    }
    let resp = await salaController.buscarMensagens(req.query.idsala,req.query.timestamp);
    res.status(200).send(resp);
}))
module.exports=app
