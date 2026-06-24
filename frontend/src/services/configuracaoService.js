import api from '../api/api';

export default {
    async buscarPerfil() {
        const resposta = await api.get('/config/perfil');
        return resposta.data;
    },

    async atualizarNomeEmail(dados) {
        const resposta = await api.put('/config/nome-email', dados);
        return resposta.data;
    },

    async atualizarSenha(dados) {
        const resposta = await api.put('/config/senha', dados);
        return resposta.data;
    },

    async deletarConta(senha) {
        const resposta = await api.delete('/config/conta', { data: { senha } });
        return resposta.data;
    }
};