
import pgService from "../services/pg.services.js";

export const getProductModel = async(req, res) =>{
    const pg = new pgService();
    try {
        return await pg.connection.query("select * from product");
    } catch (error) {
        return ({statusCode: 500, message: 'Error Interno del servidor'});
    }    
}

export const deleteProductModel = async(id) =>{
    const pg = new pgService();
        const consulta = await pg.connection.query("SELECT * FROM product WHERE id = $1", [id]);
        if(consulta[0]){
            return await pg.connection.query("delete from product where id= $1", [id]);;
        }
        else{
            return ({statusCode: 404, message: 'ID no encontrado'});
        }
}

export const updateProductModel = async(id,nombre,img,valor)=>{
    const pg = new pgService();
        const consulta = await pg.connection.query("SELECT * FROM product WHERE id = $1", [id]);
        if(consulta[0]){
            return await pg.connection.query("UPDATE product SET nombre = $1, valor = $2, img = $3 WHERE id = $4", [nombre, valor,img, id]);
        }
        else{
            return ({statusCode: 404, message: 'ID no encontrado'});
        }
}

export const insertProductoModel = async(data)=>{
    const pg = new pgService();
        const consulta = await pg.connection.query("SELECT * FROM product WHERE id = $1", [data.id]);
        if(consulta[0]){
            return ({statusCode: 409, message: 'Error, ya existe el'});
        }
        else if(!data.nombre){
            return ({statusCode: 400, message: 'No estas enviando nombre'});
        }
        else if(!data.detalle){
            return({statusCode:400, message: 'No estas ingresando el detalle'})
        }
        else if(data.valor<=0){
            return({statusCode:400, message: 'debes ingresar un valor mayor a 0'})
        }
        else{
            return await pg.connection.query("INSERT INTO product (nombre, detalle, valor,img) VALUES ( $1, $2, $3, $4)", [data.nombre,data.detalle, data.valor,data.img]);
                    
        }

}