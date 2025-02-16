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
