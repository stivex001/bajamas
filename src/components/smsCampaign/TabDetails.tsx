import { CiGlobe } from "react-icons/ci";

type Props = {
    title:string;
    details:string
    avalability:string
};

export const TabDetails = ({title,details, avalability}: Props) => {
  return (
    <div>
      <CiGlobe />
      <div className="text-center">
        <h1 className="font-semibold text-2xl">{title}</h1>
        <p className="text-xs font-semibold text-[#606162] mt-2 mb-3">
         {details}
        </p>
        <p className="text-xs font-semibold text-[#ABACAD]">
          {avalability}
        </p>
      </div>
    </div>
  );
};
