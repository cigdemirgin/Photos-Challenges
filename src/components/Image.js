import { useState } from "react";

function Image({ image }) {
  const [emojiSize, setEmojiSize] = useState(15);
  function handleEmojiClick() {
    const newSize = emojiSize + 5;
    setEmojiSize(newSize);
  }

  return (
    <div className="imageCard">
      <img src={image.url} alt={image.alt} />
      <span
        onClick={handleEmojiClick}
        style={{ fontSize: `${emojiSize}px`, cursor: "pointer" }}
      >
        👍
      </span>
    </div>
  );
}
export default Image;
