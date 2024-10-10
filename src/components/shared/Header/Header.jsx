import { useDispatch } from "react-redux";
import assets from "../../../assets";
import { setShowLeftSidebar } from "../../../redux/features/global/globalSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className="app-sub-header">
      <div className="MuiTabs-root actions-list web-view">
        <div
          className="MuiTabs-scrollable"
          style={{
            width: "99px",
            height: "99px",
            position: "absolute",
            top: "-9999px",
            overflow: "scroll",
          }}
        ></div>
        <div
          className="MuiTabs-scroller MuiTabs-scrollable"
          style={{ marginBottom: "0px" }}
        >
          <div className="MuiTabs-flexContainer" role="tablist">
            <a
              aria-current="page"
              className="nav-link active"
              value="0"
              href="/home"
            >
              <button
                className="MuiButtonBase-root MuiButton-root MuiButton-text nav-link-btn"
                type="button"
              >
                <span className="MuiButton-label">home</span>
                <span className="MuiTouchRipple-root"></span>
              </button>
            </a>
            <a className="nav-link" value="1" href="/exchange_sports/inplay">
              <button
                className="MuiButtonBase-root MuiButton-root MuiButton-text nav-link-btn"
                type="button"
              >
                <span className="MuiButton-label">Inplay</span>
                <span className="MuiTouchRipple-root"></span>
              </button>
            </a>
            <a className="nav-link" value="2" href="/login">
              <button
                className="MuiButtonBase-root MuiButton-root MuiButton-text nav-link-btn"
                type="button"
              >
                <span className="MuiButton-label">Sportsbook</span>
                <span className="MuiTouchRipple-root"></span>
              </button>
            </a>
            <a className="nav-link" value="3" href="/casino">
              <button
                className="MuiButtonBase-root MuiButton-root MuiButton-text nav-link-btn"
                type="button"
              >
                <span className="MuiButton-label">Live Casino</span>
                <span className="MuiTouchRipple-root"></span>
              </button>
            </a>
            <a
              className="nav-link"
              value="4"
              href="/exchange_sports/multi-markets"
            >
              <button
                className="MuiButtonBase-root MuiButton-root MuiButton-text nav-link-btn"
                type="button"
              >
                <span className="MuiButton-label">Multi Markets</span>
                <span className="MuiTouchRipple-root"></span>
              </button>
            </a>
          </div>
          <span
            className="jss53 jss55 MuiTabs-indicator"
            style={{ left: "84.625px", width: "57.4062px" }}
          ></span>
        </div>
      </div>
      <div
        onClick={() => dispatch(setShowLeftSidebar(true))}
        className="logo-wrapper"
        style={{ cursor: "pointer" }}
      >
        <div className="side-bar-icon-div mob-view">
          <img
            src={assets.sidebarIcon}
            alt="sidebar-icon"
            className="sb-menu-bar-icon"
          />
        </div>
      </div>
      <div className="whatsapp-login-signup">
        {/* <button className="new-whatsapp web-view">
          <img
            src="data:image/png;base64"
            height="28"
            width="28"
            alt="whatsapp"
          />
        </button> */}
        <button className="cb cb-variant-1 sh-new-btn">login</button>
        <button className="cb cb-variant-2 sh-new-btn">signup</button>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "0px 5px",
          }}
        >
          <button
            className="MuiButtonBase-root MuiButton-root MuiButton-text jss41"
            type="button"
            aria-controls="theme-menu"
            aria-haspopup="true"
          >
            <span className="MuiButton-label">
              <img src={assets.theme} />
            </span>
            <span className="MuiTouchRipple-root"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
