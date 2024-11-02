import { useEffect } from "react";
import useIFrame from "../../../hooks/useIFrame";
import { useParams } from "react-router-dom";

const IFrame = ({ score, tab }) => {
  const { eventId, eventTypeId } = useParams();
  const { iFrameUrl, refetchIFrameUrl } = useIFrame(eventTypeId, eventId);

  useEffect(() => {
    refetchIFrameUrl();
  }, [eventId, eventTypeId, refetchIFrameUrl]);

  return (
    <>
      {iFrameUrl?.url && tab === "liveStream" && (
        <div
          role="tabpanel"
          id="simple-tabpanel-1"
          aria-labelledby="simple-tab-1"
          className="eam-header-tab-panel"
        >
          <div className="MuiBox-root jss22">
            <p className="MuiTypography-root MuiTypography-body1">
              <div className="live-stream-ctn">
                <div className="cricket-live-stream-ctn">
                  <iframe
                    title="mob-live-stream"
                    src={iFrameUrl?.url}
                    sandbox="allow-same-origin allow-forms allow-scripts allow-top-navigation allow-popups"
                  ></iframe>
                </div>
              </div>
            </p>
          </div>
        </div>
      )}
      {score?.tracker && tab === "scorecard" && (
        <div
          role="tabpanel"
          id="simple-tabpanel-1"
          aria-labelledby="simple-tab-1"
          className="eam-header-tab-panel"
        >
          <div className="MuiBox-root jss22">
            <p className="MuiTypography-root MuiTypography-body1">
              <div className="live-stream-ctn">
                <div
                  style={{
                    overflow: "hidden",
                    height: "100px",
                  }}
                  className="cricket-live-stream-ctn"
                >
                  <iframe
                    title="mob-live-stream"
                    src={score?.tracker}
                    sandbox="allow-same-origin allow-forms allow-scripts allow-top-navigation allow-popups"
                  ></iframe>
                </div>
              </div>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default IFrame;
