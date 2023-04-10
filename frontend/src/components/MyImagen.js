import React, { useState, useEffect } from "react";

const MyImage = ({ imageName }) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3000/api/images/${imageName}`)
      .then((response) => response.blob())
      .then((blob) => setImageUrl(URL.createObjectURL(blob)));
  }, );

  return (
    <div>
      {imageUrl && <img src={imageUrl} alt={imageName} />}
    </div>
  );
};

export default MyImage;
