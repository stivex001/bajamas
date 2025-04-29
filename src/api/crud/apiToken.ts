import { AuthResponse, ID } from "../hooks/types";
import { useApiMutation } from "../hooks/useApiMutation";
import { useApiQuery } from "../hooks/useApiQuery";
// import { useApiQuery } from "../hooks/useApiQuery";

export interface TokenData {
  business_id: ID;
  name: string;
  server: string;
  status: number;
  user_id: ID;
  id: ID;
  networkID: ID;
  created_at: Date;
  updated_at: Date;
  user: string;
}

export interface Token {
  data: TokenData[];
}

export const useApiToken = () => {
  const generateApiToken = useApiMutation<AuthResponse, FormData>({
    url: "/business-token",
    method: "POST",
  });

  const getApiToken = () =>
    useApiQuery<Token>(["api-token"], {
      url: `/business-token`,
      method: "GET",
    });

  return {
    generateApiToken,
    getApiToken
  };
};
