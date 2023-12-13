import { Router } from "express";
import { getProduct, deleteProduct,updateProduct,insertProduct } from "../controllers/product.controllers.js";
import { validate } from "../middlewares/validator.middlewares.js";
import { productValidator } from "../validators/product.validators.js";

const router = Router();

router.get("/"/*,validate(productValidator)*/, getProduct);
router.delete("/:id"/*,validate(productValidator)*/, deleteProduct);
router.post("/"/*,validate(productValidator)*/, insertProduct);
router.put("/:id"/*,validate(productValidator)*/, updateProduct);

export  default router;
