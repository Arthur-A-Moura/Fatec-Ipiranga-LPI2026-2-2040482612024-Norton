import { Component } from '@angular/core';
import { Produto } from '../model/produto';
import { CommonModule } from '@angular/common';
import { Cesta } from '../model/cesta';

@Component({
  imports: [CommonModule],
  selector: 'app-vitrine',
  styleUrl: './vitrine.css',
  templateUrl: './vitrine.html',
})
export class Vitrine {   
    mensagem : String = "";
    lista: Produto[] = [
  {
    "codigo": 1,
    "nome": "Martelo de Unha 25mm",
    "descritivo": "Martelo com cabo de madeira e cabeça de aço forjado, ideal para trabalhos gerais.",
    "valor": 39.90,
    "valorPromo": 0,
    "quantidade": 25,
    "destaque": 1,
    "keywords": "martelo, ferramentas, construção, madeira, aço"
  },
  {
    "codigo": 2,
    "nome": "Chave de Fenda 6mm",
    "descritivo": "Chave de fenda com ponta em aço temperado e cabo ergonômico.",
    "valor": 18.90,
    "valorPromo": 0,
    "quantidade": 40,
    "destaque": 0,
    "keywords": "chave, fenda, ferramenta, parafuso, manutenção"
  },
  {
    "codigo": 3,
    "nome": "Jogo de Chaves Phillips",
    "descritivo": "Conjunto com 5 chaves Phillips de diferentes tamanhos para uso doméstico e profissional.",
    "valor": 49.90,
    "valorPromo": 44.90,
    "quantidade": 0,
    "destaque": 1,
    "keywords": "chave phillips, jogo, ferramentas, parafusos, manutenção"
  },
  {
    "codigo": 4,
    "nome": "Alicate Universal 8 Polegadas",
    "descritivo": "Alicate universal em aço carbono com cabo emborrachado e alta resistência.",
    "valor": 42.90,
    "valorPromo": 39.90,
    "quantidade": 0,
    "destaque": 1,
    "keywords": "alicate, universal, ferramenta, corte, aperto"
  },
  {
    "codigo": 5,
    "nome": "Trena 5 Metros",
    "descritivo": "Trena com fita de aço de 5 metros, trava de segurança e revestimento resistente.",
    "valor": 24.90,
    "valorPromo": 19.90,
    "quantidade": 35,
    "destaque": 0,
    "keywords": "trena, medição, ferramenta, metro, construção"
  },
  {
    "codigo": 6,
    "nome": "Furadeira de Impacto 650W",
    "descritivo": "Furadeira de impacto com potência de 650W, ideal para madeira, metal e alvenaria.",
    "valor": 289.90,
    "valorPromo": 249.90,
    "quantidade": 10,
    "destaque": 1,
    "keywords": "furadeira, impacto, elétrica, construção, perfuração"
  },
  {
    "codigo": 7,
    "nome": "Jogo de Brocas para Concreto",
    "descritivo": "Kit com 6 brocas para concreto em diferentes medidas.",
    "valor": 59.90,
    "valorPromo": 49.90,
    "quantidade": 16,
    "destaque": 0,
    "keywords": "broca, concreto, perfuração, furadeira, construção"
  },
  {
    "codigo": 8,
    "nome": "Parafuso Sextavado 6x50mm",
    "descritivo": "Parafuso sextavado em aço zincado, indicado para fixações em madeira e estruturas.",
    "valor": 12.90,
    "valorPromo": 10.90,
    "quantidade": 150,
    "destaque": 0,
    "keywords": "parafuso, sextavado, aço, fixação, construção"
  },
  {
    "codigo": 9,
    "nome": "Caixa com Buchas 8mm",
    "descritivo": "Caixa com 100 buchas de nylon de 8mm para fixações em paredes.",
    "valor": 29.90,
    "valorPromo": 24.90,
    "quantidade": 60,
    "destaque": 0,
    "keywords": "bucha, nylon, fixação, parede, parafuso"
  },
  {
    "codigo": 10,
    "nome": "Fita Isolante 20 Metros",
    "descritivo": "Fita isolante de PVC para instalações elétricas e pequenos reparos.",
    "valor": 9.90,
    "valorPromo": 7.90,
    "quantidade": 80,
    "destaque": 1,
    "keywords": "fita isolante, elétrica, pvc, instalação, manutenção"
  },
  {
    "codigo": 11,
    "nome": "Estilete Profissional",
    "descritivo": "Estilete com lâmina retrátil, trava de segurança e corpo reforçado.",
    "valor": 16.90,
    "valorPromo": 13.90,
    "quantidade": 32,
    "destaque": 0,
    "keywords": "estilete, lâmina, corte, ferramenta, profissional"
  },
  {
    "codigo": 12,
    "nome": "Nível de Alumínio 40cm",
    "descritivo": "Nível de alumínio com três bolhas para nivelamento preciso em obras e instalações.",
    "valor": 54.90,
    "valorPromo": 47.90,
    "quantidade": 14,
    "destaque": 1,
    "keywords": "nível, alumínio, construção, medição, instalação"
  },
  {
    "codigo": 13,
    "nome": "Serrote para Madeira 20 Polegadas",
    "descritivo": "Serrote com lâmina de aço temperado, indicado para cortes em madeira.",
    "valor": 45.90,
    "valorPromo": 39.90,
    "quantidade": 20,
    "destaque": 0,
    "keywords": "serrote, madeira, corte, ferramenta, marcenaria"
  },
  {
    "codigo": 14,
    "nome": "Chave Inglesa 10 Polegadas",
    "descritivo": "Chave ajustável em aço cromado para aperto e desaperto de porcas e parafusos.",
    "valor": 38.90,
    "valorPromo": 32.90,
    "quantidade": 27,
    "destaque": 1,
    "keywords": "chave inglesa, ajustável, ferramenta, porca, parafuso"
  },
  {
    "codigo": 15,
    "nome": "Óculos de Proteção Transparente",
    "descritivo": "Óculos de segurança com lentes transparentes e proteção contra impactos.",
    "valor": 14.90,
    "valorPromo": 11.90,
    "quantidade": 75,
    "destaque": 0,
    "keywords": "óculos, proteção, segurança, epi, construção"
  },
  {
    "codigo": 16,
    "nome": "Luva de Proteção em Raspa",
    "descritivo": "Luva resistente para proteção das mãos durante trabalhos de construção e manutenção.",
    "valor": 22.90,
    "valorPromo": 18.90,
    "quantidade": 50,
    "destaque": 0,
    "keywords": "luva, proteção, segurança, epi, construção"
  },
  {
    "codigo": 17,
    "nome": "Extensão Elétrica 10 Metros",
    "descritivo": "Extensão elétrica com cabo flexível de 10 metros e plugue reforçado.",
    "valor": 69.90,
    "valorPromo": 59.90,
    "quantidade": 24,
    "destaque": 1,
    "keywords": "extensão, elétrica, cabo, tomada, energia"
  },
  {
    "codigo": 18,
    "nome": "Silicone Acético Transparente",
    "descritivo": "Selante de silicone transparente para vedação de superfícies e instalações.",
    "valor": 19.90,
    "valorPromo": 16.90,
    "quantidade": 45,
    "destaque": 0,
    "keywords": "silicone, selante, vedação, transparente, construção"
  },
  {
    "codigo": 19,
    "nome": "Fita Veda Rosca 18mm",
    "descritivo": "Fita de PTFE para vedação de conexões hidráulicas e tubulações.",
    "valor": 6.90,
    "valorPromo": 5.50,
    "quantidade": 100,
    "destaque": 1,
    "keywords": "fita veda rosca, ptfe, hidráulica, vedação, encanamento"
  },
  {
    "codigo": 20,
    "nome": "Caixa de Ferramentas 16 Polegadas",
    "descritivo": "Caixa organizadora em plástico resistente com bandeja interna e compartimentos.",
    "valor": 89.90,
    "valorPromo": 79.90,
    "quantidade": 12,
    "destaque": 1,
    "keywords": "caixa de ferramentas, organização, ferramentas, plástico, manutenção"
  }
];

verDetalhe(obj:Produto){
  localStorage.setItem("produto", JSON.stringify(obj));
  location.href="./detalhe";
}


  comprar(p:Produto){
      let json = localStorage.getItem("cesta");
      const c = new Cesta(json);            
      c.adicionarItem(p);     
      localStorage.setItem("cesta", JSON.stringify(c));
      this.mensagem = "item Adicionado a cesta de compras";
  }


}
