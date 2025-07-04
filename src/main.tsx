import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./App/store.ts";
import { createBrowserRouter, RouterProvider } from "react-router";
import CartPage from "./pages/CartPage.tsx";

const router = createBrowserRouter([
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/",
    element: <App />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
