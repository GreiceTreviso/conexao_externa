import {conexao} from '../conexao.js'


async function buscarConsulta(){
  console.log('DAO de CLIENTE')
    const sql = `SELECT * FROM tbl_consulta;`
    
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
async function buscarConsultas(codigo){
    const sql = `SELECT * FROM  tbl_consulta WHERE numeroConsulta = ?`
    
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

export {buscarConsulta, buscarConsultas}