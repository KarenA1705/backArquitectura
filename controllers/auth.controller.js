
import { getUsuario } from "../models/usuario.model.js" ;
import { generateToken } from "../services/token.service.js";
export const login = async (req, res) =>{
    try{
        let data = await   getUsuario(req.body.username , req.body.password ); 
        console.log(data);
        if(!data){
            throw new Error("Credenciales no válidas");
        }
        res.status(200).json({
            token : generateToken(data),
            success: true, 
            data: "Logeado Correctamente" , 
            msg : "Logeado Correctamente"
        });
    }catch(e){  
        res.status(401).json({
            success: false, 
            data: "Servicio no disponible" , 
            msg : "Servicio no disponible"
        });  
    }

}