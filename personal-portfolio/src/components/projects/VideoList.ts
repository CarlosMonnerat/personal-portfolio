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
    description: 'Loren nahjfokrnjdnfni'
  },
  {
    file: 'cep.mp4',
    siteUrl: 'https://carlosmonnerat.github.io/API_Consulta_de_CEP/',
    githubUrl: 'https://github.com/CarlosMonnerat/API_Consulta_de_CEP',
    description: 'Loren nahjfokrnjdnfni'
  },
  {
    file: 'pixabay.mp4',
    siteUrl: 'https://carlosmonnerat.github.io/API_Pixabay/',
    githubUrl: 'https://github.com/CarlosMonnerat/API_Pixabay',
    description: 'Loren nahjfokrnjdnfni'
  },
  {
    file: 'pong.mp4',
    siteUrl: 'https://carlosmonnerat.github.io/Pong_Game_Canvas/',
    githubUrl: 'https://github.com/CarlosMonnerat/Pong_Game_Canvas',
    description: 'Loren nahjfokrnjdnfni'
  },
  {
    file: 'forca.mp4',
    siteUrl: 'https://carlosmonnerat.github.io/Hangman_Game/',
    githubUrl: 'https://github.com/CarlosMonnerat/Hangman_Game',
    description: 'Jogo clássico da forca desenvolvido com HTML5, CSS3 e JavaScript puro, sem bibliotecas externas. O jogador deve adivinhar a palavra secreta digitando letras, com direito a até 7 erros. As imagens da forca são exibidas progressivamente a cada erro. Palavras carregadas de um arquivo externo via módulo ES6.'
  },
];
