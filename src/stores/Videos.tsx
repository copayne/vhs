import { create } from 'zustand';
import { type Video } from '~/pages/index';

export const DEFAULT_CRITERIA = {
  featured: [],
  category: [],
  orderBy: {
    field: 'filmDate',
    sort: 'asc',
  },
};

export interface Criteria {
  featured: Array<string>
  category: Array<string>
  orderBy: {
    field: string,
    sort: string,
  },
}

interface Videos {
  criteria: Criteria,
  setCriteria: (criteria: Criteria) => void,
  setVideos: (videos: Video[]) => void,
  videos: Array<Video>,
}

export const useVideos = create<Videos>()(( set ) => ({
  criteria: DEFAULT_CRITERIA,
  setCriteria: (criteria) => set({ criteria }),
  setVideos: (videos) => set({ videos }),
  videos: [],
}));