import { AuthResponse, ID } from "../hooks/types";
import { useApiMutation } from "../hooks/useApiMutation";
import { useApiQuery } from "../hooks/useApiQuery";

export interface DataList {
  network: string;
  networkType: string;
  discount: string;
  server: string;
  status: number;
  id: ID;
  networkID: ID;
  amount: number;
  amountToPay: string;
  category: string;
  name: string;
}

export interface Data {
  network: string;
  networkType: string;
  discount: string;
  server: string;
  status: number;
  id: ID;
  networkID: ID;
  amount: number;
  amountToPay: string;
  category: string;
  name: string;
  data: DataList;
}

export const dataCard = () => {
  const buyData = useApiMutation<AuthResponse, FormData>({
    url: "/purchase-data",
    method: "POST",
  });

  const getDataListType = (network:string) =>
    useApiQuery<Data>(["data-type"], {
      url: `/types-data/${network}`,
      method: "GET",
    });

    const getDataList = (network:string, type:string) =>
      useApiQuery<Data>(["data-list"], {
        url: `/list-data/${network}/${type}`,
        method: "GET",
      });

  return {
    buyData,
    getDataListType,
    getDataList
  };
};
