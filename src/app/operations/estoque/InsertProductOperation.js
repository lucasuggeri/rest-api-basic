import insertProductService from "../../service/insertProductService.js";
export default async (dadosDoProduto)=>{
    return await insertProductService(dadosDoProduto);
}