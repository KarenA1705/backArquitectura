import { Router } from "express";
import { login } from "../controllers/auth.controller.js";
import { getUsuario } from "../models/usuario.model.js";

const router = Router();

router.post("/",login)


export default router;