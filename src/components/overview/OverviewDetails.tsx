import {
  BlacklistedIcon,
  SpamIcon,
  SubCribersIcon,
  UnSubCribersIcon,
} from "@/assets/svgs/MenuIcon";
import DashboardCard from "../dashboard/DashboardCard";
import { PageTitle } from "../PageTitle";
import { CardLayout } from "../shared/CardLayout";
import Metrics from "../dashboard/charts/Metrics";
import bullish from "@/assets/images/arrow.png";
import ImportViaCSV from "./ImportViaCSV";
import ImportViaApi from "./ImportViaApi";
import { useDashboard } from "@/api/crud/dashboard";
import SkeletonLoader from "../shared/SkeletonModal";

const OverviewDetails = () => {
  const { getDashboardList } = useDashboard();
  const { data: dlist, isLoading } = getDashboardList();
  const countList = dlist?.data;

  return (
    <main className="flex flex-col gap-7">
      <div className="flex flex-col gap-5">
        <PageTitle title="Manage your audience" />
        <p className="font-medium text-sm text-darker font-Nunito">
          Your audience is where you'll store and manage your subscribers.
          <br /> Once you add your subscribers, you'll be able to send your
          first campaign. We'll work you through the process.
        </p>
      </div>
      {isLoading ? (
        <SkeletonLoader type="card" count={4} />
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-7 ">
          <DashboardCard
            desc="Subscribers"
            value={`${countList?.subscribers}`}
            icon={SubCribersIcon}
          />
          <DashboardCard
            desc="Unsubscribe"
            value={`${countList?.unsubscribe}`}
            icon={UnSubCribersIcon}
          />
          <DashboardCard
            desc="Spam Reported"
            value={`${countList?.spam_reported}`}
            icon={SpamIcon}
          />
          <DashboardCard
            desc="Blacklisted"
            value={`${countList?.blacklisted}`}
            icon={BlacklistedIcon}
          />
        </div>
      )}
      <CardLayout>
        <Metrics />
      </CardLayout>
      <CardLayout>
        <div>
          <div className="border-b border-b-[#E5E7EB] pb-4">
            <div className="flex items-center gap-4">
              <div className="w-4 h-4 ">
                <img src={bullish} alt="bullish" className="w-full h-full" />
              </div>
              <h2 className="font-semibold text-base text-[#A7A9AB]">
                Quick action
              </h2>
            </div>
            <h2 className="text-[8px] lg:text-[10px] text-[#A7A9AB] font-semibold mt-4">
              Well show you how to grow your audience and add contacts quickly
            </h2>
          </div>
          <div className="flex flex-col gap-6 lg:gap-2 mt-4">
            <ImportViaCSV />
            <ImportViaApi />
          </div>
        </div>
      </CardLayout>
    </main>
  );
};

export default OverviewDetails;
