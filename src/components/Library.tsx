import Image from 'next/image';
import ColorStripe from './common/ColorStripe';
import vhsLogo from '../../public/assets/VHS_C_Logo.png';
import type { Video } from '~/pages';
import { Kalam } from 'next/font/google';

const kalamFont = Kalam({
  weight: ['300', '400'],
  style: 'normal',
  subsets: ['latin'],
});
  
interface Library {
  videos: Array<Video>
}

const Library = ({ videos }: Library) => {
  console.log(videos);
  return (
    <>
      <div className="w-full">
        <ColorStripe text="Library" color="orange" />
      </div>
      <div className="m-1 sm:m-0 p-2 bg-default-black w-[98%] sm:w-full flex flex-wrap border-2 border-black text-default-white flex-col">
        <div className="w-full bg-white rounded-md text-sm text-default-black">
          <div className="m-2 flex text-xs font-semibold">
            <div className="w-4/5">
              TITLE
            </div>
            <div className="w-1/5">
              DATE
            </div>
          </div>
          {
            videos.slice(0, 15).map(video => (
              <div
                key={video.id}
                className="m-2 mt-3 mb-3 flex border-b-default-black border-dotted border-b-2 text-default-black"
              >
              <div className="w-4/5">
                <span className={kalamFont.className}>{video.name}</span>
              </div>
              <div className="w-1/5">
                <span className={kalamFont.className}>12/25/92</span>
              </div>
              </div>
            ))
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
