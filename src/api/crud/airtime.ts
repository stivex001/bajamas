import { AuthResponse, ID } from "../hooks/types";
import { useApiMutation } from "../hooks/useApiMutation";
import { useApiQuery } from "../hooks/useApiQuery";

export interface AirtimeData {
  network: string;
  discount: string;
  server: string;
  status: number;
  id: ID;
  networkID: ID;
  amount: number;
  amountToPay: string;
}

export interface Airtime {
  network: string;
  discount: string;
  server: string;
  status: number;
  id: ID;
  networkID: ID;
  amount: number;
  amountToPay: string;
  data: AirtimeData;
}

export const airtime = () => {
  const buyAirtime = useApiMutation<AuthResponse, FormData>({
    url: "/purchase-airtime ",
    method: "POST",
  });

  const airtime2Cash = useApiMutation<AuthResponse, FormData>({
    url: "/purchase-airtime2cash ",
    method: "POST",
  });

  const getAirtimeList = () =>
    useApiQuery<Airtime>(["airtime-list"], {
      url: `/list-airtime`,
      method: "GET",
    });

    const getAirtime2CashList = () =>
      useApiQuery<Airtime>(["airtime-list"], {
        url: `/list-airtime2cash`,
        method: "GET",
      });

  return {
    buyAirtime,
    getAirtimeList,
    getAirtime2CashList,
    airtime2Cash
  };
};
