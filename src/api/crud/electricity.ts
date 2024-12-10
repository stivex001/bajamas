import { AuthResponse, ID } from "../hooks/types";
import { useApiMutation } from "../hooks/useApiMutation";
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

export const electricity = () => {
  const buyElectricity = useApiMutation<AuthResponse, FormData>({
    url: "/purchase-electricity",
    method: "POST",
  });

  const validateNumber = useApiMutation<AuthResponse, FormData>({
    url: "/validate-electricity",
    method: "POST",
  });

  const getElectricityList = () =>
    useApiQuery<ElectricityProps>(["tv-type"], {
      url: `/list-electricity`,
      method: "GET",
    });


  return {
    buyElectricity,
    getElectricityList,
    validateNumber
  };
};
