import { useState } from "react";

const Video = ({ url }) => {
  const [showVideo, setShowVideo] = useState(true);
  return (
    <div className="stream-accordion">
      <div
        style={{ cursor: "pointer" }}
        onClick={() => setShowVideo(!showVideo)}
        className="stream-header"
      >
        Live Stream
      </div>
      {showVideo && (
        <div className="stream-body">
          <div className="live-stream-ctn">
            <div className="cricket-live-stream-ctn">
              <iframe
                title="mob-live-stream"
                src={url}
                sandbox="allow-same-origin allow-forms allow-scripts allow-top-navigation allow-popups"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Video;
