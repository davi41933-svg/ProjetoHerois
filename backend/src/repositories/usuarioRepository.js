import { pool } from '../config/db.js';

export const usuarioRepository = {

    async buscarPorEmail(email) {
        const [resultado] = await pool.query(`
            SELECT *
            FROM usuarios
            WHERE email = ?
            `, [email]);

        return resultado[0] || null;
    },

    async buscarPorId(id) {
        const [resultado] = await pool.query(`
            SELECT * 
            FROM usuarios
            WHERE id = ?
            `, [id]);

        return resultado[0] || null;
    },

    async criarUsuario({ nome, email, senhaHash }) {
        const [resultado] = await pool.query(`
            INSERT INTO usuarios
            (nome, email, senha, moedas, xp, nivel, caixa_atual)
            VALUES (?, ?, ?, 0, 0, 1, 'madeira')
            `, [nome, email, senhaHash]);

        return resultado.insertId;
    }
}