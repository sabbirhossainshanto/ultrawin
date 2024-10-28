const OpenBets = ({ myBets }) => {
  return (
    <div
      role="tabpanel"
      id="simple-tabpanel-2"
      aria-labelledby="simple-tab-2"
      className="event-stat-mobile-ctn"
    >
      <div className="MuiBox-root jss22">
        <p className="MuiTypography-root MuiTypography-body1"></p>
        <div className="open-bets-ctn  open-bts-dup">
          <table
            style={{ width: "100%" }}
            className="MuiTable-root exch-open-bets-table"
          >
            <thead className="MuiTableHead-root open-bets-table-head">
              <tr className="MuiTableRow-root open-bets-table-row MuiTableRow-head">
                <th
                  className="MuiTableCell-root MuiTableCell-head market-cell "
                  scope="col"
                >
                  Market
                </th>
                <th
                  className="MuiTableCell-root MuiTableCell-head odds-cell MuiTableCell-alignRight"
                  scope="col"
                >
                  Odds
                </th>
                <th
                  className="MuiTableCell-root MuiTableCell-head stake-cell MuiTableCell-alignRight"
                  scope="col"
                >
                  Stake
                </th>
              </tr>
            </thead>
            <tbody className="MuiTableBody-root open-bets-table-body">
              {myBets?.map((bet, idx) => {
                return (
                  <tr
                    key={idx}
                    className="MuiTableRow-root open-bets-table-row"
                  >
                    <td
                      className={`MuiTableCell-root MuiTableCell-body  open-bets-table-row ${
                        bet?.betType === "Back" ? "back-bet" : "lay-bet"
                      }`}
                    >
                      {bet?.nation}
                    </td>
                    <td
                      className={`MuiTableCell-root MuiTableCell-body ${
                        bet?.betType === "Back" ? "back-bet" : "lay-bet"
                      } open-bets-table-row MuiTableCell-alignRight`}
                    >
                      {bet?.userRate}
                    </td>
                    <td
                      className={`MuiTableCell-root MuiTableCell-body ${
                        bet?.betType === "Back" ? "back-bet" : "lay-bet"
                      } open-bets-table-row MuiTableCell-alignRight`}
                    >
                      {bet?.amount}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="btn-background">
          <div className="btn-mybets">
            <a>
              <button
                className="MuiButtonBase-root MuiButton-root MuiButton-text"
                type="button"
              >
                <span className="MuiButton-label">View All</span>
                <span className="MuiTouchRipple-root"></span>
              </button>
            </a>
          </div>
        </div>
        <p></p>
      </div>
    </div>
  );
};

export default OpenBets;
