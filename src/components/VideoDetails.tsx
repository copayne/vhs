import dayjs from 'dayjs';
import { useSelectedVideo } from "../stores/SelectedVideo";
import { type Actor, type Category } from "~/pages/index";
import { useVideos } from '~/stores/Videos';

interface VideoDetails {
  categories: Array<Category>
}

const VideoDetails = ({ categories }: VideoDetails) => {
  const criteria = useVideos(state => state.criteria);
  const selectedVideo  = useSelectedVideo(state => state.selectedVideo);
  const setCriteria = useVideos(state => state.setCriteria);
  const dirs = selectedVideo?.filmed.map((actor: Actor) => actor.name).join(', ');

  const handleClick = (name: string) => {
    const cat = categories.find((c: Category) => c.name === name);

    if (cat) {
      const newCriteria = {
        ...criteria,
        category: cat.id,
      }

      setCriteria(newCriteria);
    }
  }

  return selectedVideo && (
    <div className="p-2 pl-1 flex w-full text-light-primary">
      <div className="w-full bg-white rounded-b-md drop-shadow-sticker">
        <div className="w-full h-[6px] bg-black" />
        <div className="min-w-fit text-2xl font-semibold text-right pr-2 border-b-default-black border-dotted border-b-2 drop-shadow-md">
          {selectedVideo?.name}
        </div>
        <div className="flex text-xs italic font-light justif p-1 pr-2 justify-between">
          <span title={dirs} className="ml-1 overflow-hidden text-ellipsis whitespace-nowrap">Filmed By: {dirs}</span>
          <div>
            <span className="mr-2">Tagged:
              <span
                className="cursor-pointer"
                onClick={() => handleClick(selectedVideo?.category.name)}
              >
                <u>{selectedVideo?.category.name}</u>
              </span>
            </span>
            <span className="ml-2">
              {
                selectedVideo?.filmDate
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
                  ? dayjs(selectedVideo.filmDate).add(12, 'hour' ).format("MM/DD/YYYY")
                  : ''
              }
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoDetails;