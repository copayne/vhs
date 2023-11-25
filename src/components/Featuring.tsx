import Headshot from './Headshot';
  
interface Featuring {
  featuring: Array<string>,
}

const Featuring = ({ featuring }: Featuring) => (
  <div className="m-1 sm:m-0 p-2 bg-dark-background w-[98%] sm:w-full lg:w-2/3 flex flex-wrap border-2 border-black">
    { featuring.map((actor) => (
      <div key={actor} className="w-1/4">
        <Headshot actor={actor} />
      </div>
    ))
  }
  </div>
);

export default Featuring;
