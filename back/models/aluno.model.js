
class aluno {
    constructor(data) {
        this.id = data.id_aluno;
        this.nome = data.nome;
        this.nascimento = data.nascimento;
    }
    static read = () => {
        return "SELECT * FROM aluno";
    }
    static readAll = () => {
        return "SELECT * FROM vw_info WHERE id_aluno = ${id}";
    }
    static create(data) {
        return `INSERT INTO aluno VALUES(default,'${data.nome}','${data.nascimento}')`
    }
    static update(data) {
        return `UPDATE aluno SET nome = '${data.nome}', nascimento = '${data.nascimento}' WHERW id = ${data.id}`;
    }
    static delete(id) {
        return`DELETE FROM aluno WHERE id = ${id}`;
    }
}
module.exports = aluno;