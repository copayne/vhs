import { useSelectedVideo } from "../stores/SelectedVideo";
import { type Actor } from "~/pages/index";

const VideoDetails = () => {
  const selectedVideo  = useSelectedVideo(state => state.selectedVideo);
  const dirs = selectedVideo?.filmed.map((actor: Actor) => actor.name).join(', ');

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
            <span className="mr-2">Tagged: <u>{selectedVideo?.category.name}</u></span>
            <span className="ml-2">12/25/92</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoDetails;
