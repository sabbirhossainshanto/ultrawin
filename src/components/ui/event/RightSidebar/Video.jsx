import { useParams } from "react-router-dom";
import useIFrame from "../../../../hooks/useIFrame";

const Video = () => {
  const { eventId, eventTypeId } = useParams();
  const { iFrameUrl } = useIFrame(eventTypeId, eventId);
  return (
    <div className="stream-accordion">
      <div className="stream-header">Live Stream</div>
      <div className="stream-body">
        <div className="live-stream-ctn">
          <div className="cricket-live-stream-ctn">
            <iframe
              title="mob-live-stream"
              src={iFrameUrl?.url}
              sandbox="allow-same-origin allow-forms allow-scripts allow-top-navigation allow-popups"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
