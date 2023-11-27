interface VideoHeader {
  // date: string,
  length: number,
  title: string,
}

const VideoHeader = ({
    // date,
    length,
    title,
 }: VideoHeader) => {
  return (
    <div className="p-2 pl-1 flex w-full text-light-primary">
      <div className="flex justify-between w-full">
        <div className="min-w-fit text-3xl font-semibold drop-shadow-lg ml-auto">
          {title.toLocaleUpperCase()}
        </div>
      </div>
    </div>
  );
}

export default VideoHeader;
