// components/VideoList2.ts

export interface VideoItem {
  file: string;
  siteUrl: string;
  githubUrl: string;
}

export const videoList2: VideoItem[] = [
  {
    file: 'galaxy.mp4',
    siteUrl: 'https://meusite.com/project1',
    githubUrl: 'https://github.com/usuario/project1',
  },
  {
    file: 'blackhole.mp4',
    siteUrl: 'https://meusite.com/project2',
    githubUrl: 'https://github.com/usuario/project2',
  },
  {
    file: 'project2.mp4',
    siteUrl: 'https://meusite.com/project3',
    githubUrl: 'https://github.com/usuario/project3',
  },
];