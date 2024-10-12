import { useNavigate } from "react-router-dom";
import { formatDate } from "../../../utils/formateDate";
import assets from "../../../assets";
import SuspendedMobile from "../../shared/Suspended/SuspendedMobile";

const MobileGroup = ({ data, keys }) => {
  const navigate = useNavigate();
  const navigateGameList = (keys) => {
    navigate(`/game-details/${data[keys]?.eventTypeId}/${keys}`);
  };
  return (
    <>
      <div onClick={() => navigateGameList(keys)} className="mob-view">
        <div className="event-details-ctn" style={{ position: "relative" }}>
          <div className="event-name mob-event-name">
            <div className="event-name-and-link">
              <div className="home-away-team">
                <div className="team-names">
                  {data[keys]?.player1}
                  &nbsp; V &nbsp; {data[keys]?.player2}
                </div>
                <div className="team-names">
                  <span className="date">(12/10/24 , 03:30 PM)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="enabled-markets">
            <div className="market-enabled">
              <div className="market-enabled-inner">MO</div>
            </div>
            <div className="market-enabled">
              <div className="market-enabled-inner">BM</div>
            </div>
            <div className="market-enabled">
              <div className="market-enabled-inner">F</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mob-odds-row new-odds-row">
        {data?.[keys]?.inPlay ? (
          <img className="live-img-display" src={assets.live} />
        ) : (
          <div className="date-display">
            <div> {formatDate(data, keys).day}</div>
            <div> {formatDate(data, keys).time}</div>
          </div>
        )}

        <div className="mob-odds-block">
          <div className="mob-exchange-btn-odd-row">
            <div className="mob-exch-odd-view">
              {data[keys]?.status === "OPEN" && data[keys][0] ? (
                <div className="back-odd mob-exch-odd-button">
                  <div className="mob-exch-odd-button-content">
                    <div className="price">
                      {" "}
                      {data[keys]?.[0]?.ex?.availableToBack[0]?.price}
                    </div>
                    <div className="size">
                      {" "}
                      {data[keys]?.[0]?.ex?.availableToBack[0]?.size}
                    </div>
                  </div>
                </div>
              ) : (
                <SuspendedMobile back={true} />
              )}
            </div>
            <div className="mob-exch-odd-view">
              {data[keys]?.status === "OPEN" && data[keys][0] ? (
                <div className="lay-odd mob-exch-odd-button">
                  <div className="mob-exch-odd-button-content">
                    <div className="price">
                      {" "}
                      {data[keys]?.[0]?.ex?.availableToLay[0]?.price}
                    </div>
                    <div className="size">
                      {" "}
                      {data[keys]?.[0]?.ex?.availableToLay[0]?.size}
                    </div>
                  </div>
                </div>
              ) : (
                <SuspendedMobile lay={true} />
              )}
            </div>
          </div>
        </div>
        <div className="mob-odds-block">
          <div className="mob-exchange-btn-odd-row">
            <div className="mob-exch-odd-view">
              {data[keys]?.status === "OPEN" && data[keys][2] ? (
                <div className="back-odd mob-exch-odd-button">
                  <div className="mob-exch-odd-button-content">
                    <div className="price">
                      {" "}
                      {data[keys]?.[2]?.ex?.availableToBack[0]?.price}
                    </div>
                    <div className="size">
                      {" "}
                      {data[keys]?.[2]?.ex?.availableToBack[0]?.size}
                    </div>
                  </div>
                </div>
              ) : (
                <SuspendedMobile back={true} />
              )}
            </div>
            <div className="mob-exch-odd-view">
              {data[keys]?.status === "OPEN" && data[keys][2] ? (
                <div className="lay-odd mob-exch-odd-button">
                  <div className="mob-exch-odd-button-content">
                    <div className="price">
                      {" "}
                      {data[keys]?.[2]?.ex?.availableToLay[0]?.price}
                    </div>
                    <div className="size">
                      {" "}
                      {data[keys]?.[2]?.ex?.availableToLay[0]?.size}
                    </div>
                  </div>
                </div>
              ) : (
                <SuspendedMobile lay={true} />
              )}
            </div>
          </div>
        </div>
        <div className="mob-odds-block">
          <div className="mob-exchange-btn-odd-row">
            <div className="mob-exch-odd-view">
              {data[keys]?.status === "OPEN" && data[keys][1] ? (
                <div className="back-odd mob-exch-odd-button">
                  <div className="mob-exch-odd-button-content">
                    <div className="price">
                      {" "}
                      {data[keys]?.[1]?.ex?.availableToBack[0]?.price}
                    </div>
                    <div className="size">
                      {" "}
                      {data[keys]?.[1]?.ex?.availableToBack[0]?.size}
                    </div>
                  </div>
                </div>
              ) : (
                <SuspendedMobile back={true} />
              )}
            </div>
            <div className="mob-exch-odd-view">
              {data[keys]?.status === "OPEN" && data[keys][1] ? (
                <div className="lay-odd mob-exch-odd-button">
                  <div className="mob-exch-odd-button-content">
                    <div className="price">
                      {" "}
                      {data[keys]?.[1]?.ex?.availableToLay[0]?.price}
                    </div>
                    <div className="size">
                      {" "}
                      {data[keys]?.[1]?.ex?.availableToLay[0]?.size}
                    </div>
                  </div>
                </div>
              ) : (
                <SuspendedMobile lay={true} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileGroup;
