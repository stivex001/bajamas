import DashboardCard from "@/components/dashboard/DashboardCard";
import { PageTitle } from "@/components/PageTitle";
import { BlacklistedIcon, SpamIcon, SubCribersIcon, UnSubCribersIcon } from "@/assets/svgs/MenuIcon";
import CreditUsed from "@/components/dashboard/CreditUsed";

const Dashboard = () => {
  return (
    <main className="flex flex-col gap-7">
      <div className="flex flex-col gap-5">
        <PageTitle title="Dashboard" />
        <p className="font-semibold text-lg text-darker">
          Hello,  EMMANUEL EMMY!
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
        <DashboardCard
          desc="Spam Reported"
          value="9,000"
          icon={SpamIcon}
        />
        <DashboardCard
          desc="Blacklisted"
          value="2040"
          icon={BlacklistedIcon}
        />
      </div>
      <CreditUsed />
    </main>
  );
};

export default Dashboard;
