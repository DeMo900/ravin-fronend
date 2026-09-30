import type { RefObject } from 'react';

export type SectionRefs = {
  introRef: RefObject<HTMLDivElement | null>;
  workRef: RefObject<HTMLDivElement | null>;
  contactRef: RefObject<HTMLDivElement | null>;
}

export interface ImageType {
  imageUrl: string;
  imageFolderName: string;
  imageCreatedYear: string;
}
export interface FolderType {
  id?: number;
  name: string;
  genre_id?: number;
  genreid?: number;
  created_at?: string;
}

export interface GenreType {
  id?: number;
  name: string;
  folders: FolderType[];
  created_at?: string;
}

export interface BackendImage {
  id: number;
  url: string;
  folder_id: number;
  created_at?: string;
}
