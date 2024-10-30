import { useState } from "react";
import "../../assets/css/style.css";
import AmountBox from "./AmountBox";
import PaymentMethods from "./PaymentMethods";
import UploadTransaction from "./UploadTransaction";
import DepositModal from "../../components/modal/DepositModal";

const Deposit = () => {
  const [amount, setAmount] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [paymentMethods, setPaymentMethods] = useState(false);
  const [uploadTransaction, setUploadTransaction] = useState(false);
  const [paymentId, setPaymentId] = useState("");

  return (
    <div className="router-ctn">
      <div className="ds-view-ctn">
        <div className="punter-view" id="main-content">
          <div className="sports-view-ctn">
            {!paymentMethods && !uploadTransaction && (
              <AmountBox
                amount={amount}
                setAmount={setAmount}
                setShowModal={setShowModal}
              />
            )}
            {uploadTransaction && (
              <UploadTransaction paymentId={paymentId} amount={amount} />
            )}
            {paymentMethods && (
              <PaymentMethods
                setUploadTransaction={setUploadTransaction}
                setPaymentMethods={setPaymentMethods}
                setPaymentId={setPaymentId}
                amount={amount}
              />
            )}
            {showModal && (
              <DepositModal
                amount={amount}
                setShowModal={setShowModal}
                setPaymentMethods={setPaymentMethods}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deposit;
