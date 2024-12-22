import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import useExposer from "../../../hooks/useExposure";
import assets from "../../../assets";
import isOddSuspended from "../../../utils/isOddSuspended";
import BetSlip from "./BetSlip";
import { handleDesktopBetSlip } from "../../../utils/handleDesktopBetSlip";
import { settings } from "../../../api";
import { handleCashoutBetMobile } from "../../../utils/handleCashoutBetMobile";

const MatchOddsBookmaker = ({ data }) => {
  const { eventId } = useParams();
  const [selectedRunner, setSelectedRunner] = useState("");
  const { exposer } = useExposer(eventId);
  const { predictOdd, stake } = useSelector((state) => state?.event);
  const { token } = useSelector((state) => state?.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [teamProfit, setTeamProfit] = useState([]);
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
      setSelectedRunner,
      navigate
    );
  };

  const computeExposureAndStake = (
    exposureA,
    exposureB,
    runner1,
    runner2,
    gameId
  ) => {
    let runner, largerExposure, layValue, oppositeLayValue, lowerExposure;

    const pnlArr = [exposureA, exposureB];
    const isOnePositiveExposure = onlyOnePositive(pnlArr);

    if (exposureA > exposureB) {
      // Team A has a larger exposure.
      runner = runner1;
      largerExposure = exposureA;
      layValue = runner1?.lay?.[0]?.price;
      oppositeLayValue = runner2?.lay?.[0]?.price;
      lowerExposure = exposureB;
    } else {
      // Team B has a larger exposure.
      runner = runner2;
      largerExposure = exposureB;
      layValue = runner2?.lay?.[0]?.price;
      oppositeLayValue = runner1?.lay?.[0]?.price;
      lowerExposure = exposureA;
    }

    // Compute the absolute value of the lower exposure.
    let absLowerExposure = Math.abs(lowerExposure);

    // Compute the liability for the team with the initially larger exposure.
    let liability = absLowerExposure * (layValue - 1);

    // Compute the new exposure of the team with the initially larger exposure.
    let newExposure = largerExposure - liability;

    // Compute the profit using the new exposure and the lay odds of the opposite team.
    let profit = newExposure / layValue;

    // Calculate the new stake value for the opposite team by adding profit to the absolute value of its exposure.
    let newStakeValue = absLowerExposure + profit;

    // Return the results.
    return {
      runner,
      newExposure,
      profit,
      newStakeValue,
      oppositeLayValue,
      gameId,
      isOnePositiveExposure,
    };
  };
  function onlyOnePositive(arr) {
    let positiveCount = arr?.filter((num) => num > 0).length;
    return positiveCount === 1;
  }
  useEffect(() => {
    let results = [];
    if (
      data?.length > 0 &&
      exposer?.pnlBySelection &&
      Object.keys(exposer?.pnlBySelection)?.length > 0
    ) {
      data.forEach((game) => {
        const runners = game?.runners || [];
        if (runners?.length === 2) {
          const runner1 = runners[0];
          const runner2 = runners[1];
          const pnl1 = pnlBySelection?.find(
            (pnl) => pnl?.RunnerId === runner1?.id
          )?.pnl;
          const pnl2 = pnlBySelection?.find(
            (pnl) => pnl?.RunnerId === runner2?.id
          )?.pnl;

          if (pnl1 && pnl2 && runner1 && runner2) {
            const result = computeExposureAndStake(
              pnl1,
              pnl2,
              runner1,
              runner2,
              game?.id
            );
            results.push(result);
          }
        }
      });
      setTeamProfit(results);
    } else {
      setTeamProfit([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, eventId]);

  return (
    <>
      {data?.map((games) => {
        const teamProfitForGame = teamProfit?.find(
          (profit) =>
            profit?.gameId === games?.id && profit?.isOnePositiveExposure
        );

        return (
          <div key={games?.id} className="hydrated md eam-table-section">
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
                              {(settings.betFairCashOut &&
                                games?.runners?.length !== 3 &&
                                games?.status === "OPEN" &&
                                games?.btype === "MATCH_ODDS") ||
                              (settings.bookmakerCashOut &&
                                games?.runners?.length !== 3 &&
                                games?.status === "OPEN" &&
                                games?.btype === "BOOKMAKER") ? (
                                <div className="cashout-option">
                                  <button
                                    style={{
                                      cursor: `${
                                        !teamProfitForGame
                                          ? "not-allowed"
                                          : "pointer"
                                      }`,
                                      opacity: `${
                                        !teamProfitForGame ? "0.6" : "1"
                                      }`,
                                    }}
                                    disabled={!teamProfitForGame}
                                    onClick={() =>
                                      handleCashoutBetMobile(
                                        games,
                                        "lay",
                                        dispatch,
                                        setSelectedRunner,
                                        pnlBySelection,
                                        token,
                                        teamProfitForGame,
                                        navigate
                                      )
                                    }
                                    className={`MuiButtonBase-root MuiButton-root MuiButton-contained btn cashout-btn   MuiButton-containedPrimary MuiButton-containedSizeSmall MuiButton-sizeSmall ${
                                      teamProfitForGame?.profit > 0
                                        ? "profit"
                                        : "loss"
                                    }`}
                                    type="button"
                                  >
                                    <span className="MuiButton-label">
                                      Cashout{" "}
                                      {teamProfitForGame?.profit && (
                                        <>
                                          : ₹{" "}
                                          {teamProfitForGame?.profit?.toFixed(
                                            2
                                          )}
                                        </>
                                      )}
                                    </span>
                                    <span className="MuiTouchRipple-root"></span>
                                  </button>
                                </div>
                              ) : null}
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
                        const pnl =
                          pnlBySelection?.filter(
                            (pnl) => pnl?.RunnerId === runner?.id
                          ) || [];
                        const predictOddValues = predictOdd?.filter(
                          (val) => val?.id === runner?.id
                        );
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
                                  {pnl &&
                                    pnl?.map(({ pnl }, i) => {
                                      return (
                                        <span
                                          style={{ backgroundColor: "white" }}
                                          key={i}
                                          className={` ${
                                            pnl > 0 ? "profit" : "loss"
                                          }`}
                                        >
                                          {pnl > 0 && "+"}
                                          {pnl}
                                        </span>
                                      );
                                    })}
                                </div>
                                {stake &&
                                  selectedRunner &&
                                  predictOddValues?.map(({ odd, id }) => {
                                    return (
                                      <div key={id} className="profit-loss-box">
                                        <span
                                          className={`${
                                            odd > 0 ? "profit" : "loss"
                                          }`}
                                        >
                                          {odd > 0 && "+"} {stake && odd}
                                        </span>
                                      </div>
                                    );
                                  })}
                              </td>
                              <td className="MuiTableCell-root MuiTableCell-body odds-cell">
                                <div className="odds-block web-view back-odds-block">
                                  <div className="exch-odd-view">
                                    <div
                                      className={`exch-odd-button back-odd ${
                                        isOddSuspended(runner) ? "disabled" : ""
                                      }`}
                                    >
                                      {isOddSuspended(runner) ? (
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
                                              runner?.back?.[0]?.price
                                            )
                                          }
                                          className="exch-odd-button-content"
                                        >
                                          <div className="price">
                                            {" "}
                                            {runner?.back?.[0]?.price || "-"}
                                          </div>
                                          <div className="size">
                                            {" "}
                                            {runner?.back?.[0]?.size || "-"}
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                  <div className="exch-odd-view">
                                    <div
                                      className={`exch-odd-button back-odd ${
                                        isOddSuspended(runner) ? "disabled" : ""
                                      }`}
                                    >
                                      {isOddSuspended(runner) ? (
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
                                              runner?.back?.[1]?.price
                                            )
                                          }
                                          className="exch-odd-button-content"
                                        >
                                          <div className="price">
                                            {" "}
                                            {runner?.back?.[1]?.price || "-"}
                                          </div>
                                          <div className="size">
                                            {" "}
                                            {runner?.back?.[1]?.size || "-"}
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                  <div className="exch-odd-view">
                                    <div
                                      className={`exch-odd-button back-odd ${
                                        isOddSuspended(runner) ? "disabled" : ""
                                      }`}
                                    >
                                      {isOddSuspended(runner) ? (
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
                                              runner?.back?.[2]?.price
                                            )
                                          }
                                          className="exch-odd-button-content"
                                        >
                                          <div className="price">
                                            {" "}
                                            {runner?.back?.[2]?.price || "-"}
                                          </div>
                                          <div className="size">
                                            {" "}
                                            {runner?.back?.[2]?.size || "-"}
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
                                        isOddSuspended(runner) ? "disabled" : ""
                                      }`}
                                    >
                                      {isOddSuspended(runner) ? (
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
                                              runner?.back?.[0]?.price
                                            )
                                          }
                                          className="exch-odd-button-content"
                                        >
                                          <div className="price">
                                            {" "}
                                            {runner?.back?.[0]?.price || "-"}
                                          </div>
                                          <div className="size">
                                            {" "}
                                            {runner?.back?.[0]?.size || "-"}
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
                                        isOddSuspended(runner) ? "disabled" : ""
                                      }`}
                                    >
                                      {isOddSuspended(runner) ? (
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
                                              runner?.lay?.[0]?.price
                                            )
                                          }
                                          className="exch-odd-button-content"
                                        >
                                          <div className="price">
                                            {" "}
                                            {runner?.lay?.[0]?.price || "-"}
                                          </div>
                                          <div className="size">
                                            {" "}
                                            {runner?.lay?.[0]?.size || "-"}
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                  <div className="exch-odd-view">
                                    <div
                                      className={`exch-odd-button lay-odd ${
                                        isOddSuspended(runner) ? "disabled" : ""
                                      }`}
                                    >
                                      {isOddSuspended(runner) ? (
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
                                              runner?.lay?.[1]?.price
                                            )
                                          }
                                          className="exch-odd-button-content"
                                        >
                                          <div className="price">
                                            {" "}
                                            {runner?.lay?.[1]?.price || "-"}
                                          </div>
                                          <div className="size">
                                            {" "}
                                            {runner?.lay?.[1]?.size || "-"}
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                  <div className="exch-odd-view">
                                    <div
                                      className={`exch-odd-button lay-odd ${
                                        isOddSuspended(runner) ? "disabled" : ""
                                      }`}
                                    >
                                      {isOddSuspended(runner) ? (
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
                                              runner?.lay?.[2]?.price
                                            )
                                          }
                                          className="exch-odd-button-content"
                                        >
                                          <div className="price">
                                            {" "}
                                            {runner?.lay?.[2]?.price || "-"}
                                          </div>
                                          <div className="size">
                                            {" "}
                                            {runner?.lay?.[2]?.size || "-"}
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
                                        isOddSuspended(runner) ? "disabled" : ""
                                      }`}
                                    >
                                      {isOddSuspended(runner) ? (
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
                                              runner?.lay?.[0]?.price
                                            )
                                          }
                                          className="exch-odd-button-content"
                                        >
                                          <div className="price">
                                            {" "}
                                            {runner?.lay?.[0]?.price || "-"}
                                          </div>
                                          <div className="size">
                                            {" "}
                                            {runner?.lay?.[0]?.size || "-"}
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            {runner?.id === selectedRunner && (
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

export default MatchOddsBookmaker;
