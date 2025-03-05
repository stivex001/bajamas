import { AuthResponse, ID } from "../hooks/types";
import { useApiMutation } from "../hooks/useApiMutation";
import { useApiQuery } from "../hooks/useApiQuery";

export interface BlackListData {
  name: string;
  email: string;
  id: ID;
  created_at: Date;
  updated_at: Date;
  user: string;
}

export interface BlackListed {
  message: BlackListData[];
}

export const useBlackList = () => {
  const createBlacklist = useApiMutation<AuthResponse, FormData>({
    url: "/blasklisted",
    method: "POST",
  });

  const getBlackList = () =>
    useApiQuery<BlackListed>(["black-list"], {
      url: `/viewblacklisted`,
      method: "GET",
    });

  return {
    createBlacklist,
    getBlackList,
  };
};
