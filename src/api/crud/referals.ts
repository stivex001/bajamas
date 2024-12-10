import { ID } from "../hooks/types";
import { useApiQuery } from "../hooks/useApiQuery";

export interface ElectricityList {
  code: string;
  networkType: string;
  phone: string;
  type: string;
  status: number;
  id: ID;
  networkID: ID;
  price: string;
  amountToPay: string;
  category: string;
  name: string;
}

export interface ElectricityProps {
  code: string;
  networkType: string;
  phone: string;
  type: string;
  status: number;
  id: ID;
  networkID: ID;
  price: string;
  amountToPay: string;
  category: string;
  name: string;
  data: ElectricityList;
  ref_amount:string
  ref_when:string
}

export const referalHistory = () => {
  const getYourReferals = () =>
    useApiQuery<ElectricityProps>(["referal"], {
      url: `/referrals-list`,
      method: "GET",
    });

  return {
    getYourReferals,
  };
};
