import express from 'express';
import Router from "express"
import { Request, Response } from 'express';
import { createUser } from '../controllers/user.controller';
import { validateUser } from '../middlewares/user.middleware';

const router = Router();

//router.post('/', validateUser , createUser); 
// ruta, middleware, controlador

//router.get("/", middlwm , controlador);

export default router;



