import { AuthResponse, ID } from "../hooks/types";
import { useApiMutation } from "../hooks/useApiMutation";
// import { useApiQuery } from "../hooks/useApiQuery";

export interface GroupData {
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

export interface Group {
  message: GroupData[];
}

export const useAi = () => {
  const askAi = useApiMutation<AuthResponse, FormData>({
    url: "/aimessage",
    method: "POST",
  });

  // const getGroupList = () =>
  //   useApiQuery<Group>(["group-list"], {
  //     url: `/view-groups`,
  //     method: "GET",
  //   });

  return {
    askAi,
  };
};
