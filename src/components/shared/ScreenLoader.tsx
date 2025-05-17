import { useEffect, useState } from "react";
import { Spinner } from "./Spinner";

type prop = {
  className?: string;
};

export const ScreenLoader = ({ className }: prop) => {
  return (
    <div
      className={` min-h-[40vh] flex items-center justify-center ${className}`}
    >
      {/* <span className="loader"></span> */}
      <Spinner />
    </div>
  );
};

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white text-center px-4">
      {/* Spinner */}
      <div className="w-12 h-12 border-4 border-primary border-dashed rounded-full animate-spin mb-6"></div>

      {/* Percentage Counter */}
      <p className="text-2xl font-semibold text-gray-700 mb-2">
        Loading... {progress}%
      </p>

      {/* Progress Bar */}
      <div className="w-64 bg-gray-200 rounded-full h-2.5 overflow-hidden">
        <div
          className="bg-primary h-full transition-all duration-200"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
