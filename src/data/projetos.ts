export type Projeto = {
  id: string;
  nome: string;
  img: string;
  w: number;
  h: number;
  alt: string;
  texto: string;
  url: string;
};

export const PROJETOS_IMG = "assets/img/work/";

export const PROJETOS: Projeto[] = [
  {
    "id": "assai",
    "nome": "Assaí Atacadista",
    "img": "assai.png",
    "w": 980,
    "h": 4291,
    "alt": "Página inicial do site do Assaí Atacadista",
    "texto": "Site oficial do Assaí Atacadista, uma das maiores redes de atacarejo do Brasil. Publica diariamente o catálogo de ofertas, notícias e conteúdos, e encontra a loja mais próxima do visitante por geolocalização.",
    "url": "https://www.assai.com.br/"
  },
  {
    "id": "retail-media",
    "nome": "Portal Retail Media Assaí",
    "img": "retail-media.png",
    "w": 980,
    "h": 2476,
    "alt": "Portal Retail Media do Assaí",
    "texto": "Portal para comercializar espaços publicitários dentro das lojas do Assaí Atacadista.",
    "url": "https://megamidiagroup.com.br/retailmedia10/"
  },
  {
    "id": "churrasco",
    "nome": "Churrasco Assaí",
    "img": "churrasco.png",
    "w": 980,
    "h": 2819,
    "alt": "Site Churrasco Assaí",
    "texto": "Site da ação promocional do setor de carnes do Assaí, feito em WordPress, com blog de receitas e dicas e o Churrascômetro: um app em Vue.js que calcula quanto de carne, bebida e outros itens comprar para o churrasco.",
    "url": "https://www.assai.com.br/churrascoassai/"
  },
  {
    "id": "fort",
    "nome": "Fort Atacadista",
    "img": "fort-thumb_v2.webp",
    "w": 900,
    "h": 639,
    "alt": "Site do Fort Atacadista",
    "texto": "Site da ação promocional Amigo Todo Dia, do Fort Atacadista, com área exclusiva para clientes, formulário integrado ao CRM do Fort e notícias voltadas a diferentes ramos do comércio.",
    "url": "https://www.amigotododia.com.br/"
  },
  {
    "id": "psicodelia",
    "nome": "Psicodelia",
    "img": "psicodelia-thumb2_v2.webp",
    "w": 900,
    "h": 639,
    "alt": "Site Psicodelia",
    "texto": "Site de notícias sobre música eletrônica com loja de camisetas, canecas e acessórios. Criei a identidade visual e o layout e desenvolvi o site em WordPress e WooCommerce.",
    "url": "https://psicodelia.org/"
  },
  {
    "id": "task-list",
    "nome": "Task List",
    "img": "task-thumb2_v2.webp",
    "w": 900,
    "h": 639,
    "alt": "Landing page do aplicativo Task List",
    "texto": "Landing page de lançamento do Task List, um app para gerenciar tarefas e equipes de reposição de produtos em supermercados. Além de programar a página, criei a identidade visual e o layout.",
    "url": "https://ecwd.cloud/task/"
  },
  {
    "id": "truss",
    "nome": "Truss Professional",
    "img": "truss.webp",
    "w": 450,
    "h": 270,
    "alt": "Site da Truss Professional",
    "texto": "Portal para franqueados do grupo Boticário confirmarem o recebimento de materiais da marca. Ao escanear o QR code da embalagem, o franqueado confirma a chegada do material e vê os detalhes da ação promocional.",
    "url": "https://meupdv.ticcolor.com.br/app/"
  },
  {
    "id": "dh-law",
    "nome": "DH Law",
    "img": "dhlaw-thumb_v2.webp",
    "w": 900,
    "h": 639,
    "alt": "Site do escritório DH Law",
    "texto": "Site do escritório de advocacia DH Law, feito em WordPress, em português e inglês, com área exclusiva para clientes, equipe, áreas de atuação, contato e um blog de artigos sobre direito.",
    "url": "https://dhlaw.com.br/"
  },
  {
    "id": "fora-dos-autos",
    "nome": "Fora dos Autos",
    "img": "fora-thumb_v2.webp",
    "w": 900,
    "h": 639,
    "alt": "Site Fora dos Autos",
    "texto": "Landing page de divulgação do programa Fora dos Autos, da Gazeta do Povo, com captação de leads integrada ao CRM do jornal.",
    "url": "https://especiais.gazetadopovo.com.br/lp/fora-dos-autos/"
  },
  {
    "id": "pura-web",
    "nome": "Pura Web",
    "img": "pura-thumb_v2.webp",
    "w": 900,
    "h": 639,
    "alt": "Site Pura Web",
    "texto": "Landing page da agência de marketing digital Pura Web, com foco no serviço de sites rápidos e de baixo custo. Criei a identidade visual e o layout e desenvolvi o site em Next.js.",
    "url": "https://puraweb.com.br/"
  },
  {
    "id": "detail",
    "nome": "Detail · Casa das Capotas",
    "img": "detail-thumb_v2.webp",
    "w": 500,
    "h": 355,
    "alt": "Site Detail, da Casa das Capotas",
    "texto": "Site institucional da empresa de estética automotiva Detail · Casa das Capotas, feito em Next.js integrado ao WordPress, com todos os serviços e as especificações dos produtos que a empresa vende.",
    "url": "https://eliel.dev/detail/"
  }
];
