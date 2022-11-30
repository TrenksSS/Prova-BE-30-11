const alunos = require('../models/aluno.model');
const con = require('../dao/modelDAO');



const read = (req, res) => {
    con.query(alunos.read(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}
const readAll = (req, res) => {
    con.query(alunos.readAll(req.params.id), (err, result) => {
        if (err == null)
            res.json(Composite.aluno(result)).end();
        else
            res.status(500).end();
    });
}

const create = (req, res) => {
    con.query(alunos.create(req.body),(err,result) => {
        if(err == null) {
            res.status(201).json({ id: result.insertId}).end();
        }else{
            res.json(err).end();
        }
    })
}
const update = (req, res) => {
    con.query(alunos.delete(req.body),(err, result) => {
        if (result.affectedRows > 0) {
            res.status(200).end();
        } else {
            res.status(404).json(err).end();
        }
    })
}
const del = (req, res) => {
    con.query(alunos.delete(req.params.id),(err, result) => {
        if (result.affectedRows > 0) {
            res.status(200).end();
        } else {
            res.status(404).json(err).end();
        }
    })
}



module.exports = {
    read,
    create,
    del,
    update,
    readAll
}