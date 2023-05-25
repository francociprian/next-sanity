import React, { useState } from "react";
import { motion, AnimatePresence, useIsPresent } from "framer-motion";
import { wrap } from "popmotion";
import Image from "next/image";
import { DragInfo, ImageProps } from '../types/types'

const sliderVariants = {
  incoming: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    scale: 1.2,
    opacity: 0
  }),
  active: { x: 0, scale: 1, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    scale: 1,
    opacity: 0.2
  })
};

const IMAGES: ImageProps[] = [
  {
    id: 1,
    imageSrc: "https://res.cloudinary.com/dc1tdu6sv/image/upload/v1682642539/Ropa/WoodWoodVentusTech_tsngoy.jpg",
  },
  {
    id: 2,
    imageSrc: "https://res.cloudinary.com/dc1tdu6sv/image/upload/v1682642538/Ropa/WoodWoodDellerCrispyTechJacket_lji8zn.webp",
  },
  {
    id: 3,
    imageSrc: "https://res.cloudinary.com/dc1tdu6sv/image/upload/v1682642374/Ropa/gramicciPant_asvumm.jpg",
  },
  {
    id: 4,
    imageSrc: "https://res.cloudinary.com/dc1tdu6sv/image/upload/v1682642374/Ropa/GramicciGshorts_ur89dn.webp"
  },
]

const sliderTransition = {
  duration: 1,
  ease: [0.56, 0.03, 0.12, 1.04],
};

const NewSlider = () => {
  const [[imageCount, direction], setImageCount] = useState<[number, number]>([0, 0]);

  const activeImageIndex = wrap(0, IMAGES.length, imageCount);

  const swipeToImage = (swipeDirection: number) => {
    setImageCount([imageCount + swipeDirection, swipeDirection]);
  };

  const dragEndHandler = (dragInfo: DragInfo) => {
    const draggedDistance = dragInfo.offset.x;
    const swipeThreshold = 50;
    if (draggedDistance > swipeThreshold) {
      swipeToImage(-1);
    } else if (draggedDistance < -swipeThreshold) {
      swipeToImage(1);
    }
  };

  const skipToImage = (imageId: number) => {
    let changeDirection: number;
    if (imageId > activeImageIndex) {
      changeDirection = 1;
    } else if (imageId < activeImageIndex) {
      changeDirection = -1;
    } else {
      changeDirection = 0;
    }
    setImageCount([imageId, changeDirection]);
  };

  setTimeout(() => {
    swipeToImage(1);
  }, 4000);

  const isPresent = useIsPresent()

  return (
    <div 
      className="h-[calc(100vh-43px)] w-full flex flex-col gap-2 justify-center items-center">
      <div 
        className="w-[500px] h-[650px] bg-contain bg-no-repeat bg-center"
        style={{backgroundImage: `url(${IMAGES[activeImageIndex].imageSrc})`}}  
      />
    </div>
  );
};

export default NewSlider;


    // <div className="slider-container">
    //   <div className="slider">
    //     <AnimatePresence initial={false} custom={direction}>
    //       <motion.div
    //         key={imageCount}
    //         style={{
    //           backgroundImage: `url(${IMAGES[activeImageIndex].imageSrc})`
    //         }}
    //         custom={direction}
    //         variants={sliderVariants}
    //         initial="incoming"
    //         animate="active"
    //         exit="exit"
    //         transition={sliderTransition}
    //         dragConstraints={{ left: 0, right: 0 }}
    //         dragElastic={1}
    //         className="image"
    //       />
    //     </AnimatePresence>
    //   </div>
    // </div>