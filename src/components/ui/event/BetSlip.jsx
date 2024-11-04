import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useBalance from "../../../hooks/useBalance";
import useExposer from "../../../hooks/useExposure";
import { useOrderMutation } from "../../../redux/features/events/events";
import { useEffect, useState } from "react";
import { setPrice, setStake } from "../../../redux/features/events/eventSlice";
import handleRandomToken from "../../../utils/handleRandomToken";
import handleEncryptData from "../../../utils/handleEncryptData";
import { settings } from "../../../api";
import toast from "react-hot-toast";
import { handleIncreasePrice } from "../../../utils/handleIncreasePrice";
import { handleDecreasePrice } from "../../../utils/handleDecreasePrice";
import useCurrentBets from "../../../hooks/useCurrentBets";

const BetSlip = ({ setSelectedRunner }) => {
  const dispatch = useDispatch();
  const { eventId } = useParams();
  const { refetchBalance } = useBalance();
  const { refetchExposure } = useExposer(eventId);
  const { refetchCurrentBets } = useCurrentBets(eventId);
  const { placeBetValues, price, stake } = useSelector((state) => state?.event);
  const [createOrder] = useOrderMutation();
  const buttonValues = localStorage.getItem("buttonValue");
  let parseButtonValues = [];
  if (buttonValues) {
    parseButtonValues = JSON.parse(buttonValues);
  }

  const [betDelay, setBetDelay] = useState("");

  useEffect(() => {
    dispatch(setPrice(parseFloat(placeBetValues?.price)));
    dispatch(
      setStake(
        placeBetValues?.totalSize > 0
          ? placeBetValues?.totalSize?.toFixed(2)
          : null
      )
    );
  }, [placeBetValues, dispatch]);

  let payload = {};
  if (price) {
    if (placeBetValues?.btype === "SPORTSBOOK") {
      payload = {
        price: price,
        side: placeBetValues?.side,
        selectionId: placeBetValues?.selectionId,
        btype: placeBetValues?.btype,
        placeName: placeBetValues?.placeName,
        eventTypeId: placeBetValues?.eventTypeId,
        betDelay: placeBetValues?.betDelay,
        marketId: placeBetValues?.marketId,
        maxLiabilityPerMarket: placeBetValues?.maxLiabilityPerMarket,
        maxLiabilityPerBet: placeBetValues?.maxLiabilityPerBet,
        totalSize: stake,
        isBettable: placeBetValues?.isBettable,
        eventId: placeBetValues?.eventId,
      };
    } else {
      payload = {
        betDelay: placeBetValues?.betDelay,
        btype: placeBetValues?.btype,
        eventTypeId: placeBetValues?.eventTypeId,
        marketId: placeBetValues?.marketId,
        price: price,
        selectionId: placeBetValues?.selectionId,
        side: placeBetValues?.side,
        totalSize: stake,
        maxLiabilityPerMarket: placeBetValues?.maxLiabilityPerMarket,
        isBettable: placeBetValues?.isBettable,
        maxLiabilityPerBet: placeBetValues?.maxLiabilityPerBet,
        eventId: placeBetValues?.eventId,
      };
    }
  }

  /* Handle bets */
  const handleOrderBets = async () => {
    const generatedToken = handleRandomToken();
    const encryptedData = handleEncryptData([
      {
        ...payload,
        token: generatedToken,
        site: settings.siteUrl,
      },
    ]);
    setBetDelay(placeBetValues?.betDelay);
    const res = await createOrder(encryptedData).unwrap();

    if (res?.success) {
      refetchExposure();
      refetchBalance();
      setSelectedRunner("");
      refetchCurrentBets();
      setBetDelay("");
      toast.success(res?.result?.result?.placed?.[0]?.message);
    } else {
      toast.error(
        res?.error?.status?.[0]?.description || res?.error?.errorMessage
      );
      setBetDelay("");
      setBetDelay(false);
      // refetchExposure();
      // refetchBalance();
      // refetchCurrentBets();
    }
  };

  console.log(placeBetValues);

  return (
    <tr className="MuiTableRow-root inline-betslip">
      <td
        className="MuiTableCell-root MuiTableCell-body"
        colSpan="3"
        style={{ width: "100vw" }}
      >
        <div className="exch-betslip-ctn">
          {betDelay > 0 && (
            <div className="betslip-progress">
              <div className="centered">
                <div className="spinner loading"></div>
              </div>
            </div>
          )}

          <div
            className={`body-ctn   ${
              placeBetValues?.back
                ? "bs-back-bet bet-body-back  back-line"
                : "bs-lay-bet bet-body-lay  lay-line"
            }`}
          >
            <div
              className={`bet-body  ${
                placeBetValues?.back ? "bet-body-back" : "bet-body-lay"
              }`}
            >
              <div className="header-row">
                <div className="header-event-market-div">
                  <div className="event">{placeBetValues?.eventName}</div>
                  <div className="market">
                    {placeBetValues?.selectedBetName ||
                      placeBetValues?.marketName}
                    {/* <span className="odd-value">1.86</span> */}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedRunner("")}
                  className="MuiButtonBase-root MuiIconButton-root bet-del-btn"
                  type="button"
                  aria-label="close"
                >
                  <span className="MuiIconButton-label">
                    <svg
                      className="MuiSvgIcon-root close-icon"
                      focusable="false"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                    </svg>
                  </span>
                  <span className="MuiTouchRipple-root"></span>
                </button>
              </div>
              <div className="bet-card bet-card-back">
                <div className="input-row">
                  <div className="input-row-ctn odds-ctn">
                    <div className="row-header">Odd Value</div>
                    <div
                      className="row-input"
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <button
                        onClick={() =>
                          handleDecreasePrice(
                            price,
                            placeBetValues,
                            dispatch,
                            setPrice
                          )
                        }
                        className="MuiButtonBase-root MuiButton-root MuiButton-contained odds-btns MuiButton-containedPrimary"
                        type="button"
                      >
                        <span className="MuiButton-label">
                          <span className="MuiButton-startIcon MuiButton-iconSizeMedium">
                            <svg
                              className="MuiSvgIcon-root"
                              focusable="false"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path d="M19 13H5v-2h14v2z"></path>
                            </svg>
                          </span>
                        </span>
                        <span className="MuiTouchRipple-root"></span>
                      </button>
                      <div className="sc-ion-input-md-h sc-ion-input-md-s md has-value hydrated">
                        <input
                          style={{
                            width: "100%",
                          }}
                          onChange={(e) => dispatch(setPrice(e.target.value))}
                          className="native-input sc-ion-input-md"
                          aria-labelledby="ion-input-1-lbl"
                          name="ion-input-1"
                          type="number"
                          value={price}
                        />
                      </div>
                      <button
                        onClick={() =>
                          handleIncreasePrice(
                            price,
                            placeBetValues,
                            dispatch,
                            setPrice
                          )
                        }
                        className="MuiButtonBase-root MuiButton-root MuiButton-contained odds-btns MuiButton-containedPrimary"
                        type="button"
                      >
                        <span className="MuiButton-label">
                          <span className="MuiButton-startIcon MuiButton-iconSizeMedium">
                            <svg
                              className="MuiSvgIcon-root"
                              focusable="false"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                            </svg>
                          </span>
                        </span>
                        <span className="MuiTouchRipple-root"></span>
                      </button>
                    </div>
                  </div>
                  <div className="input-row-ctn stake-ctn">
                    <div className="row-header">Amount</div>
                    <input
                      onChange={(e) => dispatch(setStake(e.target.value))}
                      className="row-input"
                      type="text"
                      placeholder={`Max : ${placeBetValues?.maxLiabilityPerBet}`}
                      style={{ height: "39px", border: "0px", padding: "10px" }}
                      value={stake || ""}
                    />
                    <div
                      onClick={() => dispatch(setStake(""))}
                      className="clear-row"
                    >
                      <span className="text b-text">Clear</span>
                    </div>
                  </div>
                </div>
                <div className="quick-bet">
                  {/* <button
                    className="MuiButtonBase-root MuiButton-root MuiButton-text qb-btn"
                    type="button"
                  >
                    <span className="MuiButton-label">+Gurpreet </span>
                    <span className="MuiTouchRipple-root"></span>
                  </button> */}

                  {parseButtonValues?.map((button, idx) => {
                    return (
                      <button
                        onClick={() => dispatch(setStake(button?.value))}
                        key={idx}
                        className="MuiButtonBase-root MuiButton-root MuiButton-text qb-btn"
                        type="button"
                      >
                        <span className="MuiButton-label">
                          +{button?.value}
                        </span>
                        <span className="MuiTouchRipple-root"></span>
                      </button>
                    );
                  })}
                </div>
                <div className="quick-bet">
                  <button
                    className="MuiButtonBase-root MuiButton-root MuiButton-text qb-btn-allin"
                    type="button"
                  >
                    <span className="MuiButton-label">All IN</span>
                    <span className="MuiTouchRipple-root"></span>
                  </button>
                  <button
                    onClick={() =>
                      dispatch(
                        setStake(
                          parseButtonValues[parseButtonValues?.length - 1]
                            ?.value
                        )
                      )
                    }
                    className="MuiButtonBase-root MuiButton-root MuiButton-text qb-btn-allin"
                    type="button"
                  >
                    <span className="MuiButton-label">MAX</span>
                    <span className="MuiTouchRipple-root"></span>
                  </button>
                </div>
                <div className="d-flex-row">
                  <div className="width-mob-100">
                    <div className="profit-loss">
                      <div className="info">
                        Your profit/loss as per placed bet
                      </div>
                      <div className="returns">
                        <div className="amt">0.00</div>
                      </div>
                    </div>
                    <div className="profit-loss-pts">
                      <div className="info">
                        <div className="profit-loss">
                          <div className="info">Total Amount (in PTS)</div>
                        </div>
                      </div>
                      <div className="returns">
                        <div className="amt">0.00</div>
                      </div>
                    </div>
                  </div>
                  <div className="place-section mob-view">
                    <button
                      onClick={handleOrderBets}
                      disabled={!stake || betDelay > 0}
                      className={`MuiButtonBase-root MuiButton-root MuiButton-text  ${
                        !stake || betDelay > 0
                          ? "place-btn-disable"
                          : "place-btn"
                      }`}
                      type="button"
                    >
                      <span className="MuiButton-label">
                        <div className="btn-content">
                          <div className="label">Place Bet</div>
                        </div>
                      </span>
                      <span className="MuiTouchRipple-root"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bet-footer web-view">
            <div className="place-section">
              <button
                style={{ width: "100%" }}
                onClick={handleOrderBets}
                disabled={!stake || betDelay > 0}
                className={`MuiButtonBase-root MuiButton-root MuiButton-text ${
                  !stake || betDelay > 0 ? "place-btn-disable" : "place-btn"
                }`}
                type="button"
              >
                <span className="MuiButton-label">
                  <div className="btn-content">
                    <div className="label">Place Bet</div>
                  </div>
                </span>
                <span className="MuiTouchRipple-root"></span>
              </button>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default BetSlip;
