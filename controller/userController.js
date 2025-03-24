const userRoutes = require('../services/userService');

module.exports = {
    async register(req, res) {
        try {
            // Validação básica dos dados de entrada
            if (!req.body.nome || !req.body.email || !req.body.utf || !req.body.areaAtuacao) {
                return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
            }

            const user = await userRoutes.register(req.body);
            return res.status(201).json(user);
        } catch (error) {
            console.error('Erro ao registrar usuário:', error); // Adiciona log detalhado do erro
            if (error.name === 'ValidationError') {
                return res.status(422).json({ message: error.message });
            }
            return res.status(500).json({ message: 'Erro interno do servidor' });
        }
    }
}