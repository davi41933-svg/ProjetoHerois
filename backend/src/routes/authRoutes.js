import { authController } from '../controllers/authController.js';
import { Router } from 'express';

const router = Router();

// Rotas de cadastro e login
router.post('/cadastrar', authController.cadastrarUsuario);
router.post('/login', authController.login);

export default router;