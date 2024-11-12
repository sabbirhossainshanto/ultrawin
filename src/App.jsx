import { useEffect } from "react";
import disableDevtool from "disable-devtool";
import { logout } from "./redux/features/auth/authSlice";
import { settings } from "./api";
import MainLayout from "./components/layout/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();
  const { group } = useSelector((state) => state.global);
  const disabledDevtool = settings.disabledDevtool;
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, group]);

  /* Disable devtool */
  useEffect(() => {
    /* If disable devtool true in notice.json then logout the user */
    if (disabledDevtool) {
      disableDevtool({
        ondevtoolopen: (type) => {
          const info = "devtool opened!; type =" + type;
          if (info) {
            dispatch(logout());
            window.location.href = "https://www.google.com/";
          }
        },
      });
    }
  }, [disabledDevtool, dispatch]);
  return <MainLayout />;
};

export default App;
