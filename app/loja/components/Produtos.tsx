import CardProduto, { ProdutoProps } from './CardProduto';

const produtos: ProdutoProps[] = [
  {
    nome: 'Caneca pequena',
    descricao:
      'Caneca de metal ideal para bebidas quentes ou frias no dia a dia.',
    preco: 'R$ 50,00',
    imagemUrl: '/logo-laranja.png',
  },
  {
    nome: 'Caneca grande',
    descricao:
      'Caneca de metal com maior capacidade para quem prefere porções maiores.',
    preco: 'R$ 70,00',
    imagemUrl: '/logo-laranja.png',
  },
  {
    nome: 'Ecobag algodão',
    descricao:
      'Sacola reutilizável de algodão, resistente e prática para uso diário.',
    preco: 'R$ 70,00',
    imagemUrl: '/logo-laranja.png',
  },
  {
    nome: 'Ecobag dobrável',
    descricao:
      'Sacola reutilizável que pode ser dobrada e carregada facilmente.',
    preco: 'R$ 50,00',
    imagemUrl: '/logo-laranja.png',
  },
  {
    nome: 'Botton',
    descricao:
      'Botton metálico para personalizar roupas, mochilas e acessórios.',
    preco: 'R$ 10,00',
    imagemUrl: '/logo-laranja.png',
  },
  {
    nome: 'Pin',
    descricao: 'Pin metálico colecionável para roupas, mochilas e bonés.',
    preco: 'R$ 10,00',
    imagemUrl: '/logo-laranja.png',
  },
  {
    nome: 'Pin patinha',
    descricao: 'Pin metálico em formato de pegada de onça.',
    preco: 'R$ 30,00',
    imagemUrl: '/logo-laranja.png',
  },
  {
    nome: 'Pulseira',
    descricao:
      'Pulseira temática para demonstrar apoio à conservação das onças.',
    preco: 'R$ 20,00',
    imagemUrl: '/logo-laranja.png',
  },
  {
    nome: 'Anel',
    descricao: 'Anel com design inspirado na conservação da fauna.',
    preco: 'R$ 20,00',
    imagemUrl: '/logo-laranja.png',
  },
  {
    nome: 'Adesivo alto relevo',
    descricao:
      'Adesivo com acabamento em alto relevo para personalizar objetos.',
    preco: 'R$ 15,00',
    imagemUrl: '/logo-laranja.png',
  },
  {
    nome: 'Camiseta adulto',
    descricao: 'Camiseta com estampa exclusiva do Projeto Onças do Iguaçu.',
    preco: 'R$ 100,00',
    imagemUrl: '/logo-laranja.png',
  },
  {
    nome: 'Camiseta infantil',
    descricao:
      'Camiseta infantil com estampa exclusiva inspirada na fauna brasileira.',
    preco: 'R$ 70,00',
    imagemUrl: '/logo-laranja.png',
  },
  {
    nome: 'Oncinha chaveiro',
    descricao: 'Mini amigurumi artesanal de onça em formato de chaveiro.',
    preco: 'R$ 30,00',
    imagemUrl: '/logo-laranja.png',
  },
  {
    nome: 'Oncinha pequena',
    descricao: 'Amigurumi artesanal de onça em tamanho pequeno.',
    preco: 'R$ 60,00',
    imagemUrl: '/logo-laranja.png',
  },
  {
    nome: 'Oncinha média',
    descricao: 'Amigurumi artesanal de onça em tamanho médio.',
    preco: 'R$ 100,00',
    imagemUrl: '/logo-laranja.png',
  },
  {
    nome: 'Oncinha grande',
    descricao: 'Amigurumi artesanal de onça em tamanho grande.',
    preco: 'R$ 140,00',
    imagemUrl: '/logo-laranja.png',
  },
  {
    nome: 'Tamanduá-bandeira',
    descricao: 'Amigurumi artesanal representando um tamanduá-bandeira.',
    preco: 'R$ 110,00',
    imagemUrl: '/logo-laranja.png',
  },
  {
    nome: 'Tamanduá-mirim',
    descricao: 'Amigurumi artesanal representando um tamanduá-mirim.',
    preco: 'R$ 110,00',
    imagemUrl: '/logo-laranja.png',
  },
  {
    nome: 'Quati pequeno',
    descricao: 'Amigurumi artesanal de quati em tamanho pequeno.',
    preco: 'R$ 60,00',
    imagemUrl: '/logo-laranja.png',
  },
  {
    nome: 'Quati médio',
    descricao: 'Amigurumi artesanal de quati em tamanho médio.',
    preco: 'R$ 100,00',
    imagemUrl: '/logo-laranja.png',
  },
  {
    nome: 'Graxaim',
    descricao: 'Amigurumi artesanal representando um graxaim.',
    preco: 'R$ 90,00',
    imagemUrl: '/logo-laranja.png',
  },
  {
    nome: 'Capivara',
    descricao: 'Amigurumi artesanal representando uma capivara.',
    preco: 'R$ 110,00',
    imagemUrl: '/logo-laranja.png',
  },
  {
    nome: 'Tatu',
    descricao: 'Amigurumi artesanal representando um tatu.',
    preco: 'R$ 90,00',
    imagemUrl: '/logo-laranja.png',
  },
  {
    nome: 'Macaco',
    descricao: 'Amigurumi artesanal representando um macaco.',
    preco: 'R$ 110,00',
    imagemUrl: '/logo-laranja.png',
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
