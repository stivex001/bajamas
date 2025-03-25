import { AuthResponse, ID } from "../hooks/types";
import { useApiMutation } from "../hooks/useApiMutation";
import { useApiQuery } from "../hooks/useApiQuery";
// import { useApiQuery } from "../hooks/useApiQuery";

export interface pricingData {
  plan: string;
  amount: string;
  status: number;
  user_id: ID;
  id: ID;
  networkID: ID;
  created_at: Date;
  updated_at: Date;
  data: string;
  business: string;
}

export interface Price {
  data: pricingData[];
}

export const usePricing = () => {
  const pricing = useApiMutation<AuthResponse, FormData>({
    url: "/aimessage",
    method: "POST",
  });

  const getPricingList = () =>
    useApiQuery<Price>(["pricing"], {
      url: `/pricing`,
      method: "GET",
    });

  return {
    pricing,
    getPricingList,
  };
};
