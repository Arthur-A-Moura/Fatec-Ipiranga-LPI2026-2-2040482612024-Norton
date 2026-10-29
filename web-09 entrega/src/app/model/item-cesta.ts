import { Produto } from "./produto";

export class ItemCesta {
   produto: Produto = new Produto();
   qtd: number = 1;
   valorTotal: number=0;

    constructor(obj:Produto){
        this.produto = obj;
        this.valorTotal = this.calculaItem();
    }

    public calculaItem():number{
        let valor=0;
        if(this.produto.valorPromo > 0 ){
            valor = this.qtd * this.produto.valorPromo;
        } else {
            valor = this.qtd * this.produto.valor;
        }
        return valor;
    }
}
