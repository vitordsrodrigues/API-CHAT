const { Timestamp } = require('mongodb');
const db = require('./db')
function listarsalas(){
    return db.findAll("salas")
}



function listarsalas(){
    return[
        {
            "_id":{
                "$oid":"634ece43ea124"
            },
            "nome":"GUERReIROS da fiel",
            "tipo":"publica"
        },{
            "_id":{
                "$oid":"643ecece1"
            },
            "nome":"so os confirmado da info",
            "tipo":"privado",
            "chave":"at8q4haw"
        },
        {
            "_id":{
                "$oid":"643f22a2ea13"
            },
            "nome":"GUERREIRO DA INFO ",
            "tipo":"publico"
        }
    ];
}
let listarsalas = async()=>{
    let salas = await db.findAll("salas");
    return salas;
}
let buscarSala = async(idsala)=>{
    return db.findOne("salas",idsala);
}
let atulizarMensagens = async(sala)=>{
    return await db.updateOne("salas",sala,{_id:sala._id});
}
let buscarMensagens = async(idsala,Timestamp)=>{
    let sala = await buscarSala(idsala);
    if(sala.msgs){
        let msgs=[];
        sala.msgs.forEach((msg)=>{
            if(msg.Timestamp>=Timestamp){
                msgs.push(msg);
            }
        });
        return msgs;
    }
    return [];
}
module.exports = {listarsalas}