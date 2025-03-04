import { AuthResponse, ID } from "../hooks/types";
import { useApiMutation } from "../hooks/useApiMutation";
import { useApiQuery } from "../hooks/useApiQuery";

export interface CollaboratorData {
  name: string;
  email: string;
  id: ID;
  created_at: Date;
  updated_at: Date;
  user: string;
}

export interface Collaborator {
  message: CollaboratorData[]
}

export const useCollaborator = () => {
  const inviteUser = useApiMutation<AuthResponse, FormData>({
    url: "/inviteusers",
    method: "POST",
  });

  const getCollaboratorList = () =>
    useApiQuery<Collaborator>(["collaborator-list"], {
      url: `/collaborations`,
      method: "GET",
    });

  return {
    inviteUser,
    getCollaboratorList,
  };
};
