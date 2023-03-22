import Carousel from "@/components/Carrousel";
import React from "react";
const Timeline = () => {
  const images = ["image1.jpg", "image2.jpg", "image3.jpg"];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Carousel>
        {images.map((image) => (
          <h1 key={image}>{image}</h1>
        ))}
      </Carousel>
    </div>
  );
};

export default Timeline;
