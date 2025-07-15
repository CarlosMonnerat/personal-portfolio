// components/VideoList.ts

export interface VideoItem {

  file: string;
  siteUrl: string;
  githubUrl: string;
}

export const videoList: VideoItem[] = [
  {
    file: 'crud.mp4',
    siteUrl: 'https://carlosmonnerat.github.io/CRUD_Cadastro_de_Clientes/',
    githubUrl: 'https://github.com/CarlosMonnerat/CRUD_Cadastro_de_Clientes',
  },
  {
    file: 'cep.mp4',
    siteUrl: 'https://carlosmonnerat.github.io/API_Consulta_de_CEP/',
    githubUrl: 'https://github.com/CarlosMonnerat/API_Consulta_de_CEP',
  },
  {
    file: 'pixabay.mp4',
    siteUrl: 'https://carlosmonnerat.github.io/API_Pixabay/',
    githubUrl: 'https://github.com/CarlosMonnerat/API_Pixabay',
  },
  {
    file: 'pong.mp4',
    siteUrl: 'https://carlosmonnerat.github.io/Pong_Game_Canvas/',
    githubUrl: 'https://github.com/CarlosMonnerat/Pong_Game_Canvas',
  },
  {
    file: 'forca.mp4',
    siteUrl: 'https://carlosmonnerat.github.io/Hangman_Game/',
    githubUrl: 'https://github.com/CarlosMonnerat/Hangman_Game',
  },
];
