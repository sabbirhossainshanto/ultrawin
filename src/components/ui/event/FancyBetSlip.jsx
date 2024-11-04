const FancyBetSlip = () => {
  return (
    <tr className="MuiTableRow-root inline-betslip">
      <td className="MuiTableCell-root MuiTableCell-body" colSpan="12">
        <div className="exch-betslip-ctn">
          <div className="body-ctn bs-back-bet bet-body-back  back-line">
            <div className="bet-body bet-body-back">
              <div className="header-row">
                <div className="header-event-market-div">
                  <div className="event">Australia v Pakistan</div>
                  <div className="market">50 Over Runs PAK Adv @ 207</div>
                </div>
                <button
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
                    <div className="row-input">
                      <button
                        className="MuiButtonBase-root MuiButton-root MuiButton-contained odds-btns MuiButton-containedPrimary Mui-disabled Mui-disabled"
                        type="button"
                        disabled=""
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
                      </button>
                      <div
                        type="number"
                        min="1"
                        mode="md"
                        step="0"
                        className="sc-ion-input-md-h sc-ion-input-md-s md has-value hydrated"
                        aria-disabled="true"
                      >
                        <input
                          className="native-input sc-ion-input-md"
                          aria-labelledby="ion-input-1-lbl"
                          disabled=""
                          min="1"
                          name="ion-input-1"
                          placeholder=""
                          step="0"
                          type="number"
                        />
                      </div>
                      <button
                        className="MuiButtonBase-root MuiButton-root MuiButton-contained odds-btns MuiButton-containedPrimary Mui-disabled Mui-disabled"
                        type="button"
                        disabled=""
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
                      </button>
                    </div>
                  </div>
                  <div className="input-row-ctn stake-ctn">
                    <div className="row-header">Amount</div>
                    <input
                      className="row-input"
                      type="text"
                      value=""
                      style={{ height: "39px", border: "0px", padding: "10px" }}
                    />
                    <div className="clear-row">
                      <span className="text b-text">Clear</span>
                    </div>
                  </div>
                </div>
                <div className="quick-bet">
                  <button
                    className="MuiButtonBase-root MuiButton-root MuiButton-text qb-btn"
                    type="button"
                  >
                    <span className="MuiButton-label">+100</span>
                    <span className="MuiTouchRipple-root"></span>
                  </button>
                  <button
                    className="MuiButtonBase-root MuiButton-root MuiButton-text qb-btn"
                    type="button"
                  >
                    <span className="MuiButton-label">+500</span>
                    <span className="MuiTouchRipple-root"></span>
                  </button>
                  <button
                    className="MuiButtonBase-root MuiButton-root MuiButton-text qb-btn"
                    type="button"
                  >
                    <span className="MuiButton-label">+1,000</span>
                    <span className="MuiTouchRipple-root"></span>
                  </button>
                  <button
                    className="MuiButtonBase-root MuiButton-root MuiButton-text qb-btn"
                    type="button"
                  >
                    <span className="MuiButton-label">+5,000</span>
                    <span className="MuiTouchRipple-root"></span>
                  </button>
                  <button
                    className="MuiButtonBase-root MuiButton-root MuiButton-text qb-btn"
                    type="button"
                  >
                    <span className="MuiButton-label">+10,000</span>
                    <span className="MuiTouchRipple-root"></span>
                  </button>
                  <button
                    className="MuiButtonBase-root MuiButton-root MuiButton-text qb-btn"
                    type="button"
                  >
                    <span className="MuiButton-label">+50,000</span>
                    <span className="MuiTouchRipple-root"></span>
                  </button>
                  <button
                    className="MuiButtonBase-root MuiButton-root MuiButton-text qb-btn"
                    type="button"
                  >
                    <span className="MuiButton-label">+1,00,000</span>
                    <span className="MuiTouchRipple-root"></span>
                  </button>
                  <button
                    className="MuiButtonBase-root MuiButton-root MuiButton-text qb-btn"
                    type="button"
                  >
                    <span className="MuiButton-label">+5,00,000</span>
                    <span className="MuiTouchRipple-root"></span>
                  </button>
                  <button
                    className="MuiButtonBase-root MuiButton-root MuiButton-text qb-btn"
                    type="button"
                  >
                    <span className="MuiButton-label">+10,00,000</span>
                    <span className="MuiTouchRipple-root"></span>
                  </button>
                  <button
                    className="MuiButtonBase-root MuiButton-root MuiButton-text qb-btn-allin"
                    type="button"
                  >
                    <span className="MuiButton-label">All IN</span>
                    <span className="MuiTouchRipple-root"></span>
                  </button>
                  <button
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
                      className="MuiButtonBase-root MuiButton-root MuiButton-text place-btn"
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
                className="MuiButtonBase-root MuiButton-root MuiButton-text place-btn"
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

export default FancyBetSlip;
