import express from 'express'
import { buscarPacientes } from './DAO/paciente/buscar_paciente.js'

const app = express()

// Middleware obrigatório para o Express conseguir ler o corpo (body) das requisições em formato JSON
app.use(express.json())

// Rota Base
app.get('/', (req, res) => {
    res.json({ mensagem: 'API de Estacionamento Rodando perfeitamente!' })
})

app.get('/paciente', async (req, res) => {
    let pacientes = await buscarPacientes();
    res.json(pacientes)
})

// Inicialização do Servidor
app.listen(3000, () => {
  console.log('🚀 Server is running on http://localhost:3000')
})
