import Image from 'next/image';
import { HEADSHOTS } from '../../helpers/getHeadshots';
import { useVideos } from '~/stores/Videos';

interface Headshot {
  actor: string,
}

const Headshot = ({ actor }: Headshot) => {
  const headshot = HEADSHOTS.find(h => h.id === actor.toLocaleLowerCase());
  const criteria = useVideos(state => state.criteria);
  const setFeatured = useVideos(state => state.setFeatured);

  const handleFilterByActor = () => {
    const newFeatured = criteria.featured;
    const index = newFeatured.findIndex(n => n === actor);

    if (index !== -1) {
      newFeatured.splice(index, 1);
    } else {
      newFeatured.push(actor);
    }

    setFeatured(newFeatured);
  }

  return (
    <div className="p-2 w-full flex flex-col items-center">
      <div
        className="border-2 border-black w-[75px] h-[75px] cursor-pointer"
        onClick={handleFilterByActor}>
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
