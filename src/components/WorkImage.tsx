import { useState } from "react";

interface Props {
  image?: string;
  alt?: string;
  video?: string;
}

const WorkImage = (props: Props) => {
  const [isVideo, setIsVideo] = useState(false);
  const [video, setVideo] = useState("");
  const handleMouseEnter = async () => {
    if (props.video) {
      setIsVideo(true);
      const response = await fetch(`src/assets/${props.video}`);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      setVideo(blobUrl);
    }
  };

  const image = props.image ? (
    <img src={props.image} alt={props.alt} />
  ) : (
    <div className="work-image-placeholder" aria-hidden="true">
      <span>PROJECT</span>
      <span>{props.alt ?? "Project preview"}</span>
    </div>
  );
  const content = (
    <>
      {image}
      {isVideo && <video src={video} autoPlay muted playsInline loop></video>}
    </>
  );

  return (
    <div className="work-image">
      <div
        className="work-image-in"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsVideo(false)}
      >
        {content}
      </div>
    </div>
  );
};

export default WorkImage;
