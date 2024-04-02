"use client"
import { SetStateAction, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";



const slideVariants = {
  hiddenRight: {
    x: "100%",
    opacity: 0,
  },
  hiddenLeft: {
    x: "-100%",
    opacity: 0,
  },
  visible: {
    x: "0",
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.5,
    },
  },
};


const simple = {

  visible: {
    x: "0",
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.5,
    },
  },
};



type CarouselProps = {
  images: string[];
};




const Carousel = ({ images }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('left');
  const [isNavClicked, setIsNavClicked] = useState(false);
  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
    setIsNavClicked(true);
  };
  const handlePrevious = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
    setIsNavClicked(true);
  };
  /*     const handleDotClick = (index: SetStateAction<number>) => {
          // @ts-ignore
          setDirection(index > currentIndex ? "right" : "left");
        setCurrentIndex(index);
      }; */

  return (
    <div className="relative m-auto overflow-hidden rounded-md w-full lg:w-96 aspect-square md:aspect-video lg:aspect-square bg-gray-300">
      <AnimatePresence>
        <motion.div
          className="relative rounded-lg h-full w-full md:h-full md:w-auto lg:h-full lg:w-full aspect-square mx-auto flex justify-center items-center"
          variants={currentIndex === 0 && isNavClicked === false ? simple : slideVariants}
          initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
          animate="visible"
          exit="exit"
          key={currentIndex}
        >
          <Image
            src={images[currentIndex]}
            fill
            quality={50}
            alt="carousel image"
            loading={currentIndex === 0 ? "eager" : "lazy"}
          />
        </motion.div>

      </AnimatePresence>
      {images && images.length > 1 && <div className="flex justify-between">
        <div className="text-gray-200 absolute top-0 bottom-0 h-6 w-6 rounded-full px-1.5 py-1 mx-auto my-32 lg:my-48 bg-mainaccent-700" onClick={handlePrevious}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 96 960 960"
            width="20"
            className="fill-white"
          >
            <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
          </svg>
        </div>
        <div className="right-0 text-gray-200 absolute top-0 bottom-0 h-6 w-6 rounded-full px-1.5 py-1 mx-auto my-32 lg:my-48 bg-mainaccent-700" onClick={handleNext}>
          <svg height="20" viewBox="0 96 960 960" width="20"
            className="fill-white"
          >
            <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
          </svg>
        </div>
      </div>}
      {/*    <div className="indicator">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div> */}
    </div>
  );


}

export default Carousel;
