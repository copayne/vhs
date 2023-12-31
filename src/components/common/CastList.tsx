import Headshot from './Headshot';


interface CastList {
  cast: Array<string>,
}

const CastList = ({ cast }: CastList) => (
  <div className="m-1 sm:m-0 p-2w-[98%] sm:w-full flex flex-wrap">
    { cast.map((actor) => (
        <div key={actor} className="w-1/4">
          <Headshot actor={actor} />
        </div>
      ))
    }
  </div>
);

export default CastList;
