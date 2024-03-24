const db = require("./db");
async function registrarUsuario(nick){
    return await db.insertOne("usuario",{"nick":nick});
}
async function insertOne(collection,Objeto){
    const db = await connect();
    
    return db.collection(collection).insertOne(Objeto);
}
let buscarUsuario = async(idsala)=>{
    let user = await db.finOne("usuarios",idUser);
    return user;
}
let alterarUsuario = async(user)=>{
    return await db.updateOne("usuarios",user,{_id:user._id})
}
module.exports = {registrarUsuario}