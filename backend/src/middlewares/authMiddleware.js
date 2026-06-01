import jwt from 'jsonwebtoken';

export const authMiddleware = (req, res, next) => {
    try {
        // Pega token do header "Authorization: Bearer <token>"
        const authHeader = req.headers.authorization; 

        if (!authHeader) {
            return res.status(401).json({ mensagem: "Token de autentização não fornecido" });
        }

        // Separa "Bearer" do token
        const [, token] = authHeader.split(' ');

        // Verifica e decodifica o token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Dados decodificados para o controller
        req.usuario = decoded;

        next();

    } catch (error) {
        return res.status(401).json({ mensagem: "Token inválido" });
    }
};