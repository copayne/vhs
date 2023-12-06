import { useSelectedVideo } from "../stores/SelectedVideo";
import ReactPlayer from "react-player";
import { ColorStripeRainbow } from '~/components/common/ColorStripe';

const CLOUDFRONT_ADDRESS = 'https://dx19ntdwg65hl.cloudfront.net';

const buildSrc = (fileName : string) => `${CLOUDFRONT_ADDRESS}/exports/${fileName}.mp4`;

const VideoPlayer = () => {
  const selectedVideo  = useSelectedVideo(state => state.selectedVideo);

  return (
    <section className="h-full w-full">
      {
        selectedVideo ? (
          <div className="flex h-[50vh] lg:h-[66vh] w-full">
            <div className="w-0 h-0 lg:h-full lg:w-1/4 bg-gradient-to-r from-default-black to-black" />
            <div className="w-full lg:w-1/2 h-full bg-black">
              <ReactPlayer
                playsinline
                // config={{
                //   file: {
                //     attributes: {
                //       playsInline: true,
                //     },
                //   },
                // }}
                controls
                height="100%"
                url={buildSrc(selectedVideo.src)}
                width="100%"
              />
            </div>
            <div className="w-0 h-0 lg:h-full lg:w-1/4 bg-gradient-to-r from-black to-default-black" />
          </div>
        ) : <div className="h-[50vh] w-[100%] bg-default-black" />
      }
      <ColorStripeRainbow />
    </section>
  )
}

export default VideoPlayer;
