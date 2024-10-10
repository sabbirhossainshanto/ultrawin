import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ScrollToTop from "../components/shared/ScrollToTop/ScrollToTop";
import App from "../App";
import Home from "../pages/Home/Home";

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
        ],
      },
    ],
    {
      basename: import.meta.env.BASE_URL ?? "/",
    }
  );

  return <RouterProvider router={router} />;
};

export default MainRouter;
