import Image from 'next/image';
import { HEADSHOTS } from '../../helpers/getHeadshots';

interface Headshot {
  actor: string,
}

const Headshot = ({ actor }: Headshot) => {
  const headshot = HEADSHOTS.find(h => h.id === actor.toLocaleLowerCase());

  return (
    <div className="p-2 w-full flex flex-col items-center">
      <div className="border-2 border-black w-[75px] h-[75px]">
        {
          headshot && (
            <Image
              alt={`${actor} headshot`}
              src={headshot.src}
              height="75"
              width="75"
            />
          )
        }
      </div>
      <p className="underline underline-offset-4 text-default-black text-xs text-center mt-1">
        {actor}
      </p>
    </div>
  );
}

export default Headshot;
