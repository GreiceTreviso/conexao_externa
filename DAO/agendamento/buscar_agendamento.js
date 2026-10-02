import {conexao} from '../conexao.js'


async function buscarAgendamento(){
  console.log('DAO de CLIENTE')
    const sql = `SELECT * FROM tbl_agendamento`
    
    const conn = await conexao()
    try {
        // Executar a consulta
        const [rows, fields] = await conn.query(sql);
        await conn.end()
        return rows
      } catch (err) {
        return err.message
      }
}

// nao ultilizado 
async function buscarAgendamentos(codigo){
    const sql = `SELECT * FROM  tbl_agendamento WHERE numeroAgendamento = ?`
    
    const conn = await conexao()
    
    try {
        // Executar a consulta
        const [rows, fields] = await conn.query(sql, [codigo]);
        await conn.end()
        return rows
      } catch (err) {
        return err.message
      }
}

export { buscarAgendamento, buscarAgendamentos}