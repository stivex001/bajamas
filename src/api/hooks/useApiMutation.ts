import { useMutation } from "@tanstack/react-query";
import { apiUrl } from "../../constants";
import { ApiError, ApiOptions, HttpMethod } from "./types";
import { api } from "./apiFunction";



export const useApiMutation = <T, TVariables>(
  options: Omit<ApiOptions, "method" | "url"> & { method?: HttpMethod; url: string}
) => {
  return useMutation<T, ApiError, TVariables>({
    mutationFn: (variables) =>
      api<T>({
        ...options,
        method: options.method || "POST",
        url: `${apiUrl || ""}${options.url}`,
        data: variables,
      }),
    onSuccess: () => {
      // Optionally, you can invalidate queries here
      //   queryClient.invalidateQueries([/* your query key */]);
    },
  });
};