import { configuracaoService } from '../services/configuracaoService.js';

export const configuracaoController = {

    async buscarPerfil(req, res) {
        try {
            const resultado = await configService.buscarPerfil(req.usuario.id);
            return res.status(200).json(resultado);
        } catch (error) {
            return res.status(error.status || 500)
                .json({ mensagem: error.message || 'Erro interno do servidor' });
        }
    },

    async atualizarNomeEmail(req, res) {
        try {
            const resultado = await configService.atualizarNomeEmail(req.usuario.id, req.body);
            return res.status(200).json(resultado);
        } catch (error) {
            return res.status(error.status || 500)
                .json({ mensagem: error.message || 'Erro interno do servidor' });
        }
    },

    async atualizarSenha(req, res) {
        try {
            const resultado = await configService.atualizarSenha(req.usuario.id, req.body);
            return res.status(200).json(resultado);
        } catch (error) {
            return res.status(error.status || 500)
                .json({ mensagem: error.message || 'Erro interno do servidor' });
        }
    },

    async deletarConta(req, res) {
        try {
            const resultado = await configService.deletarConta(req.usuario.id, req.body);
            return res.status(200).json(resultado);
        } catch (error) {
            return res.status(error.status || 500)
                .json({ mensagem: error.message || 'Erro interno do servidor' });
        }
    }
};