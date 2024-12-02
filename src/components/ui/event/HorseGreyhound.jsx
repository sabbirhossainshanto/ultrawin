import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import useExposer from "../../../hooks/useExposure";
import assets from "../../../assets";
import { isHorseGreyhoundOddSuspended } from "../../../utils/isOddSuspended";
import BetSlip from "./BetSlip";
import { handleDesktopBetSlip } from "../../../utils/handleDesktopBetSlip";

const HorseGreyhound = ({ data }) => {
  const { eventId } = useParams();
  const [selectedRunner, setSelectedRunner] = useState("");
  const { exposer } = useExposer(eventId);
  const { token } = useSelector((state) => state?.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOpenBetSlip = (betType, games, runner, price) => {
    handleDesktopBetSlip(
      betType,
      games,
      runner,
      exposer,
      dispatch,
      price,
      token,
      setSelectedRunner,
      navigate
    );
  };

  return (
    <>
      {data?.map((games) => {
        return (
          <div
            key={games?.selectionId}
            className="hydrated md eam-table-section"
          >
            <div className="matchodds-table-ctn">
              <div className="table-ctn matchodds-table-content">
                <div className="MuiPaper-root MuiPaper-rounded MuiPaper-elevation1 MuiTableContainer-root">
                  <table
                    className="MuiTable-root matchodds-table"
                    style={{
                      width: "100%",
                    }}
                  >
                    <thead className="MuiTableHead-root">
                      <tr className="MuiTableRow-root MuiTableRow-head">
                        <th
                          className="MuiTableCell-root MuiTableCell-head"
                          colSpan={3}
                          scope="col"
                        >
                          <div className="market-name-cell-head-ctn">
                            <span className="market-name">
                              <img
                                src={assets.multipin}
                                className="multi-add-icon"
                                alt="multimarket"
                                title="Add To Multi Markets "
                              />{" "}
                              {games?.name}
                            </span>

                            <span className="web-view bet-limits-section">
                              Min: 100 Max: 25K
                            </span>
                            <span className="mob-view bet-limits-section">
                              <div>Min: 100</div>
                              <div>Max: 25K</div>
                            </span>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="MuiTableBody-root">
                      <tr className="MuiTableRow-root header-row">
                        <td
                          className="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft market-name-cell-head"
                          colSpan={1}
                        >
                          <div className="teamname-odd">Market</div>
                        </td>
                        <td
                          className="MuiTableCell-root MuiTableCell-body odds-cell-head MuiTableCell-alignRight"
                          colSpan={1}
                        >
                          <div className="back-odd">Back</div>
                        </td>
                        <td
                          className="MuiTableCell-root MuiTableCell-body odds-cell-head MuiTableCell-alignLeft"
                          colSpan={1}
                        >
                          <div className="lay-odd">Lay</div>
                        </td>
                      </tr>
                      {games?.runners?.map((runner) => {
                        return (
                          <>
                            <tr key={runner?.id} className="MuiTableRow-root">
                              <td className="MuiTableCell-root MuiTableCell-body team-name-cell">
                                <div
                                  className="team"
                                  style={{
                                    marginLeft: "10px",
                                  }}
                                >
                                  {" "}
                                  {runner?.name}
                                </div>
                              </td>
                              <td className="MuiTableCell-root MuiTableCell-body odds-cell">
                                <div className="odds-block web-view back-odds-block">
                                  <div className="exch-odd-view">
                                    <div
                                      className={`exch-odd-button back-odd ${
                                        isHorseGreyhoundOddSuspended(
                                          games,
                                          runner
                                        )
                                          ? "disabled"
                                          : ""
                                      }`}
                                    >
                                      {isHorseGreyhoundOddSuspended(
                                        games,
                                        runner
                                      ) ? (
                                        <svg
                                          className="MuiSvgIcon-root lock-icon"
                                          viewBox="0 0 24 24"
                                          aria-hidden="true"
                                          focusable="false"
                                        >
                                          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
                                        </svg>
                                      ) : (
                                        <div
                                          onClick={() =>
                                            handleOpenBetSlip(
                                              "back",
                                              games,
                                              runner,
                                              runner?.ex?.availableToBack?.[0]
                                                ?.price
                                            )
                                          }
                                          className="exch-odd-button-content"
                                        >
                                          <div className="price">
                                            {" "}
                                            {
                                              runner?.ex?.availableToBack?.[0]
                                                ?.price
                                            }
                                          </div>
                                          <div className="size">
                                            {" "}
                                            {
                                              runner?.ex?.availableToBack?.[0]
                                                ?.size
                                            }
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                  <div className="exch-odd-view">
                                    <div
                                      className={`exch-odd-button back-odd ${
                                        isHorseGreyhoundOddSuspended(
                                          games,
                                          runner
                                        )
                                          ? "disabled"
                                          : ""
                                      }`}
                                    >
                                      {isHorseGreyhoundOddSuspended(
                                        games,
                                        runner
                                      ) ? (
                                        <svg
                                          className="MuiSvgIcon-root lock-icon"
                                          viewBox="0 0 24 24"
                                          aria-hidden="true"
                                          focusable="false"
                                        >
                                          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
                                        </svg>
                                      ) : (
                                        <div
                                          onClick={() =>
                                            handleOpenBetSlip(
                                              "back",
                                              games,
                                              runner,
                                              runner?.ex?.availableToBack?.[1]
                                                ?.price
                                            )
                                          }
                                          className="exch-odd-button-content"
                                        >
                                          <div className="price">
                                            {" "}
                                            {
                                              runner?.ex?.availableToBack?.[1]
                                                ?.price
                                            }
                                          </div>
                                          <div className="size">
                                            {" "}
                                            {
                                              runner?.ex?.availableToBack?.[1]
                                                ?.size
                                            }
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                  <div className="exch-odd-view">
                                    <div
                                      className={`exch-odd-button back-odd ${
                                        isHorseGreyhoundOddSuspended(
                                          games,
                                          runner
                                        )
                                          ? "disabled"
                                          : ""
                                      }`}
                                    >
                                      {isHorseGreyhoundOddSuspended(
                                        games,
                                        runner
                                      ) ? (
                                        <svg
                                          className="MuiSvgIcon-root lock-icon"
                                          viewBox="0 0 24 24"
                                          aria-hidden="true"
                                          focusable="false"
                                        >
                                          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
                                        </svg>
                                      ) : (
                                        <div
                                          onClick={() =>
                                            handleOpenBetSlip(
                                              "back",
                                              games,
                                              runner,
                                              runner?.ex?.availableToBack?.[2]
                                                ?.price
                                            )
                                          }
                                          className="exch-odd-button-content"
                                        >
                                          <div className="price">
                                            {" "}
                                            {
                                              runner?.ex?.availableToBack?.[2]
                                                ?.price
                                            }
                                          </div>
                                          <div className="size">
                                            {" "}
                                            {
                                              runner?.ex?.availableToBack?.[2]
                                                ?.size
                                            }
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                                <div className="odds-block mob-view">
                                  <div className="exch-odd-view">
                                    <div
                                      className={`exch-odd-button back-odd ${
                                        isHorseGreyhoundOddSuspended(
                                          games,
                                          runner
                                        )
                                          ? "disabled"
                                          : ""
                                      }`}
                                    >
                                      {isHorseGreyhoundOddSuspended(
                                        games,
                                        runner
                                      ) ? (
                                        <svg
                                          className="MuiSvgIcon-root lock-icon"
                                          viewBox="0 0 24 24"
                                          aria-hidden="true"
                                          focusable="false"
                                        >
                                          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
                                        </svg>
                                      ) : (
                                        <div
                                          onClick={() =>
                                            handleOpenBetSlip(
                                              "back",
                                              games,
                                              runner,
                                              runner?.ex?.availableToBack?.[0]
                                                ?.price
                                            )
                                          }
                                          className="exch-odd-button-content"
                                        >
                                          <div className="price">
                                            {" "}
                                            {
                                              runner?.ex?.availableToBack?.[0]
                                                ?.price
                                            }
                                          </div>
                                          <div className="size">
                                            {" "}
                                            {
                                              runner?.ex?.availableToBack?.[0]
                                                ?.size
                                            }
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="MuiTableCell-root MuiTableCell-body odds-cell">
                                <div className="odds-block web-view">
                                  <div className="exch-odd-view">
                                    <div
                                      className={`exch-odd-button lay-odd ${
                                        isHorseGreyhoundOddSuspended(
                                          games,
                                          runner
                                        )
                                          ? "disabled"
                                          : ""
                                      }`}
                                    >
                                      {isHorseGreyhoundOddSuspended(
                                        games,
                                        runner
                                      ) ? (
                                        <svg
                                          className="MuiSvgIcon-root lock-icon"
                                          viewBox="0 0 24 24"
                                          aria-hidden="true"
                                          focusable="false"
                                        >
                                          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
                                        </svg>
                                      ) : (
                                        <div
                                          onClick={() =>
                                            handleOpenBetSlip(
                                              "lay",
                                              games,
                                              runner,
                                              runner?.ex?.availableToLay?.[0]
                                                ?.price
                                            )
                                          }
                                          className="exch-odd-button-content"
                                        >
                                          <div className="price">
                                            {" "}
                                            {
                                              runner?.ex?.availableToLay?.[0]
                                                ?.price
                                            }
                                          </div>
                                          <div className="size">
                                            {" "}
                                            {
                                              runner?.ex?.availableToLay?.[0]
                                                ?.size
                                            }
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                  <div className="exch-odd-view">
                                    <div
                                      className={`exch-odd-button lay-odd ${
                                        isHorseGreyhoundOddSuspended(
                                          games,
                                          runner
                                        )
                                          ? "disabled"
                                          : ""
                                      }`}
                                    >
                                      {isHorseGreyhoundOddSuspended(
                                        games,
                                        runner
                                      ) ? (
                                        <svg
                                          className="MuiSvgIcon-root lock-icon"
                                          viewBox="0 0 24 24"
                                          aria-hidden="true"
                                          focusable="false"
                                        >
                                          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
                                        </svg>
                                      ) : (
                                        <div
                                          onClick={() =>
                                            handleOpenBetSlip(
                                              "lay",
                                              games,
                                              runner,
                                              runner?.ex?.availableToLay?.[1]
                                                ?.price
                                            )
                                          }
                                          className="exch-odd-button-content"
                                        >
                                          <div className="price">
                                            {" "}
                                            {
                                              runner?.ex?.availableToLay?.[1]
                                                ?.price
                                            }
                                          </div>
                                          <div className="size">
                                            {" "}
                                            {
                                              runner?.ex?.availableToLay?.[1]
                                                ?.size
                                            }
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                  <div className="exch-odd-view">
                                    <div
                                      className={`exch-odd-button lay-odd ${
                                        isHorseGreyhoundOddSuspended(
                                          games,
                                          runner
                                        )
                                          ? "disabled"
                                          : ""
                                      }`}
                                    >
                                      {isHorseGreyhoundOddSuspended(
                                        games,
                                        runner
                                      ) ? (
                                        <svg
                                          className="MuiSvgIcon-root lock-icon"
                                          viewBox="0 0 24 24"
                                          aria-hidden="true"
                                          focusable="false"
                                        >
                                          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
                                        </svg>
                                      ) : (
                                        <div
                                          onClick={() =>
                                            handleOpenBetSlip(
                                              "lay",
                                              games,
                                              runner,
                                              runner?.ex?.availableToLay?.[2]
                                                ?.price
                                            )
                                          }
                                          className="exch-odd-button-content"
                                        >
                                          <div className="price">
                                            {" "}
                                            {
                                              runner?.ex?.availableToLay?.[2]
                                                ?.price
                                            }
                                          </div>
                                          <div className="size">
                                            {" "}
                                            {
                                              runner?.ex?.availableToLay?.[2]
                                                ?.size
                                            }
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                                <div className="odds-block mob-view">
                                  <div className="exch-odd-view">
                                    <div
                                      className={`exch-odd-button lay-odd ${
                                        isHorseGreyhoundOddSuspended(
                                          games,
                                          runner
                                        )
                                          ? "disabled"
                                          : ""
                                      }`}
                                    >
                                      {isHorseGreyhoundOddSuspended(
                                        games,
                                        runner
                                      ) ? (
                                        <svg
                                          className="MuiSvgIcon-root lock-icon"
                                          viewBox="0 0 24 24"
                                          aria-hidden="true"
                                          focusable="false"
                                        >
                                          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
                                        </svg>
                                      ) : (
                                        <div
                                          onClick={() =>
                                            handleOpenBetSlip(
                                              "lay",
                                              games,
                                              runner,
                                              runner?.ex?.availableToLay?.[0]
                                                ?.price
                                            )
                                          }
                                          className="exch-odd-button-content"
                                        >
                                          <div className="price">
                                            {" "}
                                            {
                                              runner?.ex?.availableToLay?.[0]
                                                ?.price
                                            }
                                          </div>
                                          <div className="size">
                                            {" "}
                                            {
                                              runner?.ex?.availableToLay?.[0]
                                                ?.size
                                            }
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            {runner?.selectionId === selectedRunner && (
                              <BetSlip setSelectedRunner={setSelectedRunner} />
                            )}
                          </>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default HorseGreyhound;
