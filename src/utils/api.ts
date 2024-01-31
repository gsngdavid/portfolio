// ================== Projects ==================

export interface ProjectProperties {
  id: number;
  name: string;
  imageUrl: string;
  languages: string[];
  description: string;
  liveLink: string;
  cachedLink: string;
}

export interface ProjectDto extends ProjectProperties {}
