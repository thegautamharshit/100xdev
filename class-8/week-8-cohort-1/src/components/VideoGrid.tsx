import { VideoCard } from "./VideoCard"

const VIDEOS = [{
    title: "How to Leann Tailwind from scract | Code with me",
    image: "/thumbnail.png",
    channel: "Harshit Gautam", 
    views: "56 M",
    timestamp: "12 Hours Ago",
},{
    title: "How to Leann Tailwind from scract | Code with me",
    image: "/thumbnail.png",
    channel: "Harshit Gautam", 
    views: "56 M",
    timestamp: "12 Hours Ago",
},{
    title: "How to Leann Tailwind from scract | Code with me",
    image: "/thumbnail.png",
    channel: "Harshit Gautam", 
    views: "56 M",
    timestamp: "12 Hours Ago",
},{
    title: "How to Leann Tailwind from scract | Code with me",
    image: "/thumbnail.png",
    channel: "Harshit Gautam", 
    views: "56 M",
    timestamp: "12 Hours Ago",
},{
    title: "How to Leann Tailwind from scract | Code with me",
    image: "/thumbnail.png",
    channel: "Harshit Gautam", 
    views: "56 M",
    timestamp: "12 Hours Ago",
},{
    title: "How to Leann Tailwind from scract | Code with me",
    image: "/thumbnail.png",
    channel: "Harshit Gautam", 
    views: "56 M",
    timestamp: "12 Hours Ago",
},{
    title: "How to Leann Tailwind from scract | Code with me",
    image: "/thumbnail.png",
    channel: "Harshit Gautam", 
    views: "56 M",
    timestamp: "12 Hours Ago",
},{
    title: "How to Leann Tailwind from scract | Code with me",
    image: "/thumbnail.png",
    channel: "Harshit Gautam", 
    views: "56 M",
    timestamp: "12 Hours Ago",
},{
    title: "How to Leann Tailwind from scract | Code with me",
    image: "/thumbnail.png",
    channel: "Harshit Gautam", 
    views: "56 M",
    timestamp: "12 Hours Ago",
}]

export const VideoGrid = () => {
    return <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4">
        {VIDEOS.map(video => <div>
            <VideoCard
                title={video.title}
                image={video.image}
                channel={video.channel}
                views={video.views}
                timestamp={video.timestamp}
            ></VideoCard>
        </div> )}
    </div>
}