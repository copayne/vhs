/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-floating-promises */
import {
  useEffect,
  useState,
} from 'react';
import Image from 'next/image';
import dayjs from 'dayjs';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useSelectedVideo } from "~/stores/SelectedVideo";
import { type Criteria, useVideos } from "~/stores/Videos";
import ColorStripe from './common/ColorStripe';
import FilteringBy from './common/FilteringBy';
import vhsLogo from '../../public/assets/VHS_C_Logo.png';
import type { Video } from '~/pages';
import type { Category } from '~/pages';

const fetcher = async (url: string): Promise<Video[]> => {
  const response = await fetch(url);
  return response.json();
};
  
interface Library {
  videos: Array<Video>
}

interface LibraryEntry {
  video: Video
  selectVideo: (video: Video) => void
}

const LibraryEntry = ({ selectVideo, video }: LibraryEntry) => (
  <div
    key={video.id}
    className="p-2 pb-1 flex border-b-default-black border-dotted border-b-2 bg-white even:bg-gray-300"
  >
    <div className="w-4/5">
      <button onClick={() => selectVideo(video)}>
        {video.name}
      </button>
    </div>
    <div className="w-1/5">
      <span>
        {video.filmDate
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
          ? dayjs(video.filmDate).format("MM/DD/YYYY")
          : ''
        }
      </span>
    </div>
  </div>
);

interface Library {
  categories: Array<Category>
}

const Library = ({ categories }: Library) => {
  const [expanded, setExpanded] = useState(false);
  const [showExpand, setShowExpand] = useState(true);
  const [loading, setLoading] = useState(false);
  const update = useSelectedVideo(state => state.update);
  const criteria = useVideos(state => state.criteria);
  const setCriteria = useVideos(state => state.setCriteria);
  const setVideos = useVideos(state => state.setVideos);
  const videos = useVideos(state => state.videos);

  const fetchVideos = async (newCriteria: Criteria = criteria) => {
    try {
      setLoading(true);

      const newVideos = await fetcher(`/api/videos?criteria=${JSON.stringify(newCriteria)}`);
  
      setVideos(newVideos);
      setCriteria(newCriteria);
      setShowExpand(!!newVideos && newVideos?.length > 20);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }

    setLoading(false);
  };

  const sortVideos = (field = 'filmDate') => {
    const sort = field === criteria.orderBy.field
      ? (criteria.orderBy.sort === 'asc' ? 'desc' : 'asc')
      : 'asc';
    const newCriteria = {
      ...criteria,
      orderBy: {
        field,
        sort,
      },
    };

    setCriteria(newCriteria);
  }

  useEffect(() => {
    fetchVideos();
    // eslint-disable-next-line
  }, [
    criteria.category,
    criteria.featured.length,
    criteria.orderBy.field,
    criteria.orderBy.sort,
  ]);

  const selectVideo = (video: Video) => {
    update(video);

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const getSortIcon = (field: string) => {
    let sortIcon = null;

    if (field === criteria.orderBy.field) {
      sortIcon = criteria.orderBy.sort === 'asc'
        ? <ArrowUpwardIcon />
        : <ArrowDownwardIcon />
    }
    return sortIcon;
  }

  return (
    <>
      <div className="w-full">
        <ColorStripe text="Library" color="pink" />
      </div>
      <div className="m-1 sm:m-0 p-1 w-[98%] sm:w-full flex flex-wrap flex-col">
        <div className="w-full p-1">
          <FilteringBy categories={categories} />
        </div>
        <div className="w-full bg-white rounded-md text-sm drop-shadow-sticker">
          <div className="w-full h-[6px] bg-black" />
          <div className="m-2 mb-1 flex font-semibold border-b-default-black border-dotted border-b-2 text-default-black">
            <div className="w-4/5">
              <Button
                className="justify-start h-6"
                color="inherit"
                endIcon={getSortIcon('name')}
                onClick={() => sortVideos('name')}
                size="small"
              >
                <span className="text-xs">Title</span>
              </Button>
            </div>
            <div className="w-1/5">
              <Button
                className="justify-start h-6"
                color="inherit"
                endIcon={getSortIcon('filmDate')}
                onClick={() => sortVideos('filmDate')}
                size="small"
              >
                <span className="text-xs">Date</span>
              </Button>
            </div>
          </div>
          {
            loading ? (
              <div>
                <LinearProgress color="inherit" />
              </div>
            ) : <div className="w-full h-1" />
          }
          { !!videos && videos.slice(0, 19).map(video => <LibraryEntry key={video.id} selectVideo={selectVideo} video={video} />) }
          {
            showExpand && (
              <Collapse in={expanded}>
                { !!videos && videos.slice(19).map(video => <LibraryEntry key={video.id} selectVideo={selectVideo} video={video} />) }
              </Collapse>
            )
          }
          {
            showExpand && (
              <div className="flex w-full justify-center">
                <Button
                  className="lowercase"
                  color="inherit"
                  onClick={() => setExpanded(prev => !prev)}
                  startIcon={expanded
                    ? <ExpandLessIcon />
                    : <ExpandMoreIcon />
                  }
                >
                  { expanded ? 'Collapse' : 'Expand' }
                </Button>
              </div>
            )
          }
          <div>
            <div className="m-2 mt-4 flex flex-nowrap">
              <div className="flex ml-0 mr-2">
                <div className="border-black border-solid border-2 w-5 h-5 mr-2" />
                <div className="font-semibold ">SP</div>
              </div>
              <div className="flex ml-2 mr-2">
                <div className="border-black border-solid border-2 w-5 h-5 mr-2" />
                <div className="font-semibold ">EP</div>
              </div>
              <div className="flex ml-2 mr-2">
                <div className="border-black border-solid border-2 w-5 h-5 mr-2" />
                <div className="font-semibold ">CAMERA</div>
              </div>
              <div className="ml-auto">
                <Image
                  alt="VHS-C logo"
                  src={vhsLogo}
                  height="60"
                  width="60"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Library;
