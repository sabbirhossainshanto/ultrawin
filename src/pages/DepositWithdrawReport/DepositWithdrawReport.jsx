import { useState } from "react";
import useDepositStatement from "../../hooks/useDepositStatement";
import useWithdrawStatement from "../../hooks/useWithdrawStatement";
import DepositStatement from "./DepositStatement";
import WithdrawStatement from "./WithdrawStatement";

const DepositWithdrawReport = () => {
  const [selectedReport, setSelectedReport] = useState("deposit");
  const { accountStatement } = useDepositStatement();
  const { withdrawStatement } = useWithdrawStatement();

  return (
    <div className="md hydrated">
      <div className="router-ctn">
        <div className="support-container tx-request-ctn tr-ctn">
          <button className="rbb-btn">
            <svg
              className="MuiSvgIcon-root rbb-icon"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z" />
            </svg>
            <div className="rbb-btn-text">back</div>
          </button>
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
                        d="M3 11C2.58333 11 2.22917 10.8542 1.9375 10.5625C1.64583 10.2708 1.5 9.91667 1.5 9.5V8H3V1L3.75 1.75L4.5 1L5.25 1.75L6 1L6.75 1.75L7.5 1L8.25 1.75L9 1L9.75 1.75L10.5 1V9.5C10.5 9.91667 10.3542 10.2708 10.0625 10.5625C9.77083 10.8542 9.41667 11 9 11H3ZM9 10C9.14167 10 9.26042 9.95208 9.35625 9.85625C9.45208 9.76042 9.5 9.64167 9.5 9.5V2.5H4V8H8.5V9.5C8.5 9.64167 8.54792 9.76042 8.64375 9.85625C8.73958 9.95208 8.85833 10 9 10ZM4.5 4.5V3.5H7.5V4.5H4.5ZM4.5 6V5H7.5V6H4.5ZM8.5 4.5C8.35833 4.5 8.23958 4.45208 8.14375 4.35625C8.04792 4.26042 8 4.14167 8 4C8 3.85833 8.04792 3.73958 8.14375 3.64375C8.23958 3.54792 8.35833 3.5 8.5 3.5C8.64167 3.5 8.76042 3.54792 8.85625 3.64375C8.95208 3.73958 9 3.85833 9 4C9 4.14167 8.95208 4.26042 8.85625 4.35625C8.76042 4.45208 8.64167 4.5 8.5 4.5ZM8.5 6C8.35833 6 8.23958 5.95208 8.14375 5.85625C8.04792 5.76042 8 5.64167 8 5.5C8 5.35833 8.04792 5.23958 8.14375 5.14375C8.23958 5.04792 8.35833 5 8.5 5C8.64167 5 8.76042 5.04792 8.85625 5.14375C8.95208 5.23958 9 5.35833 9 5.5C9 5.64167 8.95208 5.76042 8.85625 5.85625C8.76042 5.95208 8.64167 6 8.5 6ZM3 10H7.5V9H2.5V9.5C2.5 9.64167 2.54792 9.76042 2.64375 9.85625C2.73958 9.95208 2.85833 10 3 10Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div className="report-title">My Transactions</div>
                </div>
              </div>
              <div className="report-filters rh-web-view">
                <div
                  className="select-template"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "30px",
                    gap: "5px",
                  }}
                >
                  <div style={{ color: "white" }} className="st-label">
                    Transaction Type
                  </div>

                  <div style={{ backgroundColor: "white" }}>
                    <select
                      onChange={(e) => setSelectedReport(e.target.value)}
                      name=""
                      id=""
                    >
                      <option value="deposit"> Deposit</option>
                      <option value="withdraw">Withdraw</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="report-filters rh-mob-view">
                <div className="two-filters">
                  <div
                    className="select-template"
                    style={{
                      paddingTop: "5px",
                      display: "flex",
                      flexDirection: "row",
                      gap: "10px",
                    }}
                  >
                    <div style={{ color: "white" }} className="st-label">
                      Transaction Type
                    </div>
                    <div style={{ backgroundColor: "white" }}>
                      <select
                        onChange={(e) => setSelectedReport(e.target.value)}
                        name=""
                        id=""
                      >
                        <option value="deposit"> Deposit</option>
                        <option value="withdraw">Withdraw</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="two-filters" />
              </div>
            </div>
            {selectedReport === "deposit" ? (
              <DepositStatement accountStatement={accountStatement} />
            ) : (
              <WithdrawStatement withdrawStatement={withdrawStatement} />
            )}
          </div>
        </div>
        <div className="rules-regulations-footer">
          <div>Rules &amp; Regulations © 2024</div>
        </div>
      </div>
    </div>
  );
};

export default DepositWithdrawReport;
