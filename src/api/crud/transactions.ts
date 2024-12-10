import {  ID } from "../hooks/types";
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
}

export const transactionHistory = () => {
  const getAllTransactions = () =>
    useApiQuery<ElectricityProps>(["all-transactions"], {
      url: `/transaction-history`,
      method: "GET",
    });

  return {
    getAllTransactions,
  };
};
