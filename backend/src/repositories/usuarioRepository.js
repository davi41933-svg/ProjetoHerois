import { pool } from '../config/database.js';

// Objeto responsável pelas operações relacionadas ao Usuário
export const usuarioRepository = {

    // Busca um usuário pelo email
    async findByEmail(email) {
        const [rows] = await pool.query(`
            SELECT * 
            FROM usuarios 
            WHERE email = ?
            `, [email]
        );

        return rows[0] || null;
    },

    // Busca um usuário pelo ID
    async findById(id) {
        const [rows] = await pool.query(`
            SELECT *
            FROM usuarios
            WHERE id = ?
            `, [id]
        );

        return rows[0] || null; // Retorna o usuário encontrado ou null
    },

    // Cria um usuário no banco
    async criarUsuario({ nome, email, senhaHash }) {
        const [resultado] = await pool.query(`
            INSERT INTO usuarios (nome, email, senha_hash)
            VALUES (?, ?, ?)
            `, [nome, email, senhaHash]);

            return resultado.insertId; // Retorna ID do usuário criado
    }
}