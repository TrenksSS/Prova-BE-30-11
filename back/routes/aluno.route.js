const express = require('express');
const router = express.Router();

const alunos = require("../controlles/aluno.controller");

router.get("/read", alunos.read);
router.get("/read/:id", alunos.readAll);
router.post("/create", alunos.create);
router.delete("/del/:id", alunos.del);
router.put("/update", alunos.update);

module.exports = router;