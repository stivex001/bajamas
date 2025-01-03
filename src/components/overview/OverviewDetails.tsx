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

const OverviewDetails = () => {
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
      <CardLayout>
        <Metrics />
      </CardLayout>
    </main>
  );
};

export default OverviewDetails;
