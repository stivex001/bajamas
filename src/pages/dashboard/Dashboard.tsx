import DashboardCard from "@/components/dashboard/DashboardCard";
import { PageTitle } from "@/components/PageTitle";
import {
  BlacklistedIcon,
  SpamIcon,
  SubCribersIcon,
  UnSubCribersIcon,
} from "@/assets/svgs/MenuIcon";
// import CreditUsed from "@/components/dashboard/CreditUsed";
import { CreateEmailCampaign } from "@/components/dashboard/CreateEmailCampaign";
import Barchart from "@/components/dashboard/charts/Barchat";
import PieChart from "@/components/dashboard/charts/PieChart";
import { CardLayout } from "@/components/shared/CardLayout";
import Metrics from "@/components/dashboard/charts/Metrics";
import ActivityLog from "@/components/dashboard/ActivityLog";
import { useAuthStore } from "@/store/authStore";
import { useDashboard } from "@/api/crud/dashboard";
import SkeletonLoader from "@/components/shared/SkeletonModal";

const Dashboard = () => {
  const { currentUser } = useAuthStore();
  const { getDashboardList } = useDashboard();
  const { data: dlist, isLoading } = getDashboardList();
  const countList = dlist?.data;

  return (
    <main className="flex flex-col gap-7">
      <div className="flex flex-col gap-5">
        <PageTitle title="Dashboard" />
        <p className="font-semibold text-lg text-darker capitalize">
          Hello,  {currentUser?.name}!
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

      {/* <CreditUsed /> */}
      <div className="flex flex-col  lg:flex-row gap-6 h-full">
        <div className="w-full lg:w-7/12">
          {isLoading ? <SkeletonLoader type="image" count={1} /> : <Barchart />}
        </div>
        <div className="w-full lg:w-5/12">
          {isLoading ? (
            <SkeletonLoader type="image" count={1} />
          ) : (
            <PieChart countList={countList} />
          )}
        </div>
      </div>
      <CreateEmailCampaign countList={countList} />
      <CardLayout>
        <div className="flex flex-col lg:flex-row gap-3">
          <div className="flex-1">
            <Metrics />
          </div>
          <div className="flex-1">
            <ActivityLog />
          </div>
        </div>
      </CardLayout>
    </main>
  );
};

export default Dashboard;
