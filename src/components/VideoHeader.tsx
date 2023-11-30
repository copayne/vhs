interface VideoHeader {
  category: string,
  filmedBy: Array<string>
  title: string,
}

const VideoHeader = ({
    category,
    filmedBy,
    title,
 }: VideoHeader) => {
  const dirs = filmedBy.join(', ');

  return (
    <div className="p-2 pl-1 flex w-full text-light-primary">
      <div className="w-full bg-white rounded-b-md drop-shadow-sticker">
        <div className="w-full h-[6px] bg-black" />
        <div className="min-w-fit text-2xl font-semibold text-right pr-2 border-b-default-black border-dotted border-b-2">
          {title}
        </div>
        <div className="flex text-xs italic font-light justif p-1 pr-2 justify-between">
          <span title={dirs} className="overflow-hidden text-ellipsis whitespace-nowrap">Filmed By: {dirs}</span>
          <span>Tagged: <u>{category}</u></span>
          <span>12/25/92</span>
        </div>
      </div>
    </div>
  );
}

export default VideoHeader;
