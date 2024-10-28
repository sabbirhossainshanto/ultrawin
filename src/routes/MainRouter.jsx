import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ScrollToTop from "../components/shared/ScrollToTop/ScrollToTop";
import App from "../App";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Event from "../pages/Event/Event";
import Deposit from "../pages/Deposit/Deposit";

const MainRouter = () => {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: (
          <>
            <ScrollToTop />
            <App />
          </>
        ),
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "/:eventTypeId/:eventId",
            element: <Event />,
          },
          {
            path: "/deposit",
            element: <Deposit />,
          },
        ],
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
    {
      basename: import.meta.env.BASE_URL ?? "/",
    }
  );

  return <RouterProvider router={router} />;
};

export default MainRouter;
