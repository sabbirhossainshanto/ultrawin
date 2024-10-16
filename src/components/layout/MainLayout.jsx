import { Outlet } from "react-router-dom";
import Header from "../shared/Header/Header";
import LeftSidebar from "../ui/LeftSidebar/LeftSidebar";
import MobileHeader from "../shared/Header/MobileHeader";
import MobileSidebar from "../ui/LeftSidebar/MobileSidebar";

const MainLayout = () => {
  return (
    <>
      <div className="MuiBox-root jss31"></div>
      <div className="ion-app md ion-page hydrated">
        <LeftSidebar />
        <div className="support">
          <Header />
          <Outlet />
          <MobileHeader />
        </div>
      </div>
      {<MobileSidebar />}
    </>
  );
};

export default MainLayout;
