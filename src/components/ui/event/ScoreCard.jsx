const ScoreCard = ({ match_odds }) => {
  return (
    <>
      <div>
        <div className="scorecard">
          {match_odds?.[0]?.score?.map((scoreInfo, i) => {
            return (
              <div key={i} className="row">
                <div className="col-12 col-md-6">
                  <p className="team-1 row">
                    <span className="team-name col-3">
                      {scoreInfo?.team1Name}
                    </span>
                    <span className="score col-4 text-end">
                      {scoreInfo?.team1Score}
                    </span>
                    <span className="team-name col-5">
                      <span>{scoreInfo?.runRate} </span>
                      <span></span>
                    </span>
                  </p>

                  <p className="team-1 row mt-2">
                    <span className="team-name col-3">
                      {scoreInfo?.team2Name}
                    </span>
                    <span className="score col-4 text-end">
                      {scoreInfo?.team2Score}
                    </span>
                    <span className="team-name col-5"></span>
                  </p>
                </div>
                <div className="col-12 col-md-6">
                  <div className="row">
                    <div className="col-12">
                      {scoreInfo.target !== null && (
                        <div className="text-xl-end">
                          <span>{scoreInfo?.target}</span>
                        </div>
                      )}

                      <div className="row">
                        <div className="col-12">
                          <p className="text-xl-end ball-by-ball mt-2">
                            {Array.isArray(scoreInfo?.recent) &&
                              scoreInfo?.recent?.map((score, i) => {
                                return (
                                  <span
                                    key={i}
                                    className={`ball-runs ${
                                      score === "4" ? "four" : ""
                                    } ${score === "6" ? "six" : ""} ${
                                      score === "ww" ? "wicket" : ""
                                    }`}
                                  >
                                    {score}
                                  </span>
                                );
                              })}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ScoreCard;
