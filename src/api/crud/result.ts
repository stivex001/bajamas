import { AuthResponse, ID } from "../hooks/types";
import { useApiMutation } from "../hooks/useApiMutation";
import { useApiQuery } from "../hooks/useApiQuery";

export interface ResultList {
  network: string;
  networkType: string;
  phone: string;
  server: string;
  status: number;
  id: ID;
  networkID: ID;
  price: string;
  amountToPay: string;
  category: string;
  name: string;
}

export interface Result {
  network: string;
  networkType: string;
  phone: string;
  server: string;
  status: number;
  id: ID;
  networkID: ID;
  price: string;
  amountToPay: string;
  category: string;
  name: string;
  data: ResultList;
}

export const resultSub = () => {
  const buyResult = useApiMutation<AuthResponse, FormData>({
    url: "/purchase-education",
    method: "POST",
  });

  const validateResult = useApiMutation<AuthResponse, FormData>({
    url: "/validate-Result",
    method: "POST",
  });

  const getResultSubListType = () =>
    useApiQuery<Result>(["Result-type"], {
      url: `/list-education`,
      method: "GET",
    });


  return {
    buyResult,
    getResultSubListType,
    validateResult
  };
};
