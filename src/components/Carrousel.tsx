import React, { useState } from "react";

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(
      currentIndex === 0 ? children.length - 1 : currentIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex(
      currentIndex === children.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <div className="relative overflow-x-hidden">
      <div className="absolute top-0 left-0 right-0 bottom-0 flex">
        <div className="flex-none" onClick={handlePrev}>
          <button className="h-full w-16 flex justify-center items-center">
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              className="chevron-left w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M10.707,15.707c-0.391,0.391-1.023,0.391-1.414,0L3.293,
                10.414c-0.391-0.391-0.391-1.023,0-1.414l6.000-6.000c0.391-0.391,
                1.023-0.391,1.414,0l0.000,0.000c0.391,0.391,0.391,1.023,0,1.414L6.414,
                10.000l4.293,4.293C11.098,14.684,11.098,15.316,10.707,15.707z"
              />
            </svg>
          </button>
        </div>
        <div className="flex-auto">
          {children.map((child, index) => (
            <div
              key={index}
              className={`transition-opacity duration-500 ease-in-out opacity-0 ${
                currentIndex === index ? "opacity-100" : ""
              }`}
            >
              {child}
            </div>
          ))}
        </div>
        <div className="flex-none" onClick={handleNext}>
          <button className="h-full w-16 flex justify-center items-center">
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              className="chevron-right w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M9.293,4.293c0.391-0.391,1.023-0.391,1.414,0l6.000,
                6.000c0.391,0.391,0.391,1.023,0,1.414l-6.000,6.000c-0.391,
                0.391-1.023,0.391-1.414,0l0.000,0.000c-0.391-0.391-0.391-1.023,
                0-1.414L13.586,10.000l-4.293-4.293C8.902,5.316,8.902,4.684,
                9.293,4.293z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
