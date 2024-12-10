import { useQuery, QueryKey } from "@tanstack/react-query";
import { apiUrl } from "../../constants";
import { ApiError, ApiOptions } from "./types";
import { api } from "./apiFunction";

export const useApiQuery = <T>(key: QueryKey, options: Omit<ApiOptions, "url"> & { url: string }) => {
  return useQuery<T, ApiError>({
    queryKey: key,
    queryFn: () =>
      api<T>({
        ...options,
        url: `${apiUrl || ""}${options.url}`,
      }),
  });
};
