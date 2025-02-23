import { AuthResponse, ID } from "../hooks/types";
import { useApiMutation } from "../hooks/useApiMutation";
import { useApiQuery } from "../hooks/useApiQuery";

export interface TemplateList {
  design_content: string;
  template_name: string;
  template_describ: string;
  design_html: string;
  status: number;
  id: ID;
  business_id: ID;
  template_type: string;
}

export interface TemplateProps {
  message?: TemplateList[];
}

export const useTemplates = () => {
  const buyElectricity = useApiMutation<AuthResponse, FormData>({
    url: "/usertemplate",
    method: "POST",
  });

  const getGeneralTemplatesList = () =>
    useApiQuery<TemplateProps>(["general-template"], {
      url: `/generaltemp`,
      method: "GET",
    });

  const getUserTemplatesList = () =>
    useApiQuery<TemplateProps>(["user-template"], {
      url: `/viewusertemp`,
      method: "GET",
    });

  return {
    buyElectricity,
    getGeneralTemplatesList,
    getUserTemplatesList,
  };
};
