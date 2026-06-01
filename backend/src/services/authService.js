import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { usuarioRepository } from '../repositories/usuarioRepository.js';

// Objeto que cuida de cadastro, login e gerar token
export const authService = {

    // Gera token JWT para o usuário
    gerarToken(usuario) {
        return jwt.sign(
            {
                id: usuario.id,
                email: usuario.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '1h' // Validade do token
            }
        );
    },

    // Cadastrar um novo usuário
    async criarUsuario({ nome, email, senha }) {

        const usuarioExiste = await usuarioRepository.findByEmail(email);

        if (usuarioExiste) {
            throw new Error('Email já cadastrado');
        }

        // 10 = Número de rounds para o hash (10 fechaduras, mais processamento)
        const senhaHash = await bcrypt.hash(senha, 10);

        // Cria usuário no banco
        const usuarioId = await usuarioRepository.criarUsuario({ nome, email, senhaHash });

        // Objeto a ser retornado
        const usuario = { id: usuarioId, nome, email };

        // Gera token para o novo usuário
        // this porque estamos dentro do mesmo obejto authService (se não tivesse seria assim: authService.gerarToken(usuario))
        const token = this.gerarToken(usuario);

        return { token, usuario };
    },

    // Login do usuário
    async login({ email, senha }) {
        const usuario = await usuarioRepository.findByEmail(email);

        if (!usuario) {
            throw new Error('Email ou senha inválidos');
        }

        const senhaValida = await bcrypt.compare(senha, usuario.senha_hash);

        if (!senhaValida) {
            throw new Error('Email ou senha inválidos');
        }

        // Gera token para usuário autenticado
        const token = this.gerarToken(usuario);

        return { token, usuario: { id: usuario.id, nome: usuario.nome, email: usuario.email } };
    }
}