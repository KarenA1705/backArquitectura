import e from "express";
import { getProductModel, deleteProductModel,updateProductModel,insertProductoModel } from "../models/product.model.js";

export const getProduct = async (req,res) => {

        console.log("Get product");
        let data = await getProductModel();
        res.send({msg:"get product", data:data}) 
}

export const deleteProduct = async (req,res) => {
        console.log("Delete product");
        let data = await deleteProductModel(req.params.id,res);
        res.send({msg:"delete product", data:data, delete:"success"});
}

export const updateProduct = async (req,res) => {
        console.log("Update product");
        let data = await updateProductModel(req.params.id, req.body.nombre, req.body.img, req.body.valor);
        res.send({msg:"update product", data:data, update:"success"}); 
}
export const insertProduct = async (req,res) => {
        console.log("Insert product");
        let data =  await insertProductoModel(req.body);
        res.status(200).send({msg:"insert product", data:data, insert:"success"}); 
  
}

