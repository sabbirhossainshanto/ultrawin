import { Outlet } from "react-router-dom";
import Header from "../shared/Header/Header";
import LeftSidebar from "../ui/LeftSidebar/LeftSidebar";
import MobileHeader from "../shared/Header/MobileHeader";
import MobileSidebar from "../ui/LeftSidebar/MobileSidebar";
import { settings } from "../../api";
import { AndroidView } from "react-device-detect";
import AppPopup from "../shared/Header/AppPopUp";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import disableDevtool from "disable-devtool";
import { logout } from "../../redux/features/auth/authSlice";

const MainLayout = () => {
  const dispatch = useDispatch();
  const disabledDevtool = settings.disabledDevtool;
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    const expiryTime = localStorage.getItem("installPromptExpiryTime");
    const currentTime = new Date().getTime();
    if (!expiryTime || currentTime > expiryTime) {
      localStorage.removeItem("installPromptExpiryTime");
      setIsModalOpen(true);
    }
  }, [isModalOpen]);

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
  return (
    <>
      <div className="MuiBox-root jss31"></div>
      <div className="ion-app md ion-page hydrated">
        <LeftSidebar />
        <div className="support">
          {settings?.apkLink && isModalOpen && (
            <AndroidView>
              <AppPopup setIsModalOpen={setIsModalOpen} />
            </AndroidView>
          )}
          <Header />

          <div
            style={{
              marginBottom: "75px",
              minHeight: "calc(100vh - 114px)",
            }}
          >
            <Outlet />
          </div>
          {/* <div className="rules-regulations-footer">
            <div>Rules &amp; Regulations © 2024</div>
          </div> */}
          <MobileHeader />
        </div>
      </div>
      <MobileSidebar />
    </>
  );
};

export default MainLayout;
