interface VideoHeader {
  date: string,
  length: number,
  title: string,
}

const VideoHeader = ({
    date,
    length,
    title,
 }: VideoHeader) => {
  return (
    <div className="p-2 pl-1 flex w-full">
      <div className="flex justify-between w-full">
        <div className="min-w-fit text-2xl drop-shadow-lg">
          {title}
        </div>
        <div className="flex flex-col min-w-fit items-end text-xs">
          <div>
            12/5/95
          </div>
          <div>
            {Math.floor(length / 60)}:{length % 60}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoHeader;
