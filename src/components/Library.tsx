import { useState } from 'react';
import Image from 'next/image';
import dayjs from 'dayjs';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useSelectedVideo } from "~/stores/SelectedVideo";
import ColorStripe from './common/ColorStripe';
import vhsLogo from '../../public/assets/VHS_C_Logo.png';
import type { Video } from '~/pages';
  
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
)

const Library = ({ videos }: Library) => {
  const [expanded, setExpanded] = useState(false);
  const update = useSelectedVideo(state => state.update);
  const showExpand = videos.length > 20;

  const selectVideo = (video: Video) => {
    update(video);

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      <div className="w-full">
        <ColorStripe text="Library" color="pink" />
      </div>
      <div className="m-1 sm:m-0 p-1 w-[98%] sm:w-full flex flex-wrap flex-col">
        <div className="w-full bg-white rounded-md text-sm drop-shadow-sticker">
          <div className="w-full h-[6px] bg-black" />
          <div className="m-2 mb-1 flex text-xs font-semibold border-b-default-black border-dotted border-b-2 text-default-black">
            <div className="w-4/5">
              TITLE
            </div>
            <div className="w-1/5">
              DATE
            </div>
          </div>
          { videos.slice(0, 19).map(video => <LibraryEntry key={video.id} selectVideo={selectVideo} video={video} />) }
          {
            showExpand && (
              <Collapse in={expanded}>
                { videos.slice(19).map(video => <LibraryEntry key={video.id} selectVideo={selectVideo} video={video} />) }
              </Collapse>
            )
          }
          {
            showExpand && (
              <div className="flex w-full justify-center">
                <Button
                  className="capitalize"
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
