const EventHeader = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className="hydrated md mob-stream-section">
        <div className="MuiTabs-root eam-all-markets-header-tabs">
          <div
            className="MuiTabs-scroller MuiTabs-fixed"
            style={{ overflow: "hidden" }}
          >
            <div className="MuiTabs-flexContainer" role="tablist">
              <button
                className="MuiTab-root MuiButtonBase-root MuiTab-textColorInherit Mui-selected"
                tabIndex={0}
                type="button"
                aria-selected="true"
                role="tab"
              >
                <span className="MuiTab-wrapper">Scorecard</span>
                <span className="MuiTouchRipple-root" />
              </button>
              <button
                className="MuiTab-root MuiButtonBase-root MuiTab-textColorInherit"
                tabIndex={-1}
                type="button"
                aria-selected="false"
                role="tab"
              >
                <span className="MuiTab-wrapper">Live Stream</span>
                <span className="MuiTouchRipple-root" />
              </button>
              <button
                className="MuiTab-root MuiButtonBase-root MuiTab-textColorInherit"
                tabIndex={-1}
                type="button"
                aria-selected="false"
                role="tab"
              >
                <span className="MuiTab-wrapper">Open Bets (0)</span>
                <span className="MuiTouchRipple-root" />
              </button>
            </div>
            <span
              className="MuiTabs-indicator jss15 jss17"
              style={{ left: 0, width: "160px" }}
            />
          </div>
        </div>
        <div
          className="event-stat-mobile-ctn"
          role="tabpanel"
          id="simple-tabpanel-0"
          aria-labelledby="simple-tab-0"
        >
          <div className="MuiBox-root jss22">
            <p className="MuiTypography-body1 MuiTypography-root"></p>
            <div>
              <div className="Mui-expanded MuiAccordion-root MuiAccordion-rounded MuiPaper-elevation1 MuiPaper-root MuiPaper-rounded scorecard-accordion">
                <div
                  className="Mui-expanded MuiButtonBase-root MuiAccordionSummary-root scorecard-header"
                  role="button"
                  aria-controls="panel1a-content"
                  aria-disabled="false"
                  aria-expanded="true"
                  tabIndex={0}
                >
                  <div className="Mui-expanded MuiAccordionSummary-content">
                    Live Score
                  </div>
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
                </div>
                <div
                  className="MuiCollapse-container MuiCollapse-entered"
                  style={{ minHeight: 0 }}
                >
                  <div className="MuiCollapse-wrapper">
                    <div className="MuiCollapse-wrapperInner">
                      <div role="region" id="panel1a-content">
                        <div className="MuiAccordionDetails-root scorecard-detail">
                          <div className="widgets">
                            <div>
                              <div className="cricket-score-card score-card">
                                <div />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="eam-header-tab-panel"
          role="tabpanel"
          id="simple-tabpanel-1"
          aria-labelledby="simple-tab-1"
          hidden
        />
        <div
          className="event-stat-mobile-ctn"
          role="tabpanel"
          id="simple-tabpanel-2"
          aria-labelledby="simple-tab-2"
          hidden
        />
      </div>
      <div className="hydrated md eam-events-table-section">
        <div className="hydrated md eam-info-header eam-info-header-name">
          <div className="eam-teams-name">
            <div className="eam-date-ctn">
              <div className="eam-date">
                <div className="eam-dates">
                  <div className="eam-date-time">
                    <span>
                      {data?.result?.length > 0 &&
                        data?.result?.[0]?.openDate?.split(" ")[1]}
                    </span>
                  </div>
                  <div className="eam-date-text">
                    {data?.result?.length > 0 &&
                      data?.result?.[0]?.openDate?.split(" ")[0]}
                  </div>
                </div>
              </div>
            </div>
            <div className="eam-teams-name-ctn">
              <div className="eam-team-1">
                {" "}
                {data?.result?.length > 0 &&
                  data?.result?.[0]?.eventName?.split("v")[0]}
              </div>
              <span>V</span>
              <div className="eam-team-2">
                {" "}
                {data?.result?.length > 0 &&
                  data?.result?.[0]?.eventName?.split("v")[1]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventHeader;
