import CastList from './common/CastList';
import ColorStripe from './common/ColorStripe';
  
interface Featuring {
  featuring: Array<string>,
}

const Featuring = ({ featuring }: Featuring) => (
  <>
    <div className="w-full">
      <ColorStripe text="Featuring" color="purple" />
    </div>
    <CastList cast={featuring} />
  </>
);

export default Featuring;