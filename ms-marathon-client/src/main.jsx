import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./router/router.jsx";
import AuthContextProvider from "./contexts/AuthContextProvider.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
      <Toaster position="top-center" reverseOrder={true} />
    </AuthContextProvider>
  </StrictMode>
);
