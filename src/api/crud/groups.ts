import { AuthResponse, ID } from "../hooks/types";
import { useApiMutation } from "../hooks/useApiMutation";
import { useApiQuery } from "../hooks/useApiQuery";

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

export const groups = () => {
  const addGroup = useApiMutation<AuthResponse, FormData>({
    url: "/createtags",
    method: "POST",
  });

  const getGroupList = () =>
    useApiQuery<Group>(["group-list"], {
      url: `/view-groups`,
      method: "GET",
    });

  const updateGroup = (id: string) =>
    useApiMutation<AuthResponse, FormData>({
      url: `/updatetags/${id}`,
      method: "PUT",
    });

  return {
    addGroup,
    getGroupList,
    updateGroup,
  };
};
