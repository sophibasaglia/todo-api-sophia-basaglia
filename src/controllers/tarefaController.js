// CONTROLLER: recebe da rota, chama o service e devolve a resposta.

const tarefaService = require("../services/tarefaService");

async function listar(req, res) {
  const tarefas = await tarefaService.listarTarefas(req.query);
  res.status(200).json(tarefas);
}

async function buscarPorId(req, res) {
  const tarefa = await tarefaService.buscarTarefaPorId(req.params.id);
  if (!tarefa) {
    res.status(404).json({ erro: "Tarefa nao encontrada" });
    return;
  }
  res.status(200).json(tarefa);
}

async function criar(req, res) {
  const novaTarefa = await tarefaService.criarTarefa(req.body);
  res.status(201).json(novaTarefa);
}

async function atualizar(req, res) {
  const id = req.params.id;
  const tarefaAtualizada = await tarefaService.atualizarTarefa(id, req.body);

  if (!tarefaAtualizada) {
    return res.status(404).json({ erro: "Tarefa nao encontrada" });
  }
  return res.status(200).json(tarefaAtualizada);
}

async function atualizarParcial(req, res) {
  const id = req.params.id;
  const tarefaAtualizada = await tarefaService.atualizarParcialTarefa(id, req.body);

  if (!tarefaAtualizada) {
    return res.status(404).json({ erro: "Tarefa nao encontrada" });
  }
  return res.status(200).json(tarefaAtualizada);
}


module.exports = {
  listar,
  buscarPorId,
  criar,
  atualizar,
  atualizarParcial,
};
