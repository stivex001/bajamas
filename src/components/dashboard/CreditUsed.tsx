import { CardLayout } from "../shared/CardLayout";
import { Progressbar } from "./Progressbar";

const CreditUsed = () => {
  return (
    <CardLayout>
      <div className="flex flex-col gap-7">
        <div>
          <h1 className="text-xl text-black">Credit Used</h1>
          <p className="text-sm text-[#979797]">
            Below is the summary of how you spend your credits
          </p>
        </div>
        <div className="grid  lg:grid-cols-2 gap-[30px]">
          <Progressbar desc="Sending credits" count={10} />
          <Progressbar desc="List" count={20} />
          <Progressbar desc="Campaigns" count={40} />
          <Progressbar desc="Subscribers" count={80} />
        </div>
      </div>
    </CardLayout>
  );
};

export default CreditUsed;
