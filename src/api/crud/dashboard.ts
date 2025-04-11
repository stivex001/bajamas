import { ID } from "../hooks/types";
import { useApiQuery } from "../hooks/useApiQuery";
// import { useApiQuery } from "../hooks/useApiQuery";

export interface DashboardData {
  business_id: ID;
  name: string;
  server: string;
  status: number;
  user_id: ID;
  id: ID;
  networkID: ID;
  created_at: Date;
  updated_at: Date;
  user: string;
}

export interface Dashboard {
  data: {
    subscribers: number;
    unsubscribe: number;
    spam_reported: number;
    blacklisted: number;
  };
}

export const useDashboard = () => {
  // const askAi = useApiMutation<AuthResponse, FormData>({
  //   url: "/aimessage",
  //   method: "POST",
  // });

  const getDashboardList = () =>
    useApiQuery<Dashboard>(["dashboard-list"], {
      url: `/dashboard/main`,
      method: "GET",
    });

  return {
    getDashboardList,
  };
};
