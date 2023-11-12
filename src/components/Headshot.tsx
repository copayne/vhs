import { useMemo } from 'react';
import Image from 'next/image';
import { getHeadshot } from '../helpers/getHeadshots';

interface Headshot {
  actor: string,
}

const Headshot = ({ actor }: Headshot) => {
  const headshot: Image = getHeadshot(actor);

  return !!headshot && (
    <div className="p-2 w-full flex flex-col items-center">
      <div className="border-2 border-black w-[75px] h-[75px]">
        <Image
          alt={`${actor} headshot`}
          src={headshot}
          height="75"
          width="75"
        />
      </div>
      <p className="capitalize underline underline-offset-4 text-dark-secondary text-sm text-center">
        {actor}
      </p>
    </div>
  );
}

export default Headshot;
