import assets from "../../../assets";

const SuspendedMobile = ({ back, lay }) => {
  return (
    <div
      className={`${back ? "back-odd" : ""} ${
        lay ? "lay-odd" : ""
      } disabled mob-exch-odd-button`}
    >
      <img
        className="lock-icon"
        slot="icon-only"
        src={assets.lock}
        alt="lock"
      />
    </div>
  );
};

export default SuspendedMobile;
