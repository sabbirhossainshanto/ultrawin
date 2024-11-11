import { useState } from "react";
import WithdrawSuccess from "../../components/modal/WithdrawSuccess";
import axios from "axios";
import { API, settings } from "../../api";
import handleRandomToken from "../../utils/handleRandomToken";
import useContextState from "../../hooks/useContextState";
import toast from "react-hot-toast";
import handleEncryptData from "../../utils/handleEncryptData";
import assets from "../../assets";

const WithdrawConfirm = ({
  bank,
  amount,
  setBank,
  setAmount,
  setShowBankAccount,
  setConfirmWithdraw,
}) => {
  const [withdrawSuccess, setWithdrawSuccess] = useState(false);
  const { token } = useContextState();
  const [disable, setDisable] = useState(false);
  /* handle withdraw function */
  const handleCoinSubmit = async (e) => {
    e.preventDefault();
    setDisable(true);
    if (amount?.length > 0 && bank) {
      const generatedToken = handleRandomToken();
      const bankData = {
        type: "withdrawCoins",
        amount: amount,
        bankId: bank?.bankId,
        token: generatedToken,
        site: settings.siteUrl,
      };
      const encryptedData = handleEncryptData(bankData);
      const res = await axios.post(API.bankAccount, encryptedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = res?.data;

      if (data?.success) {
        toast.success(data?.result?.message);
        setWithdrawSuccess(true);
      } else {
        toast.error(data?.error?.errorMessage);
      }
    }
  };
  return (
    <>
      <div
        className="withdraw-account"
        style={{ backgroundColor: "white", padding: "10px", margin: "0px" }}
      >
        <div
          onClick={() => {
            setShowBankAccount(true);
            setConfirmWithdraw(false);
          }}
          className="back-nav-bc "
        >
          <img loading="lazy" src={assets.backArrow} alt="" className="" />
          <span className="back-nav-title-bc ellipsis ">
            Back to Select Account
          </span>
        </div>
        <div className="withdraw-amount ">
          <span className="">Withdrawal Amount</span>
          <div
            style={{ cursor: "pointer" }}
            className="edit-logo"
            onClick={() => {
              setBank("");
              setShowBankAccount(false);
              setConfirmWithdraw(false);
              setAmount("");
            }}
          >
            <img loading="lazy" src={assets.edit} alt="" className="" />
          </div>
        </div>
        <input
          type="text"
          name=""
          className=""
          defaultValue={amount}
          disabled
        />
        <div className="bank-account ">
          <span className="">Bank Account</span>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              setShowBankAccount(true);
              setConfirmWithdraw(false);
            }}
            className="edit-logo "
          >
            <img loading="lazy" src={assets.edit} alt="" className="" />
          </div>
        </div>
        <div className="bank-card1 ">
          <div className="bank-logo1 ">
            <div className="logo ">
              <img
                style={{ maxWidth: "50px", width: "50px" }}
                loading="lazy"
                alt=""
                className=""
                src={assets?.bankPicture}
              />
              <p className="">{bank?.bankName}</p>
            </div>
          </div>
          <div className="bank-inner-box ">
            <div className="bank-detail ">
              <div
                style={{
                  width: "max-content",
                  display: "flex",
                  flexDirection: "row",
                }}
                className=""
              >
                <span className="">Bank :-</span>
                <span style={{ marginLeft: "0.2rem" }} className="">
                  {bank?.bankName}
                </span>
              </div>
            </div>
            <div className="bank-detail ">
              <div
                style={{
                  width: "max-content",
                  display: "flex",
                  flexDirection: "row",
                }}
                className=""
              >
                <span className="">IFSC :-</span>
                <span style={{ marginLeft: "0.2rem" }} className="">
                  {bank?.ifsc}
                </span>
              </div>
            </div>
            <div className="bank-detail ">
              <div
                style={{
                  width: "max-content",
                  display: "flex",
                  flexDirection: "row",
                }}
                className=""
              >
                <span className="">Account No :-</span>
                <span className="bank-detail-txt "> {bank?.accountNumber}</span>
              </div>
            </div>
          </div>
        </div>
        <button
          disabled={disable}
          style={{ cursor: disable ? "not-allowed" : "pointer" }}
          onClick={handleCoinSubmit}
          className="proceed-btn "
        >
          <span className="">Proceed</span>
        </button>
      </div>
      {withdrawSuccess && (
        <WithdrawSuccess setWithdrawSuccess={setWithdrawSuccess} />
      )}
    </>
  );
};

export default WithdrawConfirm;
