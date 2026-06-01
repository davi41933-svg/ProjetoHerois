import { authService } from '../services/authService.js';

// Objeto que cuida de cadastro, login e token. Recebe requisições e chama o service
export const authController = {

    // Endpoint de cadastro de usuário
    async cadastrarUsuario(req, res) {
        try {
            const resultado = await authService.criarUsuario(req.body);

            return res.status(201).json(resultado);

        } catch (error) {
            return res.status(400).json({ mensagem: error.message });
        }
    },

    // Endpoint de login de usuário
    async login(req, res) {
        try {
            const resultado = await authService.login(req.body);

            return res.status(200).json(resultado);

        } catch (error) {
            return res.status(401).json({ mensagem: error.message });
        }
    }
}

// 201 = Criado com sucesso
// 400 = Requisição inválida
// 401 = Não autorizado
// 500 = Erro interno do servidor
// 200 = sucesso
// 404 = Não encontrado

// Endpoint = Endereço final (URL + método HTTP)
// Rota = Caminho da URL