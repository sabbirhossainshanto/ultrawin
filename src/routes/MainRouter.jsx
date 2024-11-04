import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ScrollToTop from "../components/shared/ScrollToTop/ScrollToTop";
import App from "../App";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Event from "../pages/Event/Event";
import Deposit from "../pages/Deposit/Deposit";
import Register from "../pages/Register/Register";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import Account from "../pages/Account/Account";
import Withdraw from "../pages/Withdraw/Withdraw";
import InPlay from "../pages/InPlay/InPlay";
import StakeSetting from "../pages/StakeSetting/StakeSetting";
import BettingProfitLoss from "../pages/BettingProfitLoss/BettingProfitLoss";

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
            path: "/in-play",
            element: <InPlay />,
          },
          {
            path: "/stake-setting",
            element: <StakeSetting />,
          },

          {
            path: "/account",
            element: <Account />,
          },
          {
            path: "/deposit",
            element: <Deposit />,
          },
          {
            path: "/withdraw",
            element: <Withdraw />,
          },
          {
            path: "/betting-profit-loss",
            element: <BettingProfitLoss />,
          },
        ],
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
    ],
    {
      basename: import.meta.env.BASE_URL ?? "/",
    }
  );

  return <RouterProvider router={router} />;
};

export default MainRouter;
