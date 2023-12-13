import { checkSchema } from "express-validator";

export const productValidator = checkSchema({
    product :{
        errorMessage: 'Producto Necesario',
        notEmpty : true
    }
},["query"])