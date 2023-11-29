import ColorStripe from './common/ColorStripe';
  
interface Details {
  category: string,
  length: number,
}

const Details = ({ category, length }: Details) => (
  <>
    <div className="w-full">
      <ColorStripe text="Details" color="red" />
    </div>
    <div className="m-1 sm:m-0 p-2 bg-default-black w-[98%] sm:w-full flex flex-wrap border-2 border-black text-default-white flex-col">
      <div>
        <span className="font-semibold">FILMED ON:</span> 12/25/92
      </div>
      <div>
      <span className="font-semibold">LENGTH</span> {Math.floor(length / 60)}:{length % 60}
      </div>
      <div>
      <span className="font-semibold">CATEGORY:</span> {category.toLocaleUpperCase()}
      </div>
    </div>
  </>
);

export default Details;
