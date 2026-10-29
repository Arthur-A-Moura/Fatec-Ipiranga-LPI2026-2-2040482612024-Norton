import { Cliente } from "./cliente";
import { ItemCesta } from "./item-cesta";
import { Produto } from "./produto";

export class Cesta {
    cliente: Cliente = new Cliente();        
    total: number=0;
    itens: ItemCesta[] = [];

    public calculaTotal():number {
        let total = 0 ;
        for(let o of this.itens){
            total = total + this.calculaItem(o);
        }
        this.total = total;
        return this.total;
    }


    constructor(jsonString: string | null){        
        try {
            if(jsonString!=null){
                const dados = JSON.parse(jsonString);
                this.cliente = dados.cliente || new Cliente();
                this.total = dados.total || 0;
                this.itens = dados.itens || [];
            }
        } catch (e) {
            console.error("Erro ao converter cesta do localStorage", e);
        }    
    }



   public adicionarItem(p: Produto) {
       
    // Procura se o produto já existe na cesta
        let itemExistente = this.itens.find(item => item.produto.codigo === p.codigo);
        if (itemExistente) {
            itemExistente.qtd++;                          
            itemExistente.valorTotal = this.calculaItem(itemExistente);
        } else {
            this.itens.push(new ItemCesta(p));
        }
        this.calculaTotal(); // Atualiza o total antes de guardar       
   }
   public removerItem(codigo: number) {
    this.itens = this.itens.filter(item => item.produto.codigo !== codigo);
    this.calculaTotal(); 
   
}

    public calculaItem(itm: ItemCesta):number{
        let valor=0;
        if(itm.produto.valorPromo > 0 ){
            valor = itm.qtd * itm.produto.valorPromo;
        } else {
            valor = itm.qtd * itm.produto.valor;
        }
        return valor;
    }
}
