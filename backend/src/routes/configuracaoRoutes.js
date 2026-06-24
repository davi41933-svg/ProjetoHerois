import { Router } from 'express';
import { configController } from '../controllers/configController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import { validate } from '../middlewares/validateMiddleware.js';
import { atualizarNomeEmailSchema, atualizarSenhaSchema, deletarContaSchema } from '../schemas/configSchema.js';

const router = Router();

router.get('/perfil', authMiddleware, configController.buscarPerfil);
router.put('/nome-email', authMiddleware, validate(atualizarNomeEmailSchema), configController.atualizarNomeEmail);
router.put('/senha', authMiddleware, validate(atualizarSenhaSchema), configController.atualizarSenha);
router.delete('/conta', authMiddleware, validate(deletarContaSchema), configController.deletarConta);

export default router;