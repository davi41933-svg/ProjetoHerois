import express from 'express';
import cors from 'cors';

import authRoutes from './routes/authRoutes.js';

const app = express();

app.use(express.json());
app.use(cors());


app.use('/auth', authRoutes);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅Servidor rodando na porta ${PORT}`);
});