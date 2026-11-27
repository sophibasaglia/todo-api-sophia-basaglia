// ROTA: recebe a requisicao HTTP e chama o controller.

const express = require("express");
const tarefaController = require("../controllers/tarefaController");
const validarId = require("../middlewares/validarId");

const router = express.Router();

router.get("/", tarefaController.listar);
router.get("/:id", validarId, tarefaController.buscarPorId);
router.post("/", tarefaController.criar);

module.exports = router;