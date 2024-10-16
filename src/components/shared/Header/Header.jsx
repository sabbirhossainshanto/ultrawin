import { useDispatch, useSelector } from "react-redux";
import assets from "../../../assets";
import { setShowLeftSidebar } from "../../../redux/features/global/globalSlice";
import { useNavigate } from "react-router-dom";
import useBalance from "../../../hooks/useBalance";
import useBonusBalance from "../../../hooks/useBonusBalance";

const Header = () => {
  const { balance } = useBalance();
  const { bonusBalance } = useBonusBalance();
  const { token, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
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

        {!token ? (
          <>
            <button
              onClick={() => navigate("/login")}
              className="cb cb-variant-1 sh-new-btn"
            >
              login
            </button>
            <button className="cb cb-variant-2 sh-new-btn">signup</button>
          </>
        ) : (
          <>
            <div className="bal-exp-btns">
              <div className="bal-exp-btn username-sb">{user}</div>
              <div className="bal-exp-btn balance-sb">
                Bal:{balance?.availBalance}
                <svg
                  className="MuiSvgIcon-root input-tooltip"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  title="Cashable : 0 Non-cashable :0.00"
                >
                  <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                </svg>
              </div>
            </div>
            <div className="bal-exp-btns">
              <div className="bal-exp-btn">
                Bonus: {bonusBalance?.availBalance}
              </div>
              <div className="bal-exp-btn">Exp:{balance?.deductedExposure}</div>
            </div>
          </>
        )}

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
