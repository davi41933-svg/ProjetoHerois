import { pool } from '../config/database.js';

export const heroiRepository = {

    // Busca todos os heróis em um usuário
    async buscarPorUsuario(usuarioId) {
        const [rows] = await pool.query(`
            SELECT * 
            FROM usuario_herois
            WHERE usuario_id = ?`, [usuarioId]
        );
        return rows;
    },

    // Busca um herói específico
    async buscarPorHeroi(usuarioId, heroiId) {
        const [rows] = await pool.query(`
            SELECT *
            FROM usuario_herois
            WHERE usuario_id = ?
            AND heroi_id = ?`, [usuarioId, heroiId]
        );
        return rows[0] || null;
    },

    // Salva herói para um usuário
    async salvarHeroi({ usuarioId, heroiId, nomeHeroi, imagemHeroi }) {
        const [resultado] = await pool.query(`
            INSERT INTO usuario_herois (usuario_id, heroi_id, nome_heroi, imagem_heroi)
            VALUES (?, ?, ?, ?)`, [usuarioId, heroiId, nomeHeroi, imagemHeroi]
        );
        return resultado.insertId;
    }
}