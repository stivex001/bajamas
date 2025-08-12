"use client";

import { TwitterCard } from "@/components/assets/icons/TwitterCard";
import { Play } from "lucide-react";

type Props = {
  title?: string;
  videoUrl?: string;
  backgroundImage?: string;
  businessInfo?: {
    text: string;
    year: string;
  };
};

const VideoContent = (props: Props) => {
  // const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const defaultTitle = "PROVIDING PREMIUM METAL WORKS...";

  const title = props.title || defaultTitle;
  const backgroundImage = "./videobg.jpg";

  // const handlePlayVideo = () => {
  //   setIsVideoPlaying(true);
  // };

  // const handleCloseVideo = () => {
  //   setIsVideoPlaying(false);
  // };

  return (
    <section className="relative lg:h-[70vh] py-12 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        {/* Dark overlay */}
        {/* <div className="bg-opacity-60 absolute inset-0 bg-black"></div> */}
      </div>

      <div className="relative  h-full items-center">
        <div className="mx-auto w-full max-w-6xl px-4">
          <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row items-center">
            <div className="space-y-8 lg:w-[60%]">
              <h1 className="text-3xl sm:text-4xl leading-tight font-bold text-white md:text-6xl">
                {title}
              </h1>

              <div className="flex items-center justify-center lg:justify-start">
                <button
                  // onClick={handlePlayVideo}
                  className="group bg-opacity-80 hover:bg-opacity-100 relative flex h-20 w-20 cursor-pointer items-center justify-center rounded-full bg-yellow-500 transition-all duration-300 hover:scale-110"
                >
                  <Play
                    className="ml-1 h-8 w-8 text-white"
                    fill="currentColor"
                  />
                </button>
              </div>
            </div>

            <TwitterCard />
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {/* {isVideoPlaying && (
        <div className="bg-opacity-90 fixed inset-0 z-50 flex items-center justify-center bg-black">
          <div className="relative mx-4 w-full max-w-4xl">
            <button
              onClick={handleCloseVideo}
              className="absolute -top-12 right-0 text-white transition-colors duration-200 hover:text-yellow-500"
            >
              <X className="h-8 w-8" />
            </button>

            <div className="relative overflow-hidden rounded-lg bg-black">
              <div className="aspect-video">
                {props.videoUrl ? (
                  <iframe
                    src={props.videoUrl}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-white">
                    <div className="text-center">
                      <Play className="mx-auto mb-4 h-16 w-16 text-yellow-500" />
                      <p className="text-xl">Video Player</p>
                      <p className="mt-2 text-gray-400">
                        Add your video URL to props.videoUrl
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )} */}
    </section>
  );
};

export default VideoContent;
