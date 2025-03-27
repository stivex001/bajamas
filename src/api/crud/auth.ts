import { AuthResponse, ID } from "../hooks/types";
import { useApiMutation } from "../hooks/useApiMutation";
import { useApiQuery } from "../hooks/useApiQuery";

export interface CurrentUserData {
  email: string;
  name: string;
  password: string;
  phone:string
  business:string
  address1:string
  address2:string
  country:string
  state:string
  city:string
}

export interface CurrentUser {
  access_token?: any;
  name: string;
  profile: string;
  new: string;
  confirmPassword: string;
  password: string;
  confirm_pass: string;
  createdAt: string;
  id: ID;
  companyId: ID;
  isActive: boolean;
  data: CurrentUserData;
  referer_bonus_paid: string;
}

export interface Wallet {
  data: any;
  bonus: any;
}

export const auth = () => {
  const registerUser = useApiMutation<AuthResponse, FormData>({
    url: "/registering ",
    method: "POST",
  });

  const loginUser = useApiMutation<AuthResponse, FormData>({
    url: "/login ",
    method: "POST",
  });

  const forgotPassword = useApiMutation<AuthResponse, FormData>({
    url: "/forgetpas",
    method: "POST",
  });

  const resetPassword = useApiMutation<AuthResponse, FormData>({
    url: "/reset-password",
    method: "POST",
  });

  const changePassword = useApiMutation<AuthResponse, FormData>({
    url: "/changepassword",
    method: "POST",
  });

  const updatePassword = useApiMutation<AuthResponse, FormData>({
    url: "/updatepassword",
    method: "POST",
  });

  const updateProfile = useApiMutation<AuthResponse, FormData>({
    url: "/update-user-info",
    method: "PUT",
  });

  const uploadProfilePics = useApiMutation<AuthResponse, FormData>({
    url: "/upload-profile-pix",
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "application/json",
    },
  });

  const getCurrentUser = () =>
    useApiQuery<CurrentUser>(["currentUser"], {
      url: `/viewuserinfo`,
      method: "GET",
    });

  return {
    loginUser,
    registerUser,
    forgotPassword,
    resetPassword,
    updatePassword,
    changePassword,
    getCurrentUser,
    updateProfile,
    uploadProfilePics
  };
};
