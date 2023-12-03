import { useSelectedVideo } from "../stores/SelectedVideo";
import CastList from './common/CastList';
import ColorStripe from './common/ColorStripe';
import { type Actor } from "~/pages/index";

const Featuring = () => {
  const selectedVideo  = useSelectedVideo(state => state.selectedVideo);
  
    return selectedVideo && (
    <>
      <div className="w-full">
        <ColorStripe text="Featuring" color="purple" />
      </div>
      <CastList cast={selectedVideo.featured.map((actor: Actor) => actor.name)} />
    </>
  )
}

export default Featuring;