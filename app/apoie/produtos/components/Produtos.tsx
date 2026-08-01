import CardProduto, { ProdutoProps } from './CardProduto';

const produtos: ProdutoProps[] = [
  {
    nome: 'Caneca pequena',
    descricao:
      'Caneca de metal ideal para bebidas quentes ou frias no dia a dia.',
    preco: 'R$ 50,00',
    imagens: [
      '/loja/produtos/Caneca-pequena-foto1.JPG',
      '/loja/produtos/Caneca-pequena-foto2.JPG',
    ],
  },
  {
    nome: 'Caneca grande',
    descricao:
      'Caneca de metal com maior capacidade para quem prefere porções maiores.',
    preco: 'R$ 70,00',
    imagens: [
      '/loja/produtos/Caneca-grande-foto1.JPG',
      '/loja/produtos/Caneca-grande-foto2.JPG',
    ],
  },
  {
    nome: 'Ecobag algodão',
    descricao:
      'Sacola reutilizável de algodão, resistente e prática para uso diário.',
    preco: 'R$ 70,00',
    imagens: [
      '/loja/produtos/Ecobag-algodao-foto1.JPG',
      '/loja/produtos/Ecobag-algodao-foto2.JPG',
      '/loja/produtos/Ecobag-algodao-foto3.JPG',
    ],
  },
  {
    nome: 'Ecobag dobrável Amarela - Modelo 1',
    descricao:
      'Sacola reutilizável que pode ser dobrada e carregada facilmente.',
    preco: 'R$ 50,00',
    imagens: ['/loja/produtos/Ecobag-dobravel-amarela-modelo1.png'],
  },
  {
    nome: 'Ecobag dobrável Amarela - Modelo 2',
    descricao:
      'Sacola reutilizável que pode ser dobrada e carregada facilmente.',
    preco: 'R$ 50,00',
    imagens: ['/loja/produtos/Ecobag-dobravel-amarela-modelo2.png'],
  },
  {
    nome: 'Ecobag dobrável Amarela - Modelo 3',
    descricao:
      'Sacola reutilizável que pode ser dobrada e carregada facilmente.',
    preco: 'R$ 50,00',
    imagens: ['/loja/produtos/Ecobag-dobravel-amarela-modelo3.png'],
  },
  {
    nome: 'Ecobag dobrável Preta - Modelo 1',
    descricao:
      'Sacola reutilizável que pode ser dobrada e carregada facilmente.',
    preco: 'R$ 50,00',
    imagens: ['/loja/produtos/Ecobag-dobravel-preta-modelo1.png'],
  },
  {
    nome: 'Ecobag dobrável Preta - Modelo 2',
    descricao:
      'Sacola reutilizável que pode ser dobrada e carregada facilmente.',
    preco: 'R$ 50,00',
    imagens: ['/loja/produtos/Ecobag-dobravel-preta-modelo2.png'],
  },
  {
    nome: 'Ecobag dobrável Preta - Modelo 3',
    descricao:
      'Sacola reutilizável que pode ser dobrada e carregada facilmente.',
    preco: 'R$ 50,00',
    imagens: ['/loja/produtos/Ecobag-dobravel-preta-modelo3.png'],
  },
  {
    nome: 'Pin Onça',
    descricao: 'Pin metálico colecionável para roupas, mochilas e bonés.',
    preco: 'R$ 10,00',
    imagens: [
      '/loja/produtos/pin-onca-modelo1-foto1.JPG',
      '/loja/produtos/pin-onca-modelo1-foto2.JPG',
    ],
  },
  {
    nome: 'Pin "Se tem onça tem vida"',
    descricao: 'Pin metálico colecionável com a nossa frase oficial.',
    preco: 'R$ 10,00',
    imagens: [
      '/loja/produtos/pin-se-tem-onca-foto1.JPG',
      '/loja/produtos/pin-se-tem-onca-foto2.JPG',
    ],
  },
  {
    nome: 'Pin patinha',
    descricao: 'Pin metálico em formato de pegada de onça.',
    preco: 'R$ 30,00',
    imagens: [
      '/loja/produtos/Pin-patinha-foto1.JPG',
      '/loja/produtos/Pin-patinha-foto2.JPG',
    ],
  },
  {
    nome: 'Camiseta amarela - Modelo 1',
    descricao: 'Camiseta com estampa exclusiva do Projeto Onças do Iguaçu.',
    preco: 'R$ 100,00',
    imagens: [
      '/loja/produtos/Camiseta-amarela-modelo1.png',
      '/loja/produtos/Camiseta-amarela-modelo1-foto2.png',
    ],
  },
  {
    nome: 'Camiseta amarela - Modelo 2',
    descricao: 'Camiseta com estampa exclusiva do Projeto Onças do Iguaçu.',
    preco: 'R$ 100,00',
    imagens: [
      '/loja/produtos/Camiseta-amarela-modelo2.png',
      '/loja/produtos/Camiseta-amarela-modelo2-foto2.png',
    ],
  },
  {
    nome: 'Camiseta branca',
    descricao: 'Camiseta com estampa exclusiva do Projeto Onças do Iguaçu.',
    preco: 'R$ 100,00',
    imagens: [
      '/loja/produtos/Camiseta-branca-modelo1.png',
      '/loja/produtos/Camiseta-branca-modelo1-foto2.png',
    ],
  },
  {
    nome: 'Camiseta preta',
    descricao: 'Camiseta com estampa exclusiva do Projeto Onças do Iguaçu.',
    preco: 'R$ 100,00',
    imagens: [
      '/loja/produtos/Camiseta-preta-modelo1.png',
      '/loja/produtos/Camiseta-preta-modelo1-foto2.png',
    ],
  },
  {
    nome: 'Botton',
    descricao:
      'Botton metálico para personalizar roupas, mochilas e acessórios.',
    preco: 'R$ 10,00',
    imagens: [
      '/loja/produtos/Botton-modelo1.JPG',
      '/loja/produtos/Botton-modelo1-foto2.JPG',
    ],
  },
  {
    nome: 'Oncinha chaveiro',
    descricao: 'Mini amigurumi artesanal de onça em formato de chaveiro.',
    preco: 'R$ 30,00',
    imagens: [
      '/loja/produtos/Oncinha-chaveiro-foto1.JPG',
      '/loja/produtos/Oncinha-chaveiro-foto2.JPG',
    ],
  },
  {
    nome: 'Pulseira - Modelo 1',
    descricao: 'Pulseira temática artesanal.',
    preco: 'R$ 20,00',
    imagens: [
      '/loja/produtos/Pulseira-modelo1.JPG',
      '/loja/produtos/Pulseira-modelo1-foto2.JPG',
    ],
  },
  {
    nome: 'Pulseira - Modelo 2',
    descricao: 'Pulseira temática artesanal.',
    preco: 'R$ 20,00',
    imagens: [
      '/loja/produtos/Pulseira-modelo2.JPG',
      '/loja/produtos/Pulseira-modelo2-foto2.JPG',
    ],
  },
  {
    nome: 'Pulseira - Modelo 3',
    descricao: 'Pulseira temática artesanal.',
    preco: 'R$ 20,00',
    imagens: [
      '/loja/produtos/Pulseira-modelo3.JPG',
      '/loja/produtos/Pulseira-modelo3-foto2.JPG',
    ],
  },
  {
    nome: 'Pulseira - Modelo 4',
    descricao: 'Pulseira temática artesanal.',
    preco: 'R$ 20,00',
    imagens: [
      '/loja/produtos/Pulseira-modelo4.JPG',
      '/loja/produtos/Pulseira-modelo4-foto2.JPG',
    ],
  },
  {
    nome: 'Pulseira - Modelo 5',
    descricao: 'Pulseira temática artesanal.',
    preco: 'R$ 20,00',
    imagens: [
      '/loja/produtos/Pulseira-modelo5.JPG',
      '/loja/produtos/Pulseira-modelo5-foto2.JPG',
    ],
  },
  {
    nome: 'Pulseira - Modelo 6',
    descricao: 'Pulseira temática artesanal.',
    preco: 'R$ 20,00',
    imagens: [
      '/loja/produtos/Pulseira-modelo6.JPG',
      '/loja/produtos/Pulseira-modelo6-foto2.JPG',
    ],
  },
  {
    nome: 'Pulseira - Modelo 7',
    descricao: 'Pulseira temática artesanal.',
    preco: 'R$ 20,00',
    imagens: [
      '/loja/produtos/Pulseira-modelo7.JPG',
      '/loja/produtos/Pulseira-modelo7-foto2.JPG',
    ],
  },
  {
    nome: 'Pulseira - Modelo 8',
    descricao: 'Pulseira temática artesanal.',
    preco: 'R$ 20,00',
    imagens: [
      '/loja/produtos/Pulseira-modelo8.JPG',
      '/loja/produtos/Pulseira-modelo8-foto2.JPG',
    ],
  },
  {
    nome: 'Pulseira - Modelo 9',
    descricao: 'Pulseira temática artesanal.',
    preco: 'R$ 20,00',
    imagens: [
      '/loja/produtos/Pulseira-modelo9.JPG',
      '/loja/produtos/Pulseira-modelo9-foto2.JPG',
    ],
  },
  {
    nome: 'Pulseira - Modelo 10',
    descricao: 'Pulseira temática artesanal.',
    preco: 'R$ 20,00',
    imagens: [
      '/loja/produtos/Pulseira-modelo10.JPG',
      '/loja/produtos/Pulseira-modelo10-foto2.JPG',
    ],
  },
  {
    nome: 'Pulseira - Modelo 11',
    descricao: 'Pulseira temática artesanal.',
    preco: 'R$ 20,00',
    imagens: [
      '/loja/produtos/Pulseira-modelo11.JPG',
      '/loja/produtos/Pulseira-modelo11-foto2.JPG',
    ],
  },
];

export default function Produtos() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-16">
      {produtos.map((produto) => (
        <CardProduto key={produto.nome} produto={produto} />
      ))}
    </div>
  );
}
