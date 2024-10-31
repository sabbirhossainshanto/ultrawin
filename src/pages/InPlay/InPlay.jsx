import { useEffect, useState } from "react";
import useSportsBook from "../../hooks/useSportsBook";
import { useNavigate } from "react-router-dom";
import assets from "../../assets";
import SuspendedMobile from "../../components/shared/Suspended/SuspendedMobile";
import useGetNotification from "../../hooks/useGetNotification";
import InPlayIcon from "./InPlayIcon";

const InPlay = () => {
  const { notification } = useGetNotification();
  const { data } = useSportsBook(0);
  const [categories, setCategories] = useState([]);
  const eventName = { 4: "Cricket", 2: "Tennis", 1: "Football" };
  const navigate = useNavigate();

  const navigateGameList = (keys) => {
    navigate(`/${data[keys]?.eventTypeId}/${keys}`);
  };

  useEffect(() => {
    if (data) {
      const categories = Array.from(
        new Set(Object.values(data).map((item) => item.eventTypeId))
      );
      const sortedCategories = categories.sort((a, b) => {
        const order = { 4: 0, 1: 1, 2: 2 };
        return order[a] - order[b];
      });
      setCategories(sortedCategories);
    }
  }, [data]);

  return (
    <div>
      <div className="ios overscroll hydrated">
        <div slot="fixed" className="ios refresher-ios hydrated">
          <div className="ios hydrated">
            <div className="refresher-pulling">
              <div className="refresher-pulling-icon">
                <ion-icon
                  role="img"
                  className="ios hydrated"
                  aria-label="arrow down"
                />
              </div>
            </div>
            <div className="refresher-refreshing">
              <div className="refresher-refreshing-icon">
                <ion-spinner
                  className="ios spinner-circular hydrated"
                  role="progressbar"
                  style={{ animationDuration: "1400ms" }}
                />
              </div>
            </div>{" "}
          </div>
        </div>
        <div className="router-ctn">
          <div className="ds-view-ctn">
            <div className="punter-view" id="main-content">
              <div className="sports-view-ctn">
                <div>
                  <div className="exch-inplay-events-view ios hydrated">
                    <div
                      className="exch-inplay-events-table-section ios hydrated"
                      style={{
                        flex: "0 0calc(calc(12 / var(--ion-grid-columns, 12)) * 100%)",
                        width:
                          "calc(calc(12 / var(--ion-grid-columns, 12)) * 100%)",
                        maxWidth:
                          "calc(calc(12 / var(--ion-grid-columns, 12)) * 100%)",
                      }}
                    >
                      <div className="notifi-live-upcoming-tabs">
                        <div className="inplay-status-tabs">
                          <div className="time-tabs">
                            <button className="inplay-tab selected-inplay-tab">
                              LIVE MATCH
                            </button>
                            <button className="inplay-tab">UPCOMING</button>
                          </div>
                          <div className="search-tab">
                            <div className="search-games-ctn">
                              <input
                                className="search-games-input"
                                placeholder="Search events"
                                defaultValue
                              />
                              <svg
                                className="MuiSvgIcon-root"
                                focusable="false"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              >
                                <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm4.3 14.3c-.39.39-1.02.39-1.41 0L12 13.41 9.11 16.3c-.39.39-1.02.39-1.41 0a.9959.9959 0 010-1.41L10.59 12 7.7 9.11a.9959.9959 0 010-1.41c.39-.39 1.02-.39 1.41 0L12 10.59l2.89-2.89c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41L13.41 12l2.89 2.89c.38.38.38 1.02 0 1.41z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        {notification?.text && (
                          <div className="animation-notifi">
                            <div className="marquee-new">
                              <div className="notifi-item">
                                <img
                                  src={assets.notify}
                                  alt=""
                                  className="notifi-scroll-icon"
                                  loading="lazy"
                                  style={{ animationDuration: "57.6s" }}
                                />
                                <span
                                  className="notifi-mssage"
                                  style={{ animationDuration: "57.6s" }}
                                >
                                  {notification?.text}
                                </span>
                                <img
                                  src={assets.notify}
                                  alt=""
                                  className="notifi-scroll-icon"
                                  loading="lazy"
                                  style={{
                                    transform: "scaleX(-1)",
                                    animationDuration: "57.6s",
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        )}
                        <div className="search-tab" />
                      </div>
                      <div className="events-table-ctn live-events-ctn">
                        {categories?.map((category) => {
                          const filteredData = Object.entries(data)
                            .filter(
                              ([, value]) => value.eventTypeId === category
                            )
                            .reduce((obj, [key, value]) => {
                              obj[key] = value;
                              return obj;
                            }, {});
                          return (
                            <div
                              key={category}
                              className="MuiPaper-root MuiAccordion-root eventType-accordion Mui-expanded MuiAccordion-rounded MuiPaper-elevation1 MuiPaper-rounded"
                            >
                              <div className="MuiAccordionDetails-root inplay-events-tbl-container">
                                <div className="events-table-content table-ctn">
                                  <div className="MuiPaper-root MuiTableContainer-root MuiPaper-elevation1 MuiPaper-rounded">
                                    <table className="MuiTable-root events-table inplay-table">
                                      <thead className="MuiTableHead-root">
                                        <tr className="MuiTableRow-root MuiTableRow-head">
                                          <th
                                            className="MuiTableCell-root MuiTableCell-head schedule-cell schedule-cell-header br-inplay-start MuiTableCell-alignLeft"
                                            scope="col"
                                            colSpan={9}
                                          >
                                            <div className="icon-and-name">
                                              <div>
                                                <InPlayIcon
                                                  category={category}
                                                  eventName={eventName}
                                                />
                                              </div>
                                              <div className="ip-event-name">
                                                {eventName[category]}
                                              </div>
                                            </div>
                                          </th>
                                          <th
                                            className="MuiTableCell-root MuiTableCell-head odds-cell-head web-view br-inplay-middle MuiTableCell-alignCenter"
                                            scope="col"
                                            colSpan={1}
                                          >
                                            1
                                          </th>
                                          <th
                                            className="MuiTableCell-root MuiTableCell-head odds-cell-head web-view br-inplay-middle MuiTableCell-alignCenter"
                                            scope="col"
                                            colSpan={1}
                                          >
                                            X
                                          </th>
                                          <th
                                            className="MuiTableCell-root MuiTableCell-head odds-cell-head web-view br-inplay-end MuiTableCell-alignCenter"
                                            scope="col"
                                            colSpan={1}
                                          >
                                            2
                                          </th>
                                        </tr>
                                      </thead>
                                      <tbody className="MuiTableBody-root">
                                        {data &&
                                          Object.values(data).length > 0 &&
                                          Object.keys(filteredData)
                                            .sort(
                                              (keyA, keyB) =>
                                                data[keyA].sort -
                                                data[keyB].sort
                                            )
                                            .map((keys) => {
                                              if (!data?.[keys]?.visible) {
                                                return null;
                                              }
                                              return (
                                                <tr
                                                  onClick={() =>
                                                    navigateGameList(keys)
                                                  }
                                                  key={keys}
                                                  className="MuiTableRow-root bgc-white"
                                                >
                                                  <td
                                                    className="MuiTableCell-root MuiTableCell-body schedule-cell ipe-time-display web-view"
                                                    colSpan={1}
                                                  >
                                                    <img
                                                      className="live-img-display inplay-img-display"
                                                      src={assets.live}
                                                    />
                                                  </td>
                                                  <td
                                                    className="MuiTableCell-root MuiTableCell-body teams-cell mob-et-b-c"
                                                    colSpan={8}
                                                  >
                                                    <div className="all-markets-nav-link">
                                                      <div className="team-name-ctn">
                                                        <div className="temas-col">
                                                          <div className="home-away-team">
                                                            <div className="team-names">
                                                              {
                                                                data[keys]
                                                                  ?.player1
                                                              }
                                                              &nbsp; V &nbsp;{" "}
                                                              {
                                                                data[keys]
                                                                  ?.player2
                                                              }
                                                            </div>
                                                            <div className="team-names">
                                                              <span className="date" />
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div className="enabled-markets">
                                                          {data[keys]
                                                            ?.isFancy === 1 && (
                                                            <div className="market-enabled">
                                                              <div className="market-enabled-inner">
                                                                FC
                                                              </div>
                                                            </div>
                                                          )}

                                                          {data[keys]
                                                            ?.isBookmaker ===
                                                            1 && (
                                                            <div className="market-enabled">
                                                              <div className="market-enabled-inner">
                                                                BM
                                                              </div>
                                                            </div>
                                                          )}

                                                          {data[keys]
                                                            ?.isVirtual ===
                                                            1 && (
                                                            <div className="market-enabled">
                                                              <div className="market-enabled-inner">
                                                                VIR
                                                              </div>
                                                            </div>
                                                          )}

                                                          {data[keys]
                                                            ?.isGaming ===
                                                            1 && (
                                                            <div className="market-enabled bg-none">
                                                              <div className="market-enabled-inner">
                                                                <svg
                                                                  width="30"
                                                                  height="30"
                                                                  viewBox="0 0 50 30"
                                                                  fill="none"
                                                                >
                                                                  <path
                                                                    d="M49.9731 22.7112C49.8486 19.8464 49.3504 16.6703 48.603 13.681C47.8557 10.8162 46.9216 8.1383 45.8006 6.08316C41.4412 -1.57693 36.7081 -0.393665 31.0409 1.10099C29.2348 1.53693 27.3043 2.03514 25.3114 2.22197H24.6886C22.6957 2.03514 20.7652 1.53693 18.9591 1.10099C13.2919 -0.331388 8.55884 -1.57693 4.19944 6.14543C3.07845 8.20058 2.08202 10.8785 1.39697 13.7432C0.649646 16.7325 0.151429 19.9087 0.0268746 22.7734C-0.0976797 25.9496 0.213706 28.2538 0.898754 29.873C1.5838 31.3677 2.58024 32.3018 3.88806 32.6755C5.07132 32.9869 6.44142 32.8623 7.87379 32.2396C10.3026 31.2431 13.1051 29.1257 15.8453 26.5723C17.7759 24.704 21.3879 23.7699 25 23.7699C28.6121 23.7699 32.2242 24.704 34.1547 26.5723C36.8949 29.1257 39.6974 31.2431 42.1262 32.2396C43.5586 32.8 44.9287 32.9869 46.1119 32.6755C47.3575 32.3018 48.4162 31.4299 49.1012 29.8107C49.7863 28.2538 50.0977 25.9496 49.9731 22.7112ZM46.9838 28.9389C46.6102 29.8107 46.1119 30.309 45.4892 30.4958C44.8041 30.6826 43.9322 30.5581 42.9358 30.1844C40.7561 29.3125 38.2028 27.3819 35.7117 25.0154C33.3451 22.6489 29.1726 21.4656 25 21.4656C20.8274 21.4656 16.6549 22.6489 14.2261 24.8909C11.6727 27.2574 9.11934 29.2503 7.00191 30.0599C6.00548 30.4335 5.1336 30.6203 4.44855 30.3712C3.82578 30.1844 3.32756 29.6862 2.9539 28.8143C2.45568 27.631 2.20657 25.7005 2.33113 22.8357C2.45568 20.1578 2.89162 17.1062 3.63895 14.2415C4.324 11.5635 5.19588 9.07246 6.25459 7.20414C9.67983 1.03871 13.6656 2.03514 18.3986 3.28069C20.3292 3.7789 22.3221 4.27712 24.5018 4.46395C24.5641 4.46395 24.5641 4.46395 24.6263 4.46395H25.3114C25.3737 4.46395 25.3737 4.46395 25.4359 4.46395C27.6779 4.27712 29.6708 3.7789 31.6014 3.28069C36.3344 2.09742 40.3202 1.03871 43.7454 7.20414C44.8041 9.07246 45.676 11.5013 46.3611 14.2415C47.0461 17.1062 47.5443 20.0955 47.6689 22.8357C47.7934 25.7005 47.5443 27.631 46.9838 28.9389Z"
                                                                    fill="currentColor"
                                                                  ></path>
                                                                  <path
                                                                    d="M19.2705 10.567C18.6477 10.0065 17.9004 9.57061 17.0285 9.50833C16.9662 8.69873 16.5926 7.88912 16.0321 7.32863L15.9698 7.26635C15.2848 6.5813 14.4129 6.20764 13.4164 6.20764C12.42 6.20764 11.4859 6.64358 10.8631 7.26635C10.3026 7.82685 9.86665 8.63645 9.80437 9.50833C8.93249 9.57061 8.18517 9.94427 7.56239 10.5048L7.50012 10.567C6.81507 11.2521 6.44141 12.124 6.44141 13.1204C6.44141 14.1168 6.87735 15.051 7.50012 15.6738C8.12289 16.2965 8.87021 16.6702 9.80437 16.7325C9.86665 17.6044 10.2403 18.414 10.8631 18.9745C11.5481 19.6595 12.42 20.0332 13.4164 20.0332C14.4129 20.0332 15.347 19.5972 15.9698 18.9745C16.5303 18.3517 16.9662 17.6044 17.0285 16.7325C17.9004 16.6702 18.71 16.2965 19.2705 15.6738C19.9555 14.9887 20.3292 14.1168 20.3292 13.1204C20.3292 12.124 19.8933 11.1898 19.2705 10.567ZM17.7136 14.0546C17.4645 14.3037 17.1531 14.4282 16.7794 14.4282H15.9075C15.2848 14.4282 14.7243 14.9264 14.7243 15.6115V16.4211C14.7243 16.7948 14.5997 17.1061 14.3506 17.3552C14.1015 17.6044 13.7901 17.7289 13.4164 17.7289C13.0428 17.7289 12.7314 17.6044 12.4823 17.3552C12.2332 17.1061 12.1086 16.7948 12.1086 16.4211V15.5492C12.1086 14.9264 11.6104 14.3659 10.9254 14.3659H10.0535C9.67982 14.3659 9.36843 14.2414 9.11932 13.9923C8.93249 13.8055 8.74566 13.4941 8.74566 13.1204C8.74566 12.7467 8.87021 12.4354 9.11932 12.1862C9.11932 12.1862 9.11932 12.1862 9.1816 12.124C9.43071 11.9371 9.74209 11.8126 10.0535 11.8126H10.9254C11.5481 11.8126 12.1086 11.3144 12.1086 10.6293V9.75744C12.1086 9.38377 12.2332 9.07239 12.4823 8.82328C12.7314 8.57417 13.0428 8.44962 13.4164 8.44962C13.7901 8.44962 14.1015 8.57417 14.3506 8.82328C14.3506 8.82328 14.3506 8.82328 14.4129 8.88556C14.5997 9.13467 14.7243 9.44605 14.7243 9.75744V10.6293C14.7243 11.2521 15.2225 11.8126 15.9075 11.8126H16.7794C17.1531 11.8126 17.4645 11.9371 17.7136 12.1862C17.9627 12.4354 18.0872 12.7467 18.0872 13.1204C18.0872 13.4941 17.9627 13.8054 17.7136 14.0546Z"
                                                                    fill="currentColor"
                                                                  ></path>
                                                                  <path
                                                                    d="M35.8359 10.8784C37.0398 10.8784 38.0156 9.90256 38.0156 8.69874C38.0156 7.49493 37.0398 6.51904 35.8359 6.51904C34.6321 6.51904 33.6562 7.49493 33.6562 8.69874C33.6562 9.90256 34.6321 10.8784 35.8359 10.8784Z"
                                                                    fill="currentColor"
                                                                  ></path>
                                                                  <path
                                                                    d="M35.8359 19.7218C37.0398 19.7218 38.0156 18.7459 38.0156 17.5421C38.0156 16.3383 37.0398 15.3624 35.8359 15.3624C34.6321 15.3624 33.6562 16.3383 33.6562 17.5421C33.6562 18.7459 34.6321 19.7218 35.8359 19.7218Z"
                                                                    fill="currentColor"
                                                                  ></path>
                                                                  <path
                                                                    d="M31.4146 15.3002C32.6184 15.3002 33.5943 14.3243 33.5943 13.1205C33.5943 11.9167 32.6184 10.9408 31.4146 10.9408C30.2107 10.9408 29.2349 11.9167 29.2349 13.1205C29.2349 14.3243 30.2107 15.3002 31.4146 15.3002Z"
                                                                    fill="currentColor"
                                                                  ></path>
                                                                  <path
                                                                    d="M40.2578 15.3002C41.4616 15.3002 42.4375 14.3243 42.4375 13.1205C42.4375 11.9167 41.4616 10.9408 40.2578 10.9408C39.054 10.9408 38.0781 11.9167 38.0781 13.1205C38.0781 14.3243 39.054 15.3002 40.2578 15.3002Z"
                                                                    fill="currentColor"
                                                                  ></path>
                                                                </svg>
                                                              </div>
                                                            </div>
                                                          )}
                                                        </div>
                                                      </div>

                                                      <div className="mob-odds-row new-odds-row">
                                                        <img
                                                          className="live-img-display inplay-img-display"
                                                          src={assets.live}
                                                        />
                                                        <div className="mob-odds-block">
                                                          <div className="mob-exchange-btn-odd-row">
                                                            <div className="mob-exch-odd-view">
                                                              {data[keys]
                                                                ?.status ===
                                                                "OPEN" &&
                                                              data[keys][0] ? (
                                                                <div className="back-odd mob-exch-odd-button">
                                                                  <div className="mob-exch-odd-button-content">
                                                                    <div className="price">
                                                                      {" "}
                                                                      {
                                                                        data[
                                                                          keys
                                                                        ]?.[0]
                                                                          ?.ex
                                                                          ?.availableToBack[0]
                                                                          ?.price
                                                                      }
                                                                    </div>
                                                                    <div className="size">
                                                                      {" "}
                                                                      {
                                                                        data[
                                                                          keys
                                                                        ]?.[0]
                                                                          ?.ex
                                                                          ?.availableToBack[0]
                                                                          ?.size
                                                                      }
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              ) : (
                                                                <SuspendedMobile
                                                                  back={true}
                                                                />
                                                              )}
                                                            </div>
                                                            <div className="mob-exch-odd-view">
                                                              {data[keys]
                                                                ?.status ===
                                                                "OPEN" &&
                                                              data[keys][0] ? (
                                                                <div className="lay-odd mob-exch-odd-button">
                                                                  <div className="mob-exch-odd-button-content">
                                                                    <div className="price">
                                                                      {" "}
                                                                      {
                                                                        data[
                                                                          keys
                                                                        ]?.[0]
                                                                          ?.ex
                                                                          ?.availableToLay[0]
                                                                          ?.price
                                                                      }
                                                                    </div>
                                                                    <div className="size">
                                                                      {" "}
                                                                      {
                                                                        data[
                                                                          keys
                                                                        ]?.[0]
                                                                          ?.ex
                                                                          ?.availableToLay[0]
                                                                          ?.size
                                                                      }
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              ) : (
                                                                <SuspendedMobile
                                                                  lay={true}
                                                                />
                                                              )}
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div className="mob-odds-block">
                                                          <div className="mob-exchange-btn-odd-row">
                                                            <div className="mob-exch-odd-view">
                                                              {data[keys]
                                                                ?.status ===
                                                                "OPEN" &&
                                                              data[keys][2] ? (
                                                                <div className="back-odd mob-exch-odd-button">
                                                                  <div className="mob-exch-odd-button-content">
                                                                    <div className="price">
                                                                      {" "}
                                                                      {
                                                                        data[
                                                                          keys
                                                                        ]?.[2]
                                                                          ?.ex
                                                                          ?.availableToBack[0]
                                                                          ?.price
                                                                      }
                                                                    </div>
                                                                    <div className="size">
                                                                      {" "}
                                                                      {
                                                                        data[
                                                                          keys
                                                                        ]?.[2]
                                                                          ?.ex
                                                                          ?.availableToBack[0]
                                                                          ?.size
                                                                      }
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              ) : (
                                                                <SuspendedMobile
                                                                  back={true}
                                                                />
                                                              )}
                                                            </div>
                                                            <div className="mob-exch-odd-view">
                                                              {data[keys]
                                                                ?.status ===
                                                                "OPEN" &&
                                                              data[keys][2] ? (
                                                                <div className="lay-odd mob-exch-odd-button">
                                                                  <div className="mob-exch-odd-button-content">
                                                                    <div className="price">
                                                                      {" "}
                                                                      {
                                                                        data[
                                                                          keys
                                                                        ]?.[2]
                                                                          ?.ex
                                                                          ?.availableToLay[0]
                                                                          ?.price
                                                                      }
                                                                    </div>
                                                                    <div className="size">
                                                                      {" "}
                                                                      {
                                                                        data[
                                                                          keys
                                                                        ]?.[2]
                                                                          ?.ex
                                                                          ?.availableToLay[0]
                                                                          ?.size
                                                                      }
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              ) : (
                                                                <SuspendedMobile
                                                                  lay={true}
                                                                />
                                                              )}
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div className="mob-odds-block">
                                                          <div className="mob-exchange-btn-odd-row">
                                                            <div className="mob-exch-odd-view">
                                                              {data[keys]
                                                                ?.status ===
                                                                "OPEN" &&
                                                              data[keys][1] ? (
                                                                <div className="back-odd mob-exch-odd-button">
                                                                  <div className="mob-exch-odd-button-content">
                                                                    <div className="price">
                                                                      {" "}
                                                                      {
                                                                        data[
                                                                          keys
                                                                        ]?.[1]
                                                                          ?.ex
                                                                          ?.availableToBack[0]
                                                                          ?.price
                                                                      }
                                                                    </div>
                                                                    <div className="size">
                                                                      {" "}
                                                                      {
                                                                        data[
                                                                          keys
                                                                        ]?.[1]
                                                                          ?.ex
                                                                          ?.availableToBack[0]
                                                                          ?.size
                                                                      }
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              ) : (
                                                                <SuspendedMobile
                                                                  back={true}
                                                                />
                                                              )}
                                                            </div>
                                                            <div className="mob-exch-odd-view">
                                                              {data[keys]
                                                                ?.status ===
                                                                "OPEN" &&
                                                              data[keys][1] ? (
                                                                <div className="lay-odd mob-exch-odd-button">
                                                                  <div className="mob-exch-odd-button-content">
                                                                    <div className="price">
                                                                      {" "}
                                                                      {
                                                                        data[
                                                                          keys
                                                                        ]?.[1]
                                                                          ?.ex
                                                                          ?.availableToLay[0]
                                                                          ?.price
                                                                      }
                                                                    </div>
                                                                    <div className="size">
                                                                      {" "}
                                                                      {
                                                                        data[
                                                                          keys
                                                                        ]?.[1]
                                                                          ?.ex
                                                                          ?.availableToLay[0]
                                                                          ?.size
                                                                      }
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              ) : (
                                                                <SuspendedMobile
                                                                  lay={true}
                                                                />
                                                              )}
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </td>
                                                </tr>
                                              );
                                            })}
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="MuiCollapse-container MuiCollapse-entered"
                                style={{ minHeight: "0px" }}
                              >
                                <div className="MuiCollapse-wrapper">
                                  <div className="MuiCollapse-wrapperInner">
                                    <div role="region" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>{" "}
                    </div>
                    <div
                      className="exch-providers pos-sticky-10 ios hydrated"
                      style={{
                        flex: "0 0calc(calc(12 / var(--ion-grid-columns, 12)) * 100%)",
                        width:
                          "calc(calc(12 / var(--ion-grid-columns, 12)) * 100%)",
                        maxWidth:
                          "calc(calc(12 / var(--ion-grid-columns, 12)) * 100%)",
                      }}
                    >
                      <div className="trending-games-ctn">
                        <div className="trending-game-heading">
                          <div>Trending Games</div>
                          <a className="see-more" href="/casino">
                            See More
                            <svg
                              className="MuiSvgIcon-root"
                              focusable="false"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
                            </svg>
                          </a>
                        </div>
                        <div className="games-container">
                          <div className="trending-game-card">
                            <img
                              loading="lazy"
                              src="https://cdn.dreamdelhi.com/trending/Diamonds.webp"
                            />
                          </div>
                          <div className="trending-game-card">
                            <img
                              loading="lazy"
                              src="https://cdn.dreamdelhi.com/trending/Dice.webp"
                            />
                          </div>
                          <div className="trending-game-card">
                            <img
                              loading="lazy"
                              src="https://cdn.dreamdelhi.com/trending/Hilo.webp"
                            />
                          </div>
                          <div className="trending-game-card">
                            <img
                              loading="lazy"
                              src="https://cdn.dreamdelhi.com/trending/Limbo.webp"
                            />
                          </div>
                          <div className="trending-game-card">
                            <img
                              loading="lazy"
                              src="https://cdn.dreamdelhi.com/plinko.webp"
                            />
                          </div>
                          <div className="trending-game-card">
                            <img
                              loading="lazy"
                              src="https://cdn.dreamdelhi.com/trending/xroulette.png"
                            />
                          </div>
                        </div>
                      </div>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rules-regulations-footer">
            <div>Rules &amp; Regulations © 2024</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InPlay;
