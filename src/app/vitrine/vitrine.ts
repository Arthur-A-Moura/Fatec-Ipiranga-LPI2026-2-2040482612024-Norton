import { Component } from '@angular/core';
import { Produto } from '../model/produto';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-vitrine',
  styleUrl: './vitrine.css',
  templateUrl: './vitrine.html',
})
export class Vitrine {
  lista: Produto[] = [
  {
    "codigo": 1,
    "nome": "Martelo Unha 27mm",
    "descritivo": "Martelo com cabo de madeira e cabeça em aço forjado, ideal para trabalhos gerais.",
    "valor": 49.90,
    "valorPromo": 39.90,
    "quantidade": 25,
    "destaque": 1
  },
  {
    "codigo": 2,
    "nome": "Chave de Fenda 6mm",
    "descritivo": "Chave de fenda com haste em aço temperado e cabo ergonômico.",
    "valor": 18.90,
    "valorPromo": 15.90,
    "quantidade": 40,
    "destaque": 0
  },
  {
    "codigo": 3,
    "nome": "Chave Phillips PH2",
    "descritivo": "Chave Phillips profissional para parafusos de diversos tamanhos.",
    "valor": 19.90,
    "valorPromo": 16.90,
    "quantidade": 35,
    "destaque": 0
  },
  {
    "codigo": 4,
    "nome": "Alicate Universal 8 Polegadas",
    "descritivo": "Alicate universal em aço carbono com cabo emborrachado antiderrapante.",
    "valor": 39.90,
    "valorPromo": 34.90,
    "quantidade": 30,
    "destaque": 1
  },
  {
    "codigo": 5,
    "nome": "Trena 5 Metros",
    "descritivo": "Trena com fita metálica de 5 metros, trava de segurança e revestimento emborrachado.",
    "valor": 29.90,
    "valorPromo": 24.90,
    "quantidade": 50,
    "destaque": 1
  },
  {
    "codigo": 6,
    "nome": "Furadeira de Impacto 650W",
    "descritivo": "Furadeira elétrica de impacto com potência de 650W e controle de velocidade.",
    "valor": 249.90,
    "valorPromo": 219.90,
    "quantidade": 12,
    "destaque": 1
  },
  {
    "codigo": 7,
    "nome": "Jogo de Brocas 10 Peças",
    "descritivo": "Kit com 10 brocas para metal, madeira e alvenaria em diferentes medidas.",
    "valor": 59.90,
    "valorPromo": 49.90,
    "quantidade": 20,
    "destaque": 0
  },
  {
    "codigo": 8,
    "nome": "Parafuso Sextavado 8x50mm",
    "descritivo": "Parafuso sextavado em aço para fixações em madeira e estruturas metálicas.",
    "valor": 1.90,
    "valorPromo": 1.50,
    "quantidade": 500,
    "destaque": 0
  },
  {
    "codigo": 9,
    "nome": "Caixa com Buchas 8mm",
    "descritivo": "Caixa com 100 buchas de nylon de 8mm para fixações em alvenaria.",
    "valor": 24.90,
    "valorPromo": 19.90,
    "quantidade": 80,
    "destaque": 1
  },
  {
    "codigo": 10,
    "nome": "Fita Isolante 20 Metros",
    "descritivo": "Fita isolante de PVC para instalações e reparos elétricos.",
    "valor": 12.90,
    "valorPromo": 9.90,
    "quantidade": 100,
    "destaque": 0
  },
  {
    "codigo": 11,
    "nome": "Estilete Profissional 18mm",
    "descritivo": "Estilete reforçado com lâmina de 18mm e sistema de trava de segurança.",
    "valor": 22.90,
    "valorPromo": 18.90,
    "quantidade": 45,
    "destaque": 0
  },
  {
    "codigo": 12,
    "nome": "Serrote para Madeira 20 Polegadas",
    "descritivo": "Serrote com lâmina de aço temperado e cabo ergonômico para cortes em madeira.",
    "valor": 44.90,
    "valorPromo": 39.90,
    "quantidade": 18,
    "destaque": 1
  },
  {
    "codigo": 13,
    "nome": "Nível de Alumínio 40cm",
    "descritivo": "Nível profissional de alumínio com bolhas de alta precisão.",
    "valor": 54.90,
    "valorPromo": 46.90,
    "quantidade": 22,
    "destaque": 0
  },
  {
    "codigo": 14,
    "nome": "Chave Inglesa 10 Polegadas",
    "descritivo": "Chave ajustável em aço resistente para manutenção e montagem.",
    "valor": 42.90,
    "valorPromo": 36.90,
    "quantidade": 27,
    "destaque": 1
  },
  {
    "codigo": 15,
    "nome": "Luva de Proteção Antiderrapante",
    "descritivo": "Luva para trabalhos gerais com revestimento antiderrapante e alta resistência.",
    "valor": 14.90,
    "valorPromo": 11.90,
    "quantidade": 75,
    "destaque": 0
  },
  {
    "codigo": 16,
    "nome": "Óculos de Proteção Transparente",
    "descritivo": "Óculos de segurança com lentes transparentes e proteção contra partículas.",
    "valor": 17.90,
    "valorPromo": 14.90,
    "quantidade": 60,
    "destaque": 0
  },
  {
    "codigo": 17,
    "nome": "Serra Circular 1400W",
    "descritivo": "Serra circular elétrica de 1400W para cortes precisos em madeira.",
    "valor": 459.90,
    "valorPromo": 399.90,
    "quantidade": 8,
    "destaque": 1
  },
  {
    "codigo": 18,
    "nome": "Caixa de Ferramentas 19 Polegadas",
    "descritivo": "Caixa organizadora com bandeja interna e compartimentos para ferramentas.",
    "valor": 89.90,
    "valorPromo": 74.90,
    "quantidade": 15,
    "destaque": 1
  },
  {
    "codigo": 19,
    "nome": "Extensão Elétrica 10 Metros",
    "descritivo": "Extensão elétrica com cabo flexível de 10 metros e plugue reforçado.",
    "valor": 49.90,
    "valorPromo": 42.90,
    "quantidade": 32,
    "destaque": 0
  },
  {
    "codigo": 20,
    "nome": "Kit de Chaves Combinadas 12 Peças",
    "descritivo": "Jogo com 12 chaves combinadas em aço cromo vanádio, ideal para manutenção.",
    "valor": 119.90,
    "valorPromo": 99.90,
    "quantidade": 14,
    "destaque": 1
  }
];

}
