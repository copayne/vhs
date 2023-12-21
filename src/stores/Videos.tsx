import { create } from 'zustand';
import { type Video } from '~/pages/index';

export const DEFAULT_CRITERIA = {
  featured: [],
  category: null,
  orderBy: {
    field: 'filmDate',
    sort: 'asc',
  },
};

export interface Criteria {
  featured: Array<string>
  category: number | null
  orderBy: {
    field: string,
    sort: string,
  },
}

interface Url {
  [id: number]: string
}

interface Videos {
  criteria: Criteria,
  setCriteria: (criteria: Criteria) => void,
  setFeatured: (featured: Array<string>) => void,
  setVideos: (videos: Video[]) => void,
  setUrls: (urls: Url) => void,
  videos: Array<Video>,
  urls: Url,
}

export const useVideos = create<Videos>()(( set ) => ({
  criteria: DEFAULT_CRITERIA,
  setCriteria: (criteria) => set({ criteria }),
  setFeatured: (featured: Array<string>) => set((state) => ({
    criteria: { ...state.criteria, featured },
  })),
  setVideos: (videos) => set({ videos }),
  setUrls: (urls: Url) => set({ urls }),
  videos: [],
  urls: {},
}));