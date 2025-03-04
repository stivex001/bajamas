import { AuthResponse, ID } from "../hooks/types";
import { useApiMutation } from "../hooks/useApiMutation";
import { useApiQuery } from "../hooks/useApiQuery";

export interface SpamData {
  name: string;
  email: string;
  id: ID;
  created_at: Date;
  updated_at: Date;
  user: string;
}

export interface SpamReport {
  message: SpamData[]
}

export const useSpamReport = () => {
  const ReportSpam = useApiMutation<AuthResponse, FormData>({
    url: "/create_spamreport",
    method: "POST",
  });

  const getSpamList = () =>
    useApiQuery<SpamReport>(["spam-list"], {
      url: `/list_spamreport`,
      method: "GET",
    });

  return {
    ReportSpam,
    getSpamList,
  };
};
