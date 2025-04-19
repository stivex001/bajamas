import { AuthResponse, ID } from "../hooks/types";
import { useApiMutation } from "../hooks/useApiMutation";
import { useApiQuery } from "../hooks/useApiQuery";

export interface SubscriberData {
  business_id: ID;
  fname: string;
  lname: string;
  country: string;
  state: string;
  phone: string;
  email: string;
  status: ID;
  subscribe: ID;
  dob: string;
  tag_id: ID;
  id: ID;
  created_at: Date;
  updated_at: Date;
}

export interface Subscriber {
  message: SubscriberData[];
}

export const useSubscribers = () => {
  const createSubscriber = useApiMutation<AuthResponse, FormData>({
    url: "/addsubscrib",
    method: "POST",
  });

  const getSubscriberList = () =>
    useApiQuery<Subscriber>(["subscribers"], {
      url: `/viewsubscrib`,
      method: "GET",
    });

  const getUnsubcriberList = () =>
    useApiQuery<Subscriber>(["unsubscribers"], {
      url: `/unsubscribe`,
      method: "GET",
    });
  const getTotalSubscriberList = () =>
    useApiQuery<Subscriber>(["unsubscribers"], {
      url: `/unsubscribe`,
      method: "GET",
    });
  const getSubscriberEmailList = () =>
    useApiQuery<Subscriber>(["subscribermail"], {
      url: `/subscribermail`,
      method: "GET",
    });

    const importBulkSubscribers = useApiMutation<any, FormData>({
      url: "/subscribers/bulk-upload",
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
      },
    });

  return {
    createSubscriber,
    getSubscriberList,
    getUnsubcriberList,
    getSubscriberEmailList,
    getTotalSubscriberList,
    importBulkSubscribers
  };
};
