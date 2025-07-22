import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error: unknown) => {
      console.log("err", error);
      toast.error(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        (error?.response?.data?.error_messages as string) ??
          "خطایی در سرور رخ داده است"
      );
      console.log(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        (error?.response?.data?.error_messages as string) ??
          "خطایی در سرور رخ داده است"
      );
    },
  }),
  mutationCache: new MutationCache({
    onError: (error: unknown) => {
      toast.error(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        (error?.response?.data?.error_messages as string) ??
          "خطایی در سرور رخ داده است"
      );
      console.log(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        (error?.response?.data?.error_messages as string) ??
          "خطایی در سرور رخ داده است"
      );
    },
  }),
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      throwOnError: true,
      refetchOnMount: true,
      staleTime: 1000 * 60 * 60 * 24,
      gcTime: 1000 * 60 * 60 * 24,
    },
  },
});
