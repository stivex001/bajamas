import { AuthResponse, ID } from "../hooks/types";
import { useApiMutation } from "../hooks/useApiMutation";
import { useApiQuery } from "../hooks/useApiQuery";

export interface CurrentUserData {
  email: string;
  name: string;
 password: string;
}

export interface CurrentUser {
  access_token?: any;
  name: string;
  role: string;
  new: string;
  confirmPassword: string;
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
    url: "/reset-password-request",
    method: "POST",
  });

  const resetPassword = useApiMutation<AuthResponse, FormData>({
    url: "/reset-password",
    method: "POST",
  });

  const changePassword = useApiMutation<AuthResponse, FormData>({
    url: "/change-password",
    method: "POST",
  });

  const updateProfile = useApiMutation<AuthResponse, FormData>({
    url: "/profile-update",
    method: "POST",
  });

  const getCurrentUser = () =>
    useApiQuery<CurrentUser>(["currentUser"], {
      url: `/profile`,
      method: "GET",
    });

  const getUserWallet = () =>
    useApiQuery<Wallet>(["wallet"], {
      url: `/wallet-balance`,
      method: "GET",
    });

  return {
    loginUser,
    registerUser,
    forgotPassword,
    resetPassword,
    changePassword,
    getCurrentUser,
    getUserWallet,
    updateProfile,
  };
};
