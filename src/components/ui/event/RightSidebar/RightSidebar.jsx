import { useParams } from "react-router-dom";
import BetSlipDesktop from "./BetSlipDesktop";
import Video from "./Video";
import useIFrame from "../../../../hooks/useIFrame";

const RightSidebar = () => {
  const { eventId, eventTypeId } = useParams();
  const { iFrameUrl } = useIFrame(eventTypeId, eventId);
  return (
    <div className="stream-section md hydrated">
      <div className="sticky-col">
        {iFrameUrl?.url && <Video url={iFrameUrl?.url} />}
        <BetSlipDesktop />
        {/* <div className="mt-10">
          <div className="trending-games-ctn">
            <div className="trending-game-heading">
              <div>Trending Games</div>
              <a className="see-more" href="/casino">
                See More{" "}
                <svg
                  className="MuiSvgIcon-root"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
                </svg>{" "}
              </a>
            </div>
            <div className="games-container">
              <div className="trending-game-card">
                <img
                  loading="lazy"
                  src="https://cdn.dreamdelhi.com/trending/Diamonds.webp"
                />
              </div>
              <div className="trending-game-card">
                <img
                  loading="lazy"
                  src="https://cdn.dreamdelhi.com/trending/Dice.webp"
                />
              </div>
              <div className="trending-game-card">
                <img
                  loading="lazy"
                  src="https://cdn.dreamdelhi.com/trending/Hilo.webp"
                />
              </div>
              <div className="trending-game-card">
                <img
                  loading="lazy"
                  src="https://cdn.dreamdelhi.com/trending/Limbo.webp"
                />
              </div>
              <div className="trending-game-card">
                <img
                  loading="lazy"
                  src="https://cdn.dreamdelhi.com/plinko.webp"
                />
              </div>
              <div className="trending-game-card">
                <img
                  loading="lazy"
                  src="https://cdn.dreamdelhi.com/trending/xroulette.png"
                />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default RightSidebar;
