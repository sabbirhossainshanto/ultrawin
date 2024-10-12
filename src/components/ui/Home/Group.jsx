import { useNavigate } from "react-router-dom";
import assets from "../../../assets";
import { formatDate } from "../../../utils/formateDate";
import Suspended from "../../shared/Suspended/Suspended";
import MobileGroup from "./MobileGroup";

const Group = ({ data }) => {
  const navigate = useNavigate();
  const navigateGameList = (keys) => {
    navigate(`/game-details/${data[keys]?.eventTypeId}/${keys}`);
  };
  const filterSports =
    data &&
    Object.keys(data)?.filter((key) => {
      return data?.[key]?.visible === true;
    });

  if (filterSports?.length === 0) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          paddingTop: "30px",
          color: "white",
        }}
      >
        <div>
          <span> No events available right now</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <div
        className="md hydrated"
        style={{ "-offsetTop": "0px", "-offsetBottom": "0px" }}
      >
        <div className="router-ctn">
          <div className="ds-view-ctn">
            <div className="punter-view" id="main-content">
              <div className="sports-view-ctn">
                <div>
                  <div className="sports-home-view md hydrated">
                    <div
                      className="events-table-section md hydrated"
                      // size-lg="9.2"
                      // size-md="8.5"
                      // style={{}}
                    >
                      <div className="events-table-ctn">
                        <div className="events-table-content table-ctn">
                          <div className="MuiPaper-root MuiTableContainer-root MuiPaper-elevation1 MuiPaper-rounded">
                            <table
                              className="MuiTable-root events-table"
                              style={{ width: "100%" }}
                            >
                              <thead className="MuiTableHead-root et-head">
                                <tr className="MuiTableRow-root MuiTableRow-head">
                                  <th
                                    className="MuiTableCell-root MuiTableCell-head schedule-cell-header br-inplay-start mob-changes MuiTableCell-alignLeft"
                                    scope="col"
                                    colSpan={9}
                                  >
                                    Match Schedule
                                  </th>
                                  <th
                                    className="MuiTableCell-root MuiTableCell-head odds-cell-head schedule-cell br-inplay-middle mob-changes MuiTableCell-alignCenter"
                                    scope="col"
                                    colSpan={1}
                                  >
                                    1
                                  </th>
                                  <th
                                    className="MuiTableCell-root MuiTableCell-head odds-cell-head br-inplay-middle mob-changes MuiTableCell-alignCenter"
                                    scope="col"
                                    colSpan={1}
                                  >
                                    X
                                  </th>
                                  <th
                                    className="MuiTableCell-root MuiTableCell-head odds-cell-head br-inplay-end mob-changes MuiTableCell-alignCenter"
                                    scope="col"
                                    colSpan={1}
                                  >
                                    2
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="MuiTableBody-root">
                                {data && Object.values(data).length > 0 ? (
                                  filterSports
                                    ?.sort((keyA, keyB) => {
                                      return data[keyA].sort - data[keyB].sort;
                                    })
                                    ?.sort((keyA, keyB) => {
                                      if (
                                        data[keyA].timeStatus === "Suspended" &&
                                        data[keyB].timeStatus !== "Suspended"
                                      ) {
                                        return 1;
                                      }
                                      if (
                                        data[keyA].timeStatus !== "Suspended" &&
                                        data[keyB].timeStatus === "Suspended"
                                      ) {
                                        return -1;
                                      }
                                      return 0;
                                    })
                                    .map((keys, index) => {
                                      return (
                                        <tr
                                          key={index}
                                          className="MuiTableRow-root bgc-white"
                                        >
                                          <td
                                            colSpan={9}
                                            className="MuiTableCell-root MuiTableCell-body teams-cell mob-et-b-c"
                                          >
                                            <a
                                              style={{ cursor: "pointer" }}
                                              className="all-markets-nav-link"
                                              onClick={() =>
                                                navigateGameList(keys)
                                              }
                                            >
                                              <div className="web-view team-name-ctn">
                                                <div className="temas-col">
                                                  {data?.[keys]?.inPlay ? (
                                                    <img
                                                      className="live-img-display"
                                                      src={assets.live}
                                                    />
                                                  ) : (
                                                    <div className="date-display">
                                                      <div>
                                                        {" "}
                                                        {
                                                          formatDate(data, keys)
                                                            .day
                                                        }
                                                      </div>
                                                      <div>
                                                        {" "}
                                                        {
                                                          formatDate(data, keys)
                                                            .time
                                                        }
                                                      </div>
                                                    </div>
                                                  )}

                                                  <div className="home-away-team">
                                                    <div className="team-names">
                                                      {data[keys]?.player1}
                                                      &nbsp; V &nbsp;{" "}
                                                      {data[keys]?.player2}
                                                    </div>
                                                    <div className="team-names">
                                                      <span className="date">
                                                        ({data?.[keys]?.date})
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="enabled-markets">
                                                  <div className="market-enabled">
                                                    <div className="market-enabled-inner">
                                                      P
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>

                                              <MobileGroup
                                                data={data}
                                                keys={keys}
                                              />
                                            </a>
                                          </td>

                                          <td
                                            className="MuiTableCell-root MuiTableCell-body odds-cell MuiTableCell-alignCenter"
                                            colSpan={1}
                                          >
                                            <div className="odds-block">
                                              <div className="exch-odd-view">
                                                {data[keys]?.status ===
                                                  "OPEN" && data[keys][0] ? (
                                                  <div className="back-odd exch-odd-button">
                                                    <div className="exch-odd-button-content">
                                                      <div className="price">
                                                        {
                                                          data[keys]?.[0]?.ex
                                                            ?.availableToBack[0]
                                                            ?.price
                                                        }
                                                      </div>
                                                      <div className="size">
                                                        {
                                                          data[keys]?.[0]?.ex
                                                            ?.availableToBack[0]
                                                            ?.size
                                                        }
                                                      </div>
                                                    </div>
                                                  </div>
                                                ) : (
                                                  <Suspended back={true} />
                                                )}
                                              </div>
                                              <div className="exch-odd-view">
                                                {data[keys]?.status ===
                                                  "OPEN" && data[keys][0] ? (
                                                  <div className="lay-odd  exch-odd-button">
                                                    <div className="exch-odd-button-content">
                                                      <div className="price">
                                                        {
                                                          data[keys]?.[0]?.ex
                                                            ?.availableToLay[0]
                                                            ?.price
                                                        }
                                                      </div>
                                                      <div className="size">
                                                        {
                                                          data[keys]?.[0]?.ex
                                                            ?.availableToLay[0]
                                                            ?.size
                                                        }
                                                      </div>
                                                    </div>
                                                  </div>
                                                ) : (
                                                  <Suspended lay={true} />
                                                )}
                                              </div>
                                            </div>
                                          </td>

                                          <td
                                            className="MuiTableCell-root MuiTableCell-body odds-cell MuiTableCell-alignCenter"
                                            colSpan={1}
                                          >
                                            <div className="odds-block">
                                              <div className="exch-odd-view">
                                                {data[keys]?.status ===
                                                  "OPEN" && data[keys][2] ? (
                                                  <div className="back-odd exch-odd-button">
                                                    <div className="exch-odd-button-content">
                                                      <div className="price">
                                                        {
                                                          data[keys]?.[2]?.ex
                                                            ?.availableToBack[0]
                                                            ?.price
                                                        }
                                                      </div>
                                                      <div className="size">
                                                        {
                                                          data[keys]?.[2]?.ex
                                                            ?.availableToBack[0]
                                                            ?.size
                                                        }
                                                      </div>
                                                    </div>
                                                  </div>
                                                ) : (
                                                  <Suspended back={true} />
                                                )}
                                              </div>
                                              <div className="exch-odd-view">
                                                {data[keys]?.status ===
                                                  "OPEN" && data[keys][2] ? (
                                                  <div className="lay-odd  exch-odd-button">
                                                    <div className="exch-odd-button-content">
                                                      <div className="price">
                                                        {
                                                          data[keys]?.[2]?.ex
                                                            ?.availableToLay[0]
                                                            ?.price
                                                        }
                                                      </div>
                                                      <div className="size">
                                                        {
                                                          data[keys]?.[2]?.ex
                                                            ?.availableToLay[0]
                                                            ?.size
                                                        }
                                                      </div>
                                                    </div>
                                                  </div>
                                                ) : (
                                                  <Suspended lay={true} />
                                                )}
                                              </div>
                                            </div>
                                          </td>
                                          <td
                                            className="MuiTableCell-root MuiTableCell-body odds-cell MuiTableCell-alignCenter"
                                            colSpan={1}
                                          >
                                            <div className="odds-block">
                                              <div className="exch-odd-view">
                                                {data[keys]?.status ===
                                                  "OPEN" && data[keys][1] ? (
                                                  <div className="back-odd exch-odd-button">
                                                    <div className="exch-odd-button-content">
                                                      <div className="price">
                                                        {
                                                          data[keys]?.[1]?.ex
                                                            ?.availableToBack[0]
                                                            ?.price
                                                        }
                                                      </div>
                                                      <div className="size">
                                                        {
                                                          data[keys]?.[1]?.ex
                                                            ?.availableToBack[0]
                                                            ?.size
                                                        }
                                                      </div>
                                                    </div>
                                                  </div>
                                                ) : (
                                                  <Suspended back={true} />
                                                )}
                                              </div>
                                              <div className="exch-odd-view">
                                                {data[keys]?.status ===
                                                  "OPEN" && data[keys][1] ? (
                                                  <div className="lay-odd  exch-odd-button">
                                                    <div className="exch-odd-button-content">
                                                      <div className="price">
                                                        {
                                                          data[keys]?.[1]?.ex
                                                            ?.availableToLay[0]
                                                            ?.price
                                                        }
                                                      </div>
                                                      <div className="size">
                                                        {
                                                          data[keys]?.[1]?.ex
                                                            ?.availableToLay[0]
                                                            ?.size
                                                        }
                                                      </div>
                                                    </div>
                                                  </div>
                                                ) : (
                                                  <Suspended lay={true} />
                                                )}
                                              </div>
                                            </div>
                                          </td>
                                        </tr>
                                      );
                                    })
                                ) : (
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      width: "100%",
                                      paddingTop: "30px",
                                      color: "white",
                                    }}
                                  >
                                    <div>
                                      <span>
                                        {" "}
                                        No events available right now
                                      </span>
                                    </div>
                                  </div>
                                )}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
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
    </>
  );
};

export default Group;
