import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";

const images = [
  "http://res.cloudinary.com/dc1tdu6sv/image/upload/v1683070331/Zapas/AirMax90-PhotoRoom.png-PhotoRoom_grzf1i.png",
  "http://res.cloudinary.com/dc1tdu6sv/image/upload/v1683070331/Zapas/NikeAirMaxTW-PhotoRoom.png-PhotoRoom_nrcak1.png",
  "http://res.cloudinary.com/dc1tdu6sv/image/upload/v1683070331/Zapas/NikeAirMaxPlus-PhotoRoom.png-PhotoRoom_dgvh7w.png",
  "http://res.cloudinary.com/dc1tdu6sv/image/upload/v1683070331/Zapas/NikeAirMax97SE-PhotoRoom.png-PhotoRoom_yh3z6o.png"
]

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};


/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const Slider = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };
  setTimeout(() => {
    paginate(1)
  }, 2000);

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
          <motion.img
            className="absolute max-w-[300px]"
            // sizes="(max-width: 640px) 100vw,
            //     (max-width: 1280px) 50vw,
            //     (max-width: 1536px) 33vw,
            //     25vw"
            key={page}
            src={images[imageIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          />
      </AnimatePresence>
    </>
  );
};
export default Slider;