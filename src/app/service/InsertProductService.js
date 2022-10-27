import estoqueModel from '../models/estoqueModel.js'

export default async (dadosDoProduto) => {
    const result = await estoqueModel.insert(dadosDoProduto);
    const produtoNaoInserido = !result.insertedId;
    if (produtoNaoInserido) throw new TypeError('Produto não foi inserido')
    const [inserted] = await estoqueModel.findAll({
        "_id": result.insertedId
    })
    return inserted;
}