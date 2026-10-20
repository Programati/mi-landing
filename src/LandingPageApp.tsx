import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router/dom";

import { appRouter } from "@/app.router";
import { queryClient } from "@/lib/queryClient";

export const LandingPageApp = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={appRouter} />
      </QueryClientProvider>
    </>
  );
};
