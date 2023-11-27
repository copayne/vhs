interface ColorStripe {
  text?: string,
  color: string,
}

const ColorStripe = ({ text = '', color }: ColorStripe) => (
  <div className={`w-full bg-default-${color} text-lg text-default-white font-semibold h-full`}>
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

