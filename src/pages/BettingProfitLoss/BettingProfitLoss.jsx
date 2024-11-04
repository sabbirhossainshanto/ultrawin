import { useSelector } from "react-redux";
import useBettingProfitLoss from "../../hooks/useBettingProfitLoss";

const BettingProfitLoss = () => {
  const { token } = useSelector((state) => state.auth);
  const { data } = useBettingProfitLoss();

  return (
    <div className="md hydrated">
      <div className="router-ctn">
        <div className="betting-pl-ctn">
          <div className="as-ctn md hydrated">
            <div className="report-header">
              <div className="report-img-title">
                <div className="report-img-div-title">
                  <div className="report-img-div">
                    <svg
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                      fill="none"
                      className="report-img"
                    >
                      <path
                        d="M10.855 3.64497C10.8085 3.59811 10.7532 3.56091 10.6923 3.53552C10.6313 3.51014 10.566 3.49707 10.5 3.49707C10.434 3.49707 10.3686 3.51014 10.3077 3.53552C10.2468 3.56091 10.1915 3.59811 10.145 3.64497L6.99997 6.79497L4.85497 4.64497C4.80849 4.59811 4.75319 4.56091 4.69226 4.53552C4.63133 4.51014 4.56598 4.49707 4.49997 4.49707C4.43396 4.49707 4.36861 4.51014 4.30768 4.53552C4.24675 4.56091 4.19145 4.59811 4.14497 4.64497L1.14497 7.64497C1.09811 7.69145 1.06091 7.74675 1.03552 7.80768C1.01014 7.86861 0.99707 7.93396 0.99707 7.99997C0.99707 8.06598 1.01014 8.13133 1.03552 8.19226C1.06091 8.25319 1.09811 8.30849 1.14497 8.35497C1.19145 8.40183 1.24675 8.43903 1.30768 8.46442C1.36861 8.4898 1.43396 8.50287 1.49997 8.50287C1.56598 8.50287 1.63133 8.4898 1.69226 8.46442C1.75319 8.43903 1.80849 8.40183 1.85497 8.35497L4.49997 5.70497L6.64497 7.85497C6.69145 7.90183 6.74675 7.93903 6.80768 7.96442C6.86861 7.9898 6.93396 8.00287 6.99997 8.00287C7.06598 8.00287 7.13133 7.9898 7.19226 7.96442C7.25319 7.93903 7.30849 7.90183 7.35497 7.85497L10.855 4.35497C10.9018 4.30849 10.939 4.25319 10.9644 4.19226C10.9898 4.13133 11.0029 4.06598 11.0029 3.99997C11.0029 3.93396 10.9898 3.86861 10.9644 3.80768C10.939 3.74675 10.9018 3.69145 10.855 3.64497Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div className="report-title">Betting Profit and Loss</div>
                </div>
              </div>
            </div>
            <div className="mob-px-0 md hydrated">
              <div className="reports-ctn my-bets-ctn">
                <div className="content-ctn light-bg my-bets-content">
                  <div className="myb-bets-div">
                    <div className="tbl-ctn my-bets-tbl no-hov-style">
                      <div className="MuiPaper-root MuiTableContainer-root MuiPaper-elevation1 MuiPaper-rounded">
                        {token && data?.length > 0 ? (
                          <table
                            style={{ width: "100%" }}
                            className="MuiTable-root myb-table"
                          >
                            <thead className="MuiTableHead-root myb-table-header">
                              <tr className="MuiTableRow-root MuiTableRow-head">
                                <th
                                  className="MuiTableCell-root MuiTableCell-head market-header MuiTableCell-sizeSmall"
                                  scope="col"
                                >
                                  Market
                                </th>
                                <th
                                  className="MuiTableCell-root MuiTableCell-head start-time MuiTableCell-sizeSmall"
                                  scope="col"
                                >
                                  Start time
                                </th>
                                <th
                                  className="MuiTableCell-root MuiTableCell-head settled-time MuiTableCell-sizeSmall"
                                  scope="col"
                                >
                                  Settled time
                                </th>
                                <th
                                  className="MuiTableCell-root MuiTableCell-head pl-comm MuiTableCell-sizeSmall"
                                  scope="col"
                                >
                                  Comm.
                                </th>
                                <th
                                  className="MuiTableCell-root MuiTableCell-head pl-net-win MuiTableCell-sizeSmall"
                                  scope="col"
                                >
                                  Net Win
                                </th>
                                <th
                                  className="MuiTableCell-root MuiTableCell-head settled-time MuiTableCell-sizeSmall"
                                  scope="col"
                                />
                              </tr>
                            </thead>
                            <tbody className="MuiTableBody-root apl-table-body webview">
                              {data?.map((item, i) => {
                                return (
                                  <tr
                                    key={i}
                                    className="MuiTableRow-root apl-table-row"
                                  >
                                    <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeSmall">
                                      <span
                                        style={{ marginLeft: "10px" }}
                                        className="txt-bldin-mob"
                                      >
                                        {item?.narration}
                                      </span>
                                    </td>
                                    <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeSmall">
                                      <span className="txt-bldin-mob">
                                        {item?.settledTime}
                                      </span>
                                    </td>
                                    <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeSmall">
                                      <span className="txt-bldin-mob">
                                        {item?.settledTime}
                                      </span>
                                    </td>
                                    <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeSmall">
                                      <span className="txt-bldin-mob">
                                        <div> {item?.memberComm}</div>
                                      </span>
                                    </td>
                                    <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeSmall">
                                      <span className="txt-bldin-mob">
                                        <div
                                          className={`${
                                            item?.memberWin > 0
                                              ? "profit"
                                              : "loss"
                                          }`}
                                        >
                                          {" "}
                                          {item?.memberWin}
                                        </div>
                                      </span>
                                    </td>
                                    <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeSmall">
                                      <button
                                        className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall"
                                        tabIndex={0}
                                        type="button"
                                        aria-label="expand row"
                                      >
                                        <span className="MuiIconButton-label">
                                          <svg
                                            className="MuiSvgIcon-root"
                                            focusable="false"
                                            viewBox="0 0 24 24"
                                            color="#000"
                                            aria-hidden="true"
                                          >
                                            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                                          </svg>
                                        </span>
                                        <span className="MuiTouchRipple-root" />
                                      </button>
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        ) : (
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "100%",
                              color: "white",
                              minHeight: "40vh",
                            }}
                          >
                            <h2>No betting profit and loss yet!</h2>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rules-regulations-footer">
          <div>Rules &amp; Regulations © {new Date().getFullYear()}</div>
        </div>
      </div>
    </div>
  );
};

export default BettingProfitLoss;
