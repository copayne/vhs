import { clsx } from 'clsx';

interface ColorStripe {
  text?: string,
  color: string,
}

const ColorStripe = ({ text = '', color }: ColorStripe) => (
  <div className={clsx(
    'w-full text-lg text-white font-semibold h-full',
    color === 'purple' && 'bg-default-purple',
    color === 'pink' && 'bg-default-pink',
    color === 'red' && 'bg-default-red',
    color === 'orange' && 'bg-default-orange',

  )}>
    {
      text && (
        <span className="pl-2">{text.toLocaleUpperCase()}</span>
      )
    }
  </div>
);

export default ColorStripe;

export const ColorStripeRainbow = () => (
  <div className="w-full">
    <div className="h-2 w-full">
      <ColorStripe color="purple" />
    </div>
    <div className="h-2 w-full">
      <ColorStripe color="pink" />
    </div>
    <div className="h-2 w-full">
      <ColorStripe color="red" />
    </div>
    <div className="h-2 w-full">
      <ColorStripe color="orange" />
    </div>
  </div>
);

