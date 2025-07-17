// components/VideoList.ts

export interface VideoItem {

  file: string;
  siteUrl: string;
  githubUrl: string;
  description: string;
}

export const videoList: VideoItem[] = [
  {
    file: 'crud.mp4',
    siteUrl: 'https://carlosmonnerat.github.io/CRUD_Cadastro_de_Clientes/',
    githubUrl: 'https://github.com/CarlosMonnerat/CRUD_Cadastro_de_Clientes',
    description: 'Este projeto é uma aplicação web de CRUD (Create, Read, Update, Delete) para cadastro de clientes. Permite adicionar, visualizar, editar e remover clientes, com dados armazenados no LocalStorage do navegador.'
  },
  {
    file: 'cep.mp4',
    siteUrl: 'https://carlosmonnerat.github.io/API_Consulta_de_CEP/',
    githubUrl: 'https://github.com/CarlosMonnerat/API_Consulta_de_CEP',
    description: 'Formulário web que preenche automaticamente os campos de endereço (rua, bairro, cidade, estado) assim que o usuário digita o CEP. Desenvolvido com HTML, CSS e JavaScript, utiliza a API ViaCEP para buscar os dados em tempo real.'
  },
  {
    file: 'pixabay.mp4',
    siteUrl: 'https://carlosmonnerat.github.io/API_Pixabay/',
    githubUrl: 'https://github.com/CarlosMonnerat/API_Pixabay',
    description: 'Este projeto é uma aplicação web que consome a API da Pixabay para buscar e exibir imagens com base na pesquisa do usuário. Para cada imagem, são exibidas as tags principais, curtidas, comentários e um marcador de favoritos visual. Também conta com paginação, permitindo navegar entre as páginas de forma interativa.'
  },
  {
    file: 'pong.mp4',
    siteUrl: 'https://carlosmonnerat.github.io/Pong_Game_Canvas/',
    githubUrl: 'https://github.com/CarlosMonnerat/Pong_Game_Canvas',
    description: 'Projeto de um jogo web interativo desenvolvido com JavaScript puro (Vanilla JS) e a API Canvas, focado em lógica de programação, animações e manipulação de gráficos 2D diretamente no navegador.'
  },
  {
    file: 'forca.mp4',
    siteUrl: 'https://carlosmonnerat.github.io/Hangman_Game/',
    githubUrl: 'https://github.com/CarlosMonnerat/Hangman_Game',
    description: 'Jogo clássico da forca onde o jogador deve adivinhar a palavra secreta digitando letras, com direito a até 7 erros. As imagens da forca são exibidas progressivamente a cada erro.'
  },
];
