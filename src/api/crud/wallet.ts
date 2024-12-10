import { AuthResponse, ID } from "../hooks/types";
import { useApiMutation } from "../hooks/useApiMutation";
import { useApiQuery } from "../hooks/useApiQuery";

export interface WalletList {
  method: string;
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
  amount:string
  account_name:string
  account_number:string
  provider:string
  
}

export interface Wallet {
  method: string;
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
  account_name:string
  account_number:string
  provider:string
  data: WalletList;
}

export const wallet = () => {
  const fundWallet = useApiMutation<AuthResponse, FormData>({
    url: "/purchase-tv",
    method: "POST",
  });

  

  const getFundingMethod = () =>
    useApiQuery<Wallet>(["wallet-type"], {
      url: `/fund-wallet-atm`,
      method: "GET",
    });

    const getVirtualAccount = () =>
      useApiQuery<Wallet>(["virtual_accounts"], {
        url: `/vaccts`,
        method: "GET",
      });


  return {
    fundWallet,
    getFundingMethod,
    getVirtualAccount
  };
};
