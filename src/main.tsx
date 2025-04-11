import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "swiper/swiper-bundle.css";
import App from "./App.tsx";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ModalCloseProvider } from "./context/SheetCloseModal.tsx";
import { toast, Toaster } from "sonner";

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (err) => {
      console.log(err, "err");

      if (
        err?.message === "invalid signature" ||
        err?.message === "Unauthenticated." ||
        err?.message === "jwt expired"
      ) {
        toast.warning("Oops!! Kindly Login");
        window.location.href = "/auth/login";
      }
    },
  }),
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ModalCloseProvider>
        <Toaster position="top-center" theme="system" richColors />
        <App />
      </ModalCloseProvider>
    </QueryClientProvider>
  </StrictMode>
);
