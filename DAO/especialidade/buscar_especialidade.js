import {conexao} from '../conexao.js'


async function buscarEspecialidade(){
  console.log('DAO de CLIENTE')
    const sql = `SELECT * FROM tbl_especialidade;`
    
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
async function buscarEspecialidades(codigo){
    const sql = `SELECT * FROM  tbl_especialidade WHERE codigo = ?`
    
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

export {buscarEspecialidades, buscarEspecialidade}
