async function listarCategorias(req, res) {
  const tarefas = await tarefaService.listarTarefas();
  res.status(200).json(categorias);
}

async function buscarCategoriaPorId(req, res) {
  const tarefa = await categoriaServiceService.buscarCategoriaPorId(req.params.id);
  if (!tarefa) {
    res.status(404).json({ erro: "Tarefa nao encontrada" });
    return;
  }
  res.status(200).json(categorias);
}

async function criar(req, res) {
  const erro = categoriaService.validarCategoria(req.body);
  if (erro) {
    res.status(400).json({ erro: erro });
    return;
  }
  const novaTarefa = await categoriaService.criarCategoria(req.body);
  res.status(201).json(novaTarefa);
}

async function deletarCategoria(req, res) {
  const id = req.params.id;
  const apagado = await categoriaService.deletarCategoria(req.params.id);

  if (!apagado) {
    return res.status(404).json({ erro: "Categoria nao encontrada" });
  }
  return res.status(204).send();
}

module.exports = {
  listarCategorias,
  buscarCategoriaPorId,
  criarCategoria,
  deletarCategoria,
};
