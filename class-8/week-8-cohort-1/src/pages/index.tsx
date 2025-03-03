import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { VideoCard } from "@/components/VideoCard";
import { VideoGrid } from "@/components/VideoGrid";
import App from "./_app";
import { Appbar } from "@/components/Appbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      {/* <VideoCard title={"How to Leann Tailwind from scract | Code with me"}
      image={"/thumbnail.png"}
      channel={"Harshit Gautam"} 
      views={"56 M"}
      timestamp={"12 Hours Ago"} /> */}
      <Appbar />
      <VideoGrid />
    </div>

  );
}
