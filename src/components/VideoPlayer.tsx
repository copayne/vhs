import { useSelectedVideo } from "../stores/SelectedVideo";
import ReactPlayer from "react-player";
import { ColorStripeRainbow } from '~/components/common/ColorStripe';
import VideoDetails from '../components/VideoDetails';
import { type Actor } from "~/pages/index";

const CLOUDFRONT_ADDRESS = 'https://dx19ntdwg65hl.cloudfront.net';

const buildSrc = (fileName : string) => `${CLOUDFRONT_ADDRESS}/exports/${fileName}.mp4`;

const VideoPlayer = () => {
  const selectedVideo  = useSelectedVideo(state => state.selectedVideo);

  return (
    <section className="h-full w-full">
      {
        selectedVideo && (
          <ReactPlayer
            config={{
              file: {
                attributes: {
                  playsInline: true,
                },
              },
            }}
            controls
            height="100%"
            url={buildSrc(selectedVideo.src)}
            width="100%"
          />
        )
      }
      <ColorStripeRainbow />
      {
        selectedVideo && (
          <VideoDetails
            category={selectedVideo.category.name}
            filmedBy={selectedVideo.filmed.map((actor: Actor) => actor.name)}
            title={selectedVideo.name}
          />
        )
      }
    </section>
  )
}

export default VideoPlayer;
