// ================== Projects ==================

export interface BigProjectDto {
  id: string;
  name: string;
  liveLink: string;
  imageUrl: string;
  cachedLink: string;
  description: string;
  technologies: string[];
}

export interface SmallProjectDto {
  id: string,
  name: string;
  githubLink: string;
  description: string;
  technologies: string[];
}
