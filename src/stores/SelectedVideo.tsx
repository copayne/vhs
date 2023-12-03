import { create } from 'zustand';
import { type Video } from '~/pages/index';

interface SelectedVideo {
    selectedVideo: Video | null,
    update: (newValue : Video) => void
}

export const useSelectedVideo = create<SelectedVideo>()(( set ) => ({
    selectedVideo: null,
    update: (newValue : Video) => set({ selectedVideo: newValue }),
}));