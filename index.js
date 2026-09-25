import express from 'express'
import { buscarPacientes} from './DAO/paciente/buscar_paciente.js'
import { buscarConsulta } from './DAO/consulta/buscar_consulta.js'
import { buscarAgendamento } from './DAO/agendamento/buscar_agendamento.js'
import { buscarEspecialidade } from './DAO/especialidade/buscar_especialidade.js'
import { buscarMedico } from './DAO/medico/buscar_medico.js'
import { incluirMedico } from './DAO/medico/inserir_medico.js'

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

//novas requisiçoes
app.get('/consulta', async (req, res) => {
  let consulta = await buscarConsulta();
  res.json(consulta)
})

app.get('/agendamento', async (req, res) => {
  let agendamento = await buscarAgendamento();
  res.json(agendamento)
})

app.get('/especialidade', async (req, res) => {
  let especialidade = await buscarEspecialidade();
  res.json(especialidade)
})

app.get('/medico', async (req, res) => {
  let medico = await buscarMedico();
  res.json(medico)
})

// Inicialização do Servidor
app.listen(3000, () => {
  console.log('🚀 Server is running on http://localhost:3000')
})



// post

app.post('/paciente', async (req, res) => {
  let { nome, endereco, telefone, doencasPrevias, remedioDeUsoContinuo  } = req.body

  console.log(crm, nome, endereco, telefone, numeroRegistro)
  res.send(crm, nome, endereco, telefone, numeroRegistro)
})


app.post('/medico', async (req, res) => {
  let { crm, nome, endereco, telefone, numeroRegistro } = req.body

  console.log(crm, nome, endereco, telefone, numeroRegistro)
  let resp = await incluirMedico(infos)
  res.send(resp)
})

app.post('/consulta', async (req, res) => {
  let {  data, hora, numeroBeneficiario, crm, numeroAgendamento} = req.body

  console.log( data, hora, numeroBeneficiario, crm, numeroAgendamento)
  res.send( data, hora, numeroBeneficiario, crm, numeroAgendamento)
})

app.post('/especialidade', async (req, res) => {
  let { nome, publicoAlvo} = req.body

  console.log( nome, publicoAlvo)
  res.send( nome, publicoAlvo)
})

app.post('/agendamento', async (req, res) => {
  let { data, hora, queixa, gravidade} = req.body

  console.log( data, hora, queixa, gravidade)
  res.send( data, hora, queixa, gravidade)
})