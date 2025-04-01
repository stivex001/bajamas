import { AuthResponse, ID } from "../hooks/types";
import { useApiMutation } from "../hooks/useApiMutation";
import { useApiQuery } from "../hooks/useApiQuery";

export interface NotificationSubData {
  title: string;
  message: string;
  primary_action:string
}

export interface NoficationData {
  business_id: ID;
  title: string;
  message: string;
  status: number;
  user_id: ID;
  id: any;
  networkID: ID;
  created_at: Date;
  read_at: Date;
  user: string;
  data: NotificationSubData;
}

export interface Notification {
  data: NoficationData[];
  
}

export const useNotification = () => {
  const markRead = useApiMutation<AuthResponse, FormData>({
    url: "/mark-as-read-notifications",
    method: "PATCH",
  });

  const getAllNotification = () =>
    useApiQuery<Notification>(["notification"], {
      url: `/all-notification`,
      method: "GET",
    });

  const getUnreadNotification = () =>
    useApiQuery<Notification>(["notification"], {
      url: `/all-notification`,
      method: "GET",
    });

  return {
    markRead,
    getAllNotification,
    getUnreadNotification,
  };
};
