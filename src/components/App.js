import { useState } from "react";
import Image from "./Image";

const App = () => {
  const [randomImages, setRandomImage] = useState([]);

  function handleClick() {
    const id = crypto.randomUUID();
    const image = {
      id: id,
      url: `https://picsum.photos/seed/${id}/200/200`,
      alt: "Random İmage",
    };

    console.log(image);

    const updatedİmagesList = [...randomImages, image];
    setRandomImage(updatedİmagesList);
    console.log(updatedİmagesList);
  }
  const renderedImages = randomImages.map((imageData) => {
    return <Image key={imageData.id} image={imageData} />;
  });
  return (
    <div>
      <div className="buttonContainer">
        <button onClick={handleClick}>Resim Ekle</button>
      </div>
      <div className="imageContainer">{renderedImages}</div>
    </div>
  );
};
export default App;
