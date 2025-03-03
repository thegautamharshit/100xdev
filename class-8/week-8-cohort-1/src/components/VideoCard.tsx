export function VideoCard(props:any) {
  return (
    <div className="p-3">
      <img src={props.image} className="rounded-2xl" />
      <div className="grid grid-cols-12 pt-2">
        <div className="col-span-2 flex items-center justify-center ">
            <img className="rounded-full w-15 h-15 " src={props.image} />
        </div>
        <div className="col-span-10 grid grid-cols-11 pl-3">
            <div className="col-span-10 ">
                {/* Tailwind: The CSS Framework | Web Development */}
                {props.title}
            </div>
            <div className="col-span-11 text-gray-300 txt-base">
                {/* Harshit Gautam */}
                {props.channel}
            </div>
            <div className="col-span-11 text-gray-300 txt-base">
                {/* 56M views | 12 hours ago */}
                {props.views} | {props.timestamp}
            </div>
        </div>
      </div>
    </div>
  );
}