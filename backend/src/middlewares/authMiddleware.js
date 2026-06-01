import jwt from 'jsonwebtoken';

export const authMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({ mensagem: "Token de autentização não fornecido" });
        }

        const [, token] = authHeader.split(' ');

        const decoded = jwt.verufy(token, process.env.JWT_SECRET);

        req.usuario = decoded;

        next();

    } catch (error) {
        return res.status(401).json({ mensagem: "Token inválido" });
    }
};