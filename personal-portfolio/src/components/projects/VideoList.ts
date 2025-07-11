// components/VideoList.ts

export interface VideoItem {

  file: string;
  siteUrl: string;
  githubUrl: string;
}

export const videoList: VideoItem[] = [
  {
    file: 'project1.mp4',
    siteUrl: 'https://meusite.com/project1',
    githubUrl: 'https://github.com/usuario/project1',
  },
  {
    file: 'project2.mp4',
    siteUrl: 'https://meusite.com/project2',
    githubUrl: 'https://github.com/usuario/project2',
  },
  {
    file: 'project3.mp4',
    siteUrl: 'https://meusite.com/project3',
    githubUrl: 'https://github.com/usuario/project3',
  },
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
];
