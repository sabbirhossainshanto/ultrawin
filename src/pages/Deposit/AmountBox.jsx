const AmountBox = ({ amount, setAmount, setShowModal }) => {
  return (
    <div className="amountBox">
      <div className="withdraw_text ">
        <p style={{ color: "#3d3d3d" }}>Please enter the amount to deposit</p>
      </div>
      <div className="diposit_form ">
        <div className="w-100 deposit_form_input ">
          <div className="w-100 deposit_form_input ">
            <div className="inputBox " style={{ backgroundColor: "#ebedf4" }}>
              <input
                style={{
                  border: "none",
                  backgroundColor: "#ebedf4",
                  outline: "none",
                }}
                onChange={(e) => setAmount(e.target.value)}
                value={amount !== null && amount !== undefined ? amount : ""}
                id="depositamount"
                name="depositamount"
                type="text"
                className="deposit_form_input  form-control-input-bc ng-untouched ng-pristine ng-valid"
                placeholder="Amount"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="stack-button ">
        <button
          onClick={() => setAmount(300)}
          type="button"
          className="btn_box "
        >
          <span className=""> +300</span>
        </button>
        <button
          onClick={() => setAmount(1000)}
          type="button"
          className="btn_box "
        >
          <span className=""> +1,000</span>
        </button>
        <button
          onClick={() => setAmount(5000)}
          type="button"
          className="btn_box "
        >
          <span className=""> +5,000</span>
        </button>
        <button
          onClick={() => setAmount(10000)}
          type="button"
          className="btn_box "
        >
          <span className=""> +10,000 </span>
        </button>
      </div>

      <button
        disabled={!amount}
        onClick={() => setShowModal(true)}
        type="button"
        title="Deposit"
        className="btnn ng-tns-c159-13 active"
        style={{
          cursor: `${!amount ? "not-allowed" : "pointer"}`,
          opacity: `${!amount ? "0.5" : "1"}`,
        }}
      >
        {" "}
        Proceed To Select Payment Method
      </button>
    </div>
  );
};

export default AmountBox;
