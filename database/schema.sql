CREATE DATABASE IF NOT EXISTS projeto_herois;

USE projeto_herois;

CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    senha_hash VARCHAR(255) NOT NULL,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS usuario_herois (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    heroi_api_id VARCHAR(255) NOT NULL,
    nome_heroi VARCHAR(255) NOT NULL,
    xp_heroi INT NOT NULL DEFAULT 0,
    imagem_heroi VARCHAR(255) NOT NULL,
    adquirido_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE,
    UNIQUE KEY unique_usuario_heroi (usuario_id, heroi_api_id)
);