import { AuthResponse, ID } from "../hooks/types";
import { useApiMutation } from "../hooks/useApiMutation";
import { useApiQuery } from "../hooks/useApiQuery";

export interface TvList {
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

export interface TV {
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
  data: TvList;
}

export const tvSub = () => {
  const buyTv = useApiMutation<AuthResponse, FormData>({
    url: "/purchase-tv",
    method: "POST",
  });

  const validateTv = useApiMutation<AuthResponse, FormData>({
    url: "/validate-tv",
    method: "POST",
  });

  const getTvSubListType = (tv:string) =>
    useApiQuery<TV>(["tv-type"], {
      url: `/list-tv/${tv}`,
      method: "GET",
    });


  return {
    buyTv,
    getTvSubListType,
    validateTv
  };
};
