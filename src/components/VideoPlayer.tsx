/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable @typescript-eslint/await-thenable */
import { useEffect } from "react";
import { useSelectedVideo } from "../stores/SelectedVideo";
import { useVideos } from "../stores/Videos";
import ReactPlayer from "react-player";
import { ColorStripeRainbow } from '~/components/common/ColorStripe';

const fetcher = async (url: string): Promise<string> => {
  const response = await fetch(url);
  return response.json();
};

const VideoPlayer = () => {
  const selectedVideo  = useSelectedVideo(state => state.selectedVideo);
  const urls = useVideos(state => state.urls);
  const setUrls = useVideos(state => state.setUrls);
  const src = selectedVideo?.id && urls[selectedVideo?.id]
    ? urls[selectedVideo.id]
    : null;

  const getPresignedUrl = async (file: string) => {
    if (!selectedVideo) {
      return;
    }
    
    const res = await fetcher(`/api/presigned-url?file=${file}`);

    setUrls({
      ...urls,
      [selectedVideo.id]: res,
    })
  }

  useEffect(() => {
    if (selectedVideo?.id && !urls[selectedVideo?.id]) {
      const presignedUrl = getPresignedUrl(selectedVideo.src);
    }
    // eslint-disable-next-line
  }, [selectedVideo?.id])

  return (
    <section className="h-full w-full">
      {
        src ? (
          <div className="flex h-[50vh] lg:h-[66vh] w-full">
            <div className="w-0 h-0 lg:h-full lg:w-1/4 bg-gradient-to-r from-default-black to-black" />
            <div className="w-full lg:w-1/2 h-full bg-black">
              <ReactPlayer
                playsinline
                controls
                height="100%"
                url={src}
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
