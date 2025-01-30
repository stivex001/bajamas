import DashboardCard from "@/components/dashboard/DashboardCard";
import { PageTitle } from "@/components/PageTitle";
import {
  BlacklistedIcon,
  SpamIcon,
  SubCribersIcon,
  UnSubCribersIcon,
} from "@/assets/svgs/MenuIcon";
import CreditUsed from "@/components/dashboard/CreditUsed";
import { CreateEmailCampaign } from "@/components/dashboard/CreateEmailCampaign";
import Barchart from "@/components/dashboard/charts/Barchat";
import PieChart from "@/components/dashboard/charts/PieChart";
import { CardLayout } from "@/components/shared/CardLayout";
import Metrics from "@/components/dashboard/charts/Metrics";
import ActivityLog from "@/components/dashboard/ActivityLog";
import { useAuthStore } from "@/store/authStore";

const Dashboard = () => {
  const { currentUser } = useAuthStore();

  return (
    <main className="flex flex-col gap-7">
      <div className="flex flex-col gap-5">
        <PageTitle title="Dashboard" />
        <p className="font-semibold text-lg text-darker capitalize">
          Hello,  {currentUser?.name}!
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-7 ">
        <DashboardCard
          desc="Subscribers"
          value="40,689"
          icon={SubCribersIcon}
        />
        <DashboardCard
          desc="Unsubscribe"
          value="10,293"
          icon={UnSubCribersIcon}
        />
        <DashboardCard desc="Spam Reported" value="9,000" icon={SpamIcon} />
        <DashboardCard desc="Blacklisted" value="2040" icon={BlacklistedIcon} />
      </div>
      <CreditUsed />
      <div className="flex flex-col  lg:flex-row gap-6 h-full">
        <div className="w-full lg:w-7/12">
          <Barchart />
        </div>
        <div className="w-full lg:w-5/12">
          <PieChart />
        </div>
      </div>
      <CreateEmailCampaign />
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
