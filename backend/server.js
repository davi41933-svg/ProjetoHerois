import express from 'express';
import cors from 'cors';
import authRoutes from './src/routes/authRoutes.js';
import heroiRoutes from './src/routes/heroiRoutes.js';
import guildaRoutes from './src/routes/guildaRoutes.js';
import missaoRoutes from './src/routes/missaoRoutes.js';

const app = express();


app.use(express.json());
app.use(cors());



app.use('/auth', authRoutes);
app.use('/heroi', heroiRoutes);
app.use('/guilda', guildaRoutes);
app.use('/missao', missaoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ Servidor rodando na porta ${PORT}`);
})