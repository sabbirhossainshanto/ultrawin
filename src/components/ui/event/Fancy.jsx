import { useDispatch, useSelector } from "react-redux";
import { userToken } from "../../../redux/features/auth/authSlice";
import { useState } from "react";
import { useGetLadderMutation } from "../../../redux/features/events/events";
import { useParams } from "react-router-dom";
import useExposer from "../../../hooks/useExposure";
import { handleDesktopBetSlip } from "../../../utils/handleDesktopBetSlip";
import handleRandomToken from "../../../utils/handleRandomToken";
import handleEncryptData from "../../../utils/handleEncryptData";
import { settings } from "../../../api";
import isOddSuspended from "../../../utils/isOddSuspended";
import BetSlip from "./BetSlip";
import Ladder from "../../modal/Ladder";
import FancyBetSlip from "./FancyBetSlip";

const Fancy = ({ fancy }) => {
  const [selectedRunner, setSelectedRunner] = useState("");
  const token = useSelector(userToken);
  const [eventName, setEventName] = useState("");
  const [ladderData, setLadderData] = useState([]);
  const [getLadder] = useGetLadderMutation();
  // const { predictOdd, stake } = useSelector((state) => state?.event);
  const { eventId } = useParams();
  const { exposer } = useExposer(eventId);
  const dispatch = useDispatch();
  let pnlBySelection;
  if (exposer?.pnlBySelection) {
    const obj = exposer?.pnlBySelection;
    pnlBySelection = Object?.values(obj);
  }
  const handleOpenBetSlip = (betType, games, runner, price) => {
    handleDesktopBetSlip(
      betType,
      games,
      runner,
      exposer,
      dispatch,
      price,
      token,
      setSelectedRunner
    );
  };
  const handleGetLadder = async (marketId, games) => {
    console.log(marketId);
    setEventName(games?.name);
    const generatedToken = handleRandomToken();
    const encryptedData = handleEncryptData({
      token: generatedToken,
      site: settings.siteUrl,
    });
    const payload = {
      marketId,
      data: encryptedData,
    };
    const res = await getLadder(payload).unwrap();
    if (res.success) {
      setLadderData(res.result);
    }
  };
  return (
    <>
      {ladderData?.length > 0 && (
        <Ladder
          ladderData={ladderData}
          setLadderData={setLadderData}
          eventName={eventName}
        />
      )}
      <div className="hydrated md eam-table-section fancy-tab-section">
        <div className="hydrated md">
          <div
            className="fancy-tab-ctn"
            role="tabpanel"
            id="simple-tabpanel-0"
            aria-labelledby="simple-tab-0"
          >
            <div className="MuiBox-root jss21">
              <p className="MuiTypography-body1 MuiTypography-root"></p>
              <div className="fm-table-ctn">
                <div className="table-ctn fm-table-content">
                  <div className="MuiPaper-root MuiPaper-rounded MuiPaper-elevation1 MuiTableContainer-root">
                    <table
                      className="MuiTable-root fm-table"
                      style={{ maxWidth: "100vw" }}
                    >
                      <thead className="MuiTableHead-root">
                        {/* <tr className="MuiTableRow-root MuiTableRow-head">
                        <th
                          className="MuiTableCell-root MuiTableCell-head tabs-table-cell"
                          colSpan={12}
                          scope="col"
                        >
                          <div className="tabs-fancy">
                            <span className="sel-tab">
                              <div>All</div>
                            </span>
                            <span className="ind-tab">
                              <div>SESSIONS</div>
                            </span>
                            <span className="ind-tab">
                              <div>W/P MARKET</div>
                            </span>
                            <span className="ind-tab">
                              <div>EXTRA MARKET</div>
                            </span>
                            <span className="ind-tab">
                              <div>ODD/EVEN</div>
                            </span>
                          </div>
                        </th>
                      </tr> */}
                      </thead>
                      <tbody className="MuiTableBody-root">
                        <tr className="MuiTableRow-root header-row undefined">
                          <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft market-name-cell-head">
                            <div className="groupname-cell"> Fancy Market</div>
                          </td>

                          <td className="MuiTableCell-root MuiTableCell-body odds-cell-head MuiTableCell-alignCenter odds-no-cell">
                            <div className="odds-no-cell">no</div>
                          </td>
                          <td className="MuiTableCell-root MuiTableCell-body odds-cell-head MuiTableCell-alignCenter odds-yes-cell">
                            <div className="odds-yes-cell">yes</div>
                          </td>
                          <td className="MuiTableCell-root MuiTableCell-body limits-cell MuiTableCell-alignCenter odds-cell-head">
                            <div
                              className="Mui-expanded MuiButtonBase-root MuiAccordionSummary-expandIcon MuiIconButton-edgeEnd MuiIconButton-root"
                              aria-disabled="false"
                              aria-hidden="true"
                            >
                              <span className="MuiIconButton-label">
                                <svg
                                  className="MuiSvgIcon-root expand-icon"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                  focusable="false"
                                >
                                  <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z" />
                                </svg>
                              </span>
                              <span className="MuiTouchRipple-root" />
                            </div>
                            <div
                              className="MuiCollapse-container MuiCollapse-entered"
                              style={{ minHeight: 0 }}
                            >
                              <div className="MuiCollapse-wrapper">
                                <div className="MuiCollapse-wrapperInner">
                                  <div role="region" id="panel1a-content" />
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                        {/* <tr className="MuiTableRow-root header-row row-hidden">
                          <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft market-name-cell-head">
                            <div className="groupname-cell"> Fancy Market</div>
                          </td>
                          <td className="MuiTableCell-root MuiTableCell-body book-btn-cell MuiTableCell-alignCenter odds-cell-head">
                            <div className="odds-no-cell" />
                          </td>
                          <td className="MuiTableCell-root MuiTableCell-body odds-cell-head MuiTableCell-alignCenter odds-no-cell">
                            <div className="odds-no-cell">no</div>
                          </td>
                          <td className="MuiTableCell-root MuiTableCell-body odds-cell-head MuiTableCell-alignCenter odds-yes-cell">
                            <div className="odds-yes-cell">yes</div>
                          </td>
                          <td className="MuiTableCell-root MuiTableCell-body limits-cell MuiTableCell-alignCenter odds-cell-head" />
                        </tr> */}
                        {fancy?.map((games) => {
                          const pnl =
                            pnlBySelection?.filter(
                              (pnl) => pnl?.MarketId === games?.id
                            ) || [];

                          return (
                            <>
                              <tr key={games?.id} className="MuiTableRow-root">
                                <td className="MuiTableCell-root MuiTableCell-body market-name-cell">
                                  <div className="market">
                                    {games?.name}

                                    {pnl &&
                                      pnl?.map(({ pnl }, i) => {
                                        return (
                                          <span
                                            key={i}
                                            className={` ${
                                              pnl > 0 ? "profit" : "loss"
                                            }`}
                                          >
                                            {pnl}
                                          </span>
                                        );
                                      })}
                                  </div>
                                  <div
                                    className="MuiTableCell-root MuiTableCell-body odds-cell book-btn-cell"
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                    }}
                                  >
                                    {pnl?.length > 0 ? (
                                      pnl?.map(({ MarketId }, i) => {
                                        return (
                                          <button
                                            key={i}
                                            onClick={() =>
                                              handleGetLadder(MarketId, games)
                                            }
                                            className={`cursor-pointer MuiButton-root MuiButtonBase-root MuiButton-text fancy-book-btn`}
                                            tabIndex={-1}
                                            type="button"
                                          >
                                            <span className="MuiButton-label">
                                              Book
                                            </span>
                                          </button>
                                        );
                                      })
                                    ) : (
                                      <button
                                        className={`Mui-disabled Mui-disabled MuiButton-root MuiButtonBase-root MuiButton-text fancy-book-btn`}
                                        tabIndex={-1}
                                        type="button"
                                        disabled
                                      >
                                        <span className="MuiButton-label">
                                          Book
                                        </span>
                                      </button>
                                    )}
                                  </div>
                                </td>
                                {/* <td className="MuiTableCell-root MuiTableCell-body odds-cell book-btn-cell">
                                  {pnl?.length > 0 ? (
                                    pnl?.map(({ MarketId }, i) => {
                                      return (
                                        <button
                                          key={i}
                                          onClick={() =>
                                            handleGetLadder(MarketId, games)
                                          }
                                          className={`cursor-pointer MuiButton-root MuiButtonBase-root MuiButton-text fancy-book-btn`}
                                          tabIndex={-1}
                                          type="button"
                                        >
                                          <span className="MuiButton-label">
                                            Book
                                          </span>
                                        </button>
                                      );
                                    })
                                  ) : (
                                    <button
                                      className={`Mui-disabled Mui-disabled MuiButton-root MuiButtonBase-root MuiButton-text fancy-book-btn`}
                                      tabIndex={-1}
                                      type="button"
                                      disabled
                                    >
                                      <span className="MuiButton-label">
                                        Book
                                      </span>
                                    </button>
                                  )}
                                </td> */}
                                <td className="MuiTableCell-root MuiTableCell-body odds-cell">
                                  <div className="odds-block">
                                    <div className="exch-odd-view">
                                      <div
                                        className={`exch-odd-button odds-no-cell ${
                                          isOddSuspended(games)
                                            ? "disabled"
                                            : ""
                                        }`}
                                      >
                                        {!isOddSuspended(games) ? (
                                          <div
                                            onClick={() =>
                                              handleOpenBetSlip(
                                                "lay",
                                                games,
                                                games?.runners?.[0],
                                                games?.runners?.[0]?.lay?.[0]
                                                  ?.line
                                              )
                                            }
                                            className="exch-odd-button-content"
                                          >
                                            <div className="runs">
                                              {" "}
                                              {games?.runners?.[0]?.lay?.[0]
                                                ?.line || "-"}
                                            </div>
                                            <div className="odds">
                                              {" "}
                                              {
                                                games?.runners?.[0]?.lay?.[0]
                                                  ?.price
                                              }
                                            </div>
                                          </div>
                                        ) : (
                                          <svg
                                            className="MuiSvgIcon-root lock-icon"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                            focusable="false"
                                          >
                                            <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
                                          </svg>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="MuiTableCell-root MuiTableCell-body odds-cell">
                                  <div className="odds-block">
                                    <div className="exch-odd-view">
                                      <div
                                        className={`exch-odd-button odds-yes-cell ${
                                          isOddSuspended(games)
                                            ? "disabled"
                                            : ""
                                        }`}
                                      >
                                        {!isOddSuspended(games) ? (
                                          <div
                                            onClick={() =>
                                              handleOpenBetSlip(
                                                "back",
                                                games,
                                                games?.runners?.[0],
                                                games?.runners?.[0]?.back?.[0]
                                                  ?.line
                                              )
                                            }
                                            className="exch-odd-button-content"
                                          >
                                            <div className="runs">
                                              {" "}
                                              {
                                                games?.runners?.[0]?.back?.[0]
                                                  ?.line
                                              }
                                            </div>
                                            <div className="odds">
                                              {" "}
                                              {
                                                games?.runners?.[0]?.back?.[0]
                                                  ?.price
                                              }
                                            </div>
                                          </div>
                                        ) : (
                                          <svg
                                            className="MuiSvgIcon-root lock-icon"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                            focusable="false"
                                          >
                                            <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
                                          </svg>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td
                                  className="MuiTableCell-root MuiTableCell-body limits-cell"
                                  style={{
                                    paddingLeft: "4px",
                                  }}
                                >
                                  <div className="limits-data">
                                    <div className="row web-view">
                                      <div>
                                        Min: {games?.minLiabilityPerBet}
                                      </div>
                                      <div>
                                        Max: {games?.maxLiabilityPerBet}
                                      </div>
                                    </div>
                                    <div className="row mob-view">
                                      <div>
                                        Min: {games?.minLiabilityPerBet}
                                      </div>
                                      <div>
                                        Max: {games?.maxLiabilityPerBet}
                                      </div>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              {games?.id === selectedRunner && (
                                <BetSlip
                                  setSelectedRunner={setSelectedRunner}
                                />
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Fancy;
