import { useNavigate } from "react-router-dom";
import usePopularGames from "../../../hooks/usePopularGames";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { settings } from "../../../api";
import toast from "react-hot-toast";
import WarningCondition from "../WarningCondition/WarningCondition";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

const PopularGames = () => {
  const navigate = useNavigate();
  const { token, bonusToken } = useSelector((state) => state.auth);
  const [error, setError] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const [gameInfo, setGameInfo] = useState({ gameName: "", gameId: "" });
  const { data } = usePopularGames();

  const handleNavigateToIFrame = (game) => {
    console.log(game);
    if (token) {
      if (bonusToken) {
        return setError("Bonus wallet is available only on sports.");
      }
      if (settings.casinoCurrency !== "AED") {
        navigate(`/casino/${game?.gameName.replace(/ /g, "")}/${game?.gameId}`);
      } else {
        setGameInfo({ gameName: "", gameId: "" });
        setGameInfo({ gameName: game?.gameName, gameId: game?.gameId });
        setShowWarning(true);
      }
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    if (error) {
      return toast.error(error);
    }
  }, [error]);

  return (
    <>
      {showWarning && (
        <WarningCondition gameInfo={gameInfo} setShowWarning={setShowWarning} />
      )}
      <div className="game-carousel-ctn">
        <div className="border-shadow-container">
          <span className="text">Popular Games</span>
        </div>
        <div className="slick-slider slick-initialized" dir="ltr">
          <div className="jss45 jss46">
            <button
              className="MuiButtonBase-root MuiIconButton-root jss48"
              tabIndex={0}
              type="button"
            >
              <span className="MuiIconButton-label">
                <svg
                  className="MuiSvgIcon-root jss49"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  height="12px"
                  style={{ color: "rgb(255, 255, 255)" }}
                >
                  <path d="M16.62 2.99c-.49-.49-1.28-.49-1.77 0L6.54 11.3c-.39.39-.39 1.02 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76z" />
                </svg>
              </span>
              <span className="MuiTouchRipple-root" />
            </button>
          </div>

          <Swiper
            spaceBetween={10}
            slidesPerView="auto"
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <div className="slick-list">
              <div
                className="slick-track"
                style={{
                  opacity: 1,
                  height: "200px",
                  display: "flex",
                  gap: "10px",
                  overflow: "auto",
                }}
              >
                {data?.map((pGame) => {
                  return (
                    <SwiperSlide
                      onClick={() => handleNavigateToIFrame(pGame)}
                      key={pGame?.gameId}
                      style={{
                        width: "150px",
                        height: "200px",
                        cursor: "pointer",
                        background: "none",
                      }}
                    >
                      <div
                        className="slick-slide slick-cloned"
                        aria-hidden="true"
                      >
                        <div
                          style={{
                            display: "inline-block",
                            height: "100%",
                          }}
                        >
                          <img
                            className="home-casino-img"
                            style={{ height: "100%", width: "100%" }}
                            src={pGame?.trendingThumbnail}
                            loading="lazy"
                            alt="Diamonds"
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </div>
            </div>
          </Swiper>

          <div className="jss45 jss47">
            <button
              className="MuiButtonBase-root MuiIconButton-root jss48"
              tabIndex={0}
              type="button"
            >
              <span className="MuiIconButton-label">
                <svg
                  className="MuiSvgIcon-root jss49"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  style={{ color: "rgb(255, 255, 255)" }}
                >
                  <path d="M7.38 21.01c.49.49 1.28.49 1.77 0l8.31-8.31c.39-.39.39-1.02 0-1.41L9.15 2.98c-.49-.49-1.28-.49-1.77 0s-.49 1.28 0 1.77L14.62 12l-7.25 7.25c-.48.48-.48 1.28.01 1.76z" />
                </svg>
              </span>
              <span className="MuiTouchRipple-root" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularGames;
