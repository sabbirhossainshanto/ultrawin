import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../redux/features/auth/authSlice";
import useBalance from "../../hooks/useBalance";
import { setGroupType } from "../../redux/features/global/globalSlice";

const Account = () => {
  const dispatch = useDispatch();
  const { balance } = useBalance();
  const navigate = useNavigate();

  return (
    <>
      <div className="ios overscroll hydrated mob-view">
        <div slot="fixed" className="ios refresher-ios hydrated">
          <div className="ios hydrated">
            <div className="refresher-pulling">
              <div className="refresher-pulling-icon">
                <ion-icon
                  role="img"
                  className="ios hydrated"
                  aria-label="arrow down"
                />
              </div>
            </div>
            <div className="refresher-refreshing">
              <div className="refresher-refreshing-icon">
                <ion-spinner
                  className="ios spinner-circular hydrated"
                  role="progressbar"
                  style={{ animationDuration: "1400ms" }}
                />
              </div>
            </div>{" "}
          </div>
        </div>
        <div className="router-ctn">
          <div className="dashboard-view-ctn">
            <div className="dashboard-ctn">
              <div className="header-content">
                <div className="user-details-section">
                  <div className="user-balance">
                    <div>Available Balance</div>
                    <div>{balance?.availBalance}</div>
                  </div>
                </div>
              </div>
              <div className="header-content-ctn">
                <div className="exposure-credit">
                  <div className="header-amount">
                    {balance?.deductedExposure}
                  </div>
                  <div className="header-content-text">Exposure Credited</div>
                </div>
                <div className="bonus-credit">
                  <div className="header-amount">0.00</div>
                  <div className="header-content-text">Bonus Rewarded</div>
                </div>
              </div>
              <div className="reports-header">Reports Menu</div>
              <div className="dashboard-cards-ctn ios hydrated">
                <div className="dashboard-item ios hydrated">
                  <Link className="dashboard-item-link" to="/deposit">
                    <svg
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                      fill="none"
                      className="dashboard-item-icon"
                    >
                      <path
                        d="M5 6.08335L5.6154 6.75L7 5.25M4.6 10.5H7.4C7.96005 10.5 8.2401 10.5 8.454 10.391C8.64215 10.2951 8.79515 10.1422 8.891 9.954C9 9.7401 9 9.46005 9 8.9V3.1C9 2.53995 9 2.25992 8.891 2.04601C8.79515 1.85785 8.64215 1.70486 8.454 1.60899C8.2401 1.5 7.96005 1.5 7.4 1.5H4.6C4.03995 1.5 3.75992 1.5 3.54601 1.60899C3.35785 1.70486 3.20486 1.85785 3.10899 2.04601C3 2.25992 3 2.53994 3 3.1V8.9C3 9.46005 3 9.7401 3.10899 9.954C3.20486 10.1422 3.35785 10.2951 3.54601 10.391C3.75992 10.5 4.03994 10.5 4.6 10.5Z"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="dashboard-item-text">Deposit</span>
                  </Link>
                </div>
                <div className="dashboard-item ios hydrated">
                  <Link className="dashboard-item-link" to="/withdraw">
                    <svg
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                      fill="none"
                      className="dashboard-item-icon"
                    >
                      <g clipPath="url(#clip0_93_3535)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.5 2C11.5 1.17157 10.8285 0.5 10 0.5H2C1.17158 0.5 0.5 1.17157 0.5 2V7C0.5 7.82845 1.17158 8.5 2 8.5H2.5C2.77614 8.5 3 8.27615 3 8C3 7.72385 2.77614 7.5 2.5 7.5H2C1.72386 7.5 1.5 7.27615 1.5 7V4H10.5V7C10.5 7.27615 10.2761 7.5 10 7.5H9.5C9.22385 7.5 9 7.72385 9 8C9 8.27615 9.22385 8.5 9.5 8.5H10C10.8285 8.5 11.5 7.82845 11.5 7V2ZM10.5 3V2C10.5 1.72386 10.2761 1.5 10 1.5H2C1.72386 1.5 1.5 1.72385 1.5 2V3H10.5Z"
                          fill="white"
                        />
                        <path
                          d="M6.49999 11C6.49999 11.2762 6.27614 11.5 5.99999 11.5C5.72384 11.5 5.49999 11.2762 5.49999 11V8.20345L4.85356 8.8498C4.65828 9.04515 4.34172 9.04515 4.14644 8.8498C3.95119 8.65465 3.95119 8.338 4.14644 8.1428L5.64619 6.64615C5.84149 6.4512 6.15779 6.4514 6.35294 6.6465L7.85249 8.1461C8.04779 8.3414 8.04779 8.65795 7.85249 8.85325C7.65724 9.04845 7.34064 9.04845 7.14539 8.85325L6.49999 8.20785V11Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_93_3535">
                          <rect width={12} height={12} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className="dashboard-item-text">Withdraw</span>
                  </Link>
                </div>
                <div className="dashboard-item ios hydrated">
                  <Link className="dashboard-item-link" to="/my_bets">
                    <svg
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                      fill="none"
                      className="dashboard-item-icon"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.64644 0.646445C4.74021 0.55268 4.86739 0.5 5 0.5H9C9.82845 0.5 10.5 1.17157 10.5 2V10C10.5 10.8284 9.82845 11.5 9 11.5H3C2.17158 11.5 1.5 10.8284 1.5 10V4C1.5 3.86739 1.55268 3.74021 1.64645 3.64644L4.64644 0.646445ZM9 1.5H5.5V4C5.5 4.27614 5.27615 4.5 5 4.5H2.5V10C2.5 10.2761 2.72386 10.5 3 10.5H9C9.27615 10.5 9.5 10.2761 9.5 10V2C9.5 1.72386 9.27615 1.5 9 1.5ZM3.2071 3.5H4.5V2.2071L3.2071 3.5ZM3.5 6.5C3.5 6.22385 3.72386 6 4 6H8C8.27615 6 8.5 6.22385 8.5 6.5C8.5 6.77615 8.27615 7 8 7H4C3.72386 7 3.5 6.77615 3.5 6.5ZM3.5 8.5C3.5 8.22385 3.72386 8 4 8H8C8.27615 8 8.5 8.22385 8.5 8.5C8.5 8.77615 8.27615 9 8 9H4C3.72386 9 3.5 8.77615 3.5 8.5Z"
                        fill="white"
                      />
                    </svg>
                    <span className="dashboard-item-text">My Bets</span>
                  </Link>
                </div>
                <div className="dashboard-item ios hydrated">
                  <Link className="dashboard-item-link" to="/account_statement">
                    <svg
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                      fill="none"
                      className="dashboard-item-icon"
                    >
                      <path
                        d="M11 5.5V3.915L6 1.03L1 3.915V5.5H2V9.5H1V10.5H11V9.5H10V5.5H11ZM2 4.5L6 2.19L10 4.5H2ZM3 9.5V5.5H4V9.5H3ZM5 9.5V5.5H7V9.5H5ZM9 9.5H8V5.5H9V9.5Z"
                        fill="white"
                      />
                    </svg>
                    <span className="dashboard-item-text">
                      Account Statement
                    </span>
                  </Link>
                </div>
                <div className="dashboard-item ios hydrated">
                  <Link className="dashboard-item-link" to="/pl_statement">
                    <svg
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                      fill="none"
                      className="dashboard-item-icon"
                    >
                      <path
                        d="M10.855 3.645C10.8085 3.59814 10.7532 3.56094 10.6923 3.53555C10.6313 3.51017 10.566 3.4971 10.5 3.4971C10.434 3.4971 10.3686 3.51017 10.3077 3.53555C10.2468 3.56094 10.1915 3.59814 10.145 3.645L6.99997 6.795L4.85497 4.645C4.80849 4.59814 4.75319 4.56094 4.69226 4.53555C4.63133 4.51017 4.56598 4.4971 4.49997 4.4971C4.43396 4.4971 4.36861 4.51017 4.30768 4.53555C4.24675 4.56094 4.19145 4.59814 4.14497 4.645L1.14497 7.645C1.09811 7.69148 1.06091 7.74678 1.03552 7.80771C1.01014 7.86864 0.99707 7.93399 0.99707 8C0.99707 8.06601 1.01014 8.13136 1.03552 8.19229C1.06091 8.25322 1.09811 8.30852 1.14497 8.355C1.19145 8.40186 1.24675 8.43906 1.30768 8.46445C1.36861 8.48983 1.43396 8.5029 1.49997 8.5029C1.56598 8.5029 1.63133 8.48983 1.69226 8.46445C1.75319 8.43906 1.80849 8.40186 1.85497 8.355L4.49997 5.705L6.64497 7.855C6.69145 7.90186 6.74675 7.93906 6.80768 7.96445C6.86861 7.98983 6.93396 8.0029 6.99997 8.0029C7.06598 8.0029 7.13133 7.98983 7.19226 7.96445C7.25319 7.93906 7.30849 7.90186 7.35497 7.855L10.855 4.355C10.9018 4.30852 10.939 4.25322 10.9644 4.19229C10.9898 4.13136 11.0029 4.06601 11.0029 4C11.0029 3.93399 10.9898 3.86864 10.9644 3.80771C10.939 3.74678 10.9018 3.69148 10.855 3.645Z"
                        fill="white"
                      />
                    </svg>
                    <span className="dashboard-item-text">P/L Statement</span>
                  </Link>
                </div>
                <div className="dashboard-item ios hydrated">
                  <Link className="dashboard-item-link" to="/my_transactions">
                    <svg
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                      fill="none"
                      className="dashboard-item-icon"
                    >
                      <path
                        d="M3 11C2.58333 11 2.22917 10.8542 1.9375 10.5625C1.64583 10.2708 1.5 9.91667 1.5 9.5V8H3V1L3.75 1.75L4.5 1L5.25 1.75L6 1L6.75 1.75L7.5 1L8.25 1.75L9 1L9.75 1.75L10.5 1V9.5C10.5 9.91667 10.3542 10.2708 10.0625 10.5625C9.77083 10.8542 9.41667 11 9 11H3ZM9 10C9.14167 10 9.26042 9.95208 9.35625 9.85625C9.45208 9.76042 9.5 9.64167 9.5 9.5V2.5H4V8H8.5V9.5C8.5 9.64167 8.54792 9.76042 8.64375 9.85625C8.73958 9.95208 8.85833 10 9 10ZM4.5 4.5V3.5H7.5V4.5H4.5ZM4.5 6V5H7.5V6H4.5ZM8.5 4.5C8.35833 4.5 8.23958 4.45208 8.14375 4.35625C8.04792 4.26042 8 4.14167 8 4C8 3.85833 8.04792 3.73958 8.14375 3.64375C8.23958 3.54792 8.35833 3.5 8.5 3.5C8.64167 3.5 8.76042 3.54792 8.85625 3.64375C8.95208 3.73958 9 3.85833 9 4C9 4.14167 8.95208 4.26042 8.85625 4.35625C8.76042 4.45208 8.64167 4.5 8.5 4.5ZM8.5 6C8.35833 6 8.23958 5.95208 8.14375 5.85625C8.04792 5.76042 8 5.64167 8 5.5C8 5.35833 8.04792 5.23958 8.14375 5.14375C8.23958 5.04792 8.35833 5 8.5 5C8.64167 5 8.76042 5.04792 8.85625 5.14375C8.95208 5.23958 9 5.35833 9 5.5C9 5.64167 8.95208 5.76042 8.85625 5.85625C8.76042 5.95208 8.64167 6 8.5 6ZM3 10H7.5V9H2.5V9.5C2.5 9.64167 2.54792 9.76042 2.64375 9.85625C2.73958 9.95208 2.85833 10 3 10Z"
                        fill="white"
                      />
                    </svg>
                    <span className="dashboard-item-text">My Transactions</span>
                  </Link>
                </div>
                <div className="dashboard-item ios hydrated">
                  <Link
                    className="dashboard-item-link"
                    to="/bonus/turnover_history"
                  >
                    <svg
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                      fill="none"
                      className="dashboard-item-icon"
                    >
                      <path
                        d="M6 10.5C4.85 10.5 3.84792 10.1188 2.99375 9.35625C2.13958 8.59375 1.65 7.64167 1.525 6.5H2.55C2.66667 7.36667 3.05208 8.08333 3.70625 8.65C4.36042 9.21667 5.125 9.5 6 9.5C6.975 9.5 7.80208 9.16042 8.48125 8.48125C9.16042 7.80208 9.5 6.975 9.5 6C9.5 5.025 9.16042 4.19792 8.48125 3.51875C7.80208 2.83958 6.975 2.5 6 2.5C5.425 2.5 4.8875 2.63333 4.3875 2.9C3.8875 3.16667 3.46667 3.53333 3.125 4H4.5V5H1.5V2H2.5V3.175C2.925 2.64167 3.44375 2.22917 4.05625 1.9375C4.66875 1.64583 5.31667 1.5 6 1.5C6.625 1.5 7.21042 1.61875 7.75625 1.85625C8.30208 2.09375 8.77708 2.41458 9.18125 2.81875C9.58542 3.22292 9.90625 3.69792 10.1438 4.24375C10.3813 4.78958 10.5 5.375 10.5 6C10.5 6.625 10.3813 7.21042 10.1438 7.75625C9.90625 8.30208 9.58542 8.77708 9.18125 9.18125C8.77708 9.58542 8.30208 9.90625 7.75625 10.1438C7.21042 10.3813 6.625 10.5 6 10.5ZM7.4 8.1L5.5 6.2V3.5H6.5V5.8L8.1 7.4L7.4 8.1Z"
                        fill="white"
                      />
                    </svg>
                    <span className="dashboard-item-text">
                      Turnover history
                    </span>
                  </Link>
                </div>
                <div className="dashboard-item ios hydrated">
                  <Link className="dashboard-item-link" to="/deposit-turnover">
                    <svg
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                      fill="none"
                      className="dashboard-item-icon"
                    >
                      <path
                        d="M6 10.5C4.85 10.5 3.84792 10.1188 2.99375 9.35625C2.13958 8.59375 1.65 7.64167 1.525 6.5H2.55C2.66667 7.36667 3.05208 8.08333 3.70625 8.65C4.36042 9.21667 5.125 9.5 6 9.5C6.975 9.5 7.80208 9.16042 8.48125 8.48125C9.16042 7.80208 9.5 6.975 9.5 6C9.5 5.025 9.16042 4.19792 8.48125 3.51875C7.80208 2.83958 6.975 2.5 6 2.5C5.425 2.5 4.8875 2.63333 4.3875 2.9C3.8875 3.16667 3.46667 3.53333 3.125 4H4.5V5H1.5V2H2.5V3.175C2.925 2.64167 3.44375 2.22917 4.05625 1.9375C4.66875 1.64583 5.31667 1.5 6 1.5C6.625 1.5 7.21042 1.61875 7.75625 1.85625C8.30208 2.09375 8.77708 2.41458 9.18125 2.81875C9.58542 3.22292 9.90625 3.69792 10.1438 4.24375C10.3813 4.78958 10.5 5.375 10.5 6C10.5 6.625 10.3813 7.21042 10.1438 7.75625C9.90625 8.30208 9.58542 8.77708 9.18125 9.18125C8.77708 9.58542 8.30208 9.90625 7.75625 10.1438C7.21042 10.3813 6.625 10.5 6 10.5ZM7.4 8.1L5.5 6.2V3.5H6.5V5.8L8.1 7.4L7.4 8.1Z"
                        fill="white"
                      />
                    </svg>
                    <span className="dashboard-item-text">
                      Deposit Turnover
                    </span>
                  </Link>
                </div>
                <div className="dashboard-item ios hydrated">
                  <Link
                    className="dashboard-item-link"
                    to="/set-button-variables"
                  >
                    <svg
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                      fill="none"
                      className="dashboard-item-icon"
                    >
                      <g clipPath="url(#clip0_93_3592)">
                        <path
                          d="M6 7.5C6.82845 7.5 7.5 6.82845 7.5 6C7.5 5.17155 6.82845 4.5 6 4.5C5.17155 4.5 4.5 5.17155 4.5 6C4.5 6.82845 5.17155 7.5 6 7.5Z"
                          stroke="white"
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M1 6.43995V5.55995C1 5.03995 1.425 4.60997 1.95 4.60997C2.855 4.60997 3.225 3.96997 2.77 3.18497C2.51 2.73497 2.665 2.14997 3.12 1.88997L3.985 1.39497C4.38 1.15997 4.89 1.29997 5.125 1.69497L5.18 1.78997C5.63 2.57497 6.37 2.57497 6.825 1.78997L6.88 1.69497C7.115 1.29997 7.625 1.15997 8.02 1.39497L8.885 1.88997C9.34 2.14997 9.495 2.73497 9.235 3.18497C8.78 3.96997 9.15 4.60997 10.055 4.60997C10.575 4.60997 11.005 5.03495 11.005 5.55995V6.43995C11.005 6.95995 10.58 7.38995 10.055 7.38995C9.15 7.38995 8.78 8.02995 9.235 8.81495C9.495 9.26995 9.34 9.84995 8.885 10.1099L8.02 10.6049C7.625 10.8399 7.115 10.6999 6.88 10.3049L6.825 10.2099C6.375 9.42495 5.635 9.42495 5.18 10.2099L5.125 10.3049C4.89 10.6999 4.38 10.8399 3.985 10.6049L3.12 10.1099C2.665 9.84995 2.51 9.26495 2.77 8.81495C3.225 8.02995 2.855 7.38995 1.95 7.38995C1.425 7.38995 1 6.95995 1 6.43995Z"
                          stroke="white"
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_93_3592">
                          <rect width={12} height={12} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className="dashboard-item-text">Stake Settings</span>
                  </Link>
                </div>
                <div className="dashboard-item ios hydrated">
                  <Link className="dashboard-item-link" to="/change-password">
                    <svg
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                      fill="none"
                      className="dashboard-item-icon"
                    >
                      <g clipPath="url(#clip0_93_3592)">
                        <path
                          d="M6 7.5C6.82845 7.5 7.5 6.82845 7.5 6C7.5 5.17155 6.82845 4.5 6 4.5C5.17155 4.5 4.5 5.17155 4.5 6C4.5 6.82845 5.17155 7.5 6 7.5Z"
                          stroke="white"
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M1 6.43995V5.55995C1 5.03995 1.425 4.60997 1.95 4.60997C2.855 4.60997 3.225 3.96997 2.77 3.18497C2.51 2.73497 2.665 2.14997 3.12 1.88997L3.985 1.39497C4.38 1.15997 4.89 1.29997 5.125 1.69497L5.18 1.78997C5.63 2.57497 6.37 2.57497 6.825 1.78997L6.88 1.69497C7.115 1.29997 7.625 1.15997 8.02 1.39497L8.885 1.88997C9.34 2.14997 9.495 2.73497 9.235 3.18497C8.78 3.96997 9.15 4.60997 10.055 4.60997C10.575 4.60997 11.005 5.03495 11.005 5.55995V6.43995C11.005 6.95995 10.58 7.38995 10.055 7.38995C9.15 7.38995 8.78 8.02995 9.235 8.81495C9.495 9.26995 9.34 9.84995 8.885 10.1099L8.02 10.6049C7.625 10.8399 7.115 10.6999 6.88 10.3049L6.825 10.2099C6.375 9.42495 5.635 9.42495 5.18 10.2099L5.125 10.3049C4.89 10.6999 4.38 10.8399 3.985 10.6049L3.12 10.1099C2.665 9.84995 2.51 9.26495 2.77 8.81495C3.225 8.02995 2.855 7.38995 1.95 7.38995C1.425 7.38995 1 6.95995 1 6.43995Z"
                          stroke="white"
                          strokeMiterlimit={10}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_93_3592">
                          <rect width={12} height={12} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className="dashboard-item-text">Change Password</span>
                  </Link>
                </div>
                <div className="dashboard-item ios hydrated">
                  <Link className="dashboard-item-link" to="/profile">
                    <svg
                      width={10}
                      height={10}
                      viewBox="0 0 10 10"
                      fill="none"
                      className="dashboard-item-icon sport-icon"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.28127 8.99999H1.71909C1.36589 8.99999 1.10508 8.65149 1.23829 8.33099C1.85638 6.84899 3.30847 5.99999 4.99993 5.99999C6.6919 5.99999 8.14398 6.84899 8.76207 8.33099C8.89529 8.65149 8.63447 8.99999 8.28127 8.99999ZM2.95833 2.99999C2.95833 1.89699 3.8745 0.999992 4.99993 0.999992C6.12586 0.999992 7.04152 1.89699 7.04152 2.99999C7.04152 4.10299 6.12586 4.99999 4.99993 4.99999C3.8745 4.99999 2.95833 4.10299 2.95833 2.99999ZM9.97784 8.81799C9.60678 7.13849 8.44613 5.89898 6.91851 5.33648C7.728 4.69798 8.20012 3.66547 8.02659 2.53497C7.82549 1.22347 6.7118 0.173988 5.36741 0.0209884C3.51161 -0.190512 1.93754 1.22449 1.93754 2.99999C1.93754 3.94499 2.38465 4.78698 3.08185 5.33648C1.55372 5.89898 0.393582 7.13849 0.022012 8.81799C-0.112733 9.42849 0.389499 9.99999 1.02699 9.99999H8.97286C9.61086 9.99999 10.1131 9.42849 9.97784 8.81799Z"
                        fill="white"
                      />
                    </svg>
                    <span className="dashboard-item-text">My Profile</span>
                  </Link>
                </div>
              </div>
              <div
                style={{
                  gridTemplateColumns: "auto",
                }}
                className="dashboard-cards-ctn ios hydrated"
              >
                <div className="dashboard-item ios hydrated">
                  <button
                    onClick={() => {
                      dispatch(logout());
                      navigate("/");
                      dispatch(setGroupType(null));
                    }}
                    className="MuiButtonBase-root MuiButton-root MuiButton-text dashboard-sign-out-btn"
                    tabIndex={0}
                    type="button"
                  >
                    <span className="MuiButton-label">
                      <svg
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                        fill="none"
                        className="dashboard-sign-out-logo"
                      >
                        <path
                          d="M3.93914 6.035C3.93914 5.83 4.10914 5.66 4.31414 5.66H7.05415V1.43C7.04915 1.19 6.85915 1 6.61915 1C3.67414 1 1.61914 3.055 1.61914 6C1.61914 8.945 3.67414 11 6.61915 11C6.85415 11 7.04915 10.81 7.04915 10.57V6.405H4.31414C4.10414 6.41 3.93914 6.24 3.93914 6.035Z"
                          fill="currentColor"
                        />
                        <path
                          d="M10.2708 5.7701L8.85078 4.34508C8.70578 4.20008 8.46578 4.20008 8.32078 4.34508C8.17578 4.49008 8.17578 4.73008 8.32078 4.87508L9.10078 5.6551H7.05078V6.4051H9.09578L8.31578 7.1851C8.17078 7.3301 8.17078 7.5701 8.31578 7.7151C8.39078 7.7901 8.48578 7.8251 8.58078 7.8251C8.67578 7.8251 8.77078 7.7901 8.84578 7.7151L10.2658 6.2901C10.4158 6.1501 10.4158 5.9151 10.2708 5.7701Z"
                          fill="currentColor"
                        />
                      </svg>
                      <span className="dashboard-item-text logout-text">
                        Logout
                      </span>
                    </span>
                    <span className="MuiTouchRipple-root" />
                  </button>
                </div>
              </div>
              <div className="logout-item-row" />
              <div
                className="MuiBackdrop-root backdrop-ctn"
                aria-hidden="true"
                style={{ opacity: 0, visibility: "hidden" }}
              />
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

export default Account;
