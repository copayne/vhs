import CastList from './common/CastList';
import ColorStripe from './common/ColorStripe';
  
interface FilmedBy {
  filmedBy: Array<string>,
}

const FilmedBy = ({ filmedBy }: FilmedBy) => (
  <>
    <div className="w-full">
      <ColorStripe text="Filmed By" color="pink" />
    </div>
    <CastList cast={filmedBy} />
  </>
);

export default FilmedBy;
