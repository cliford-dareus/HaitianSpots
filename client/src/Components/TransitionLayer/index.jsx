import React from "react";
import { motion } from "framer-motion";

const index = ({ itemPosition, imageToPosition, setShow, data }) => {
  console.log(`Image ${imageToPosition}`);
  return (
    <motion.div
      style={{
        position: "absolute",
        zIndex: -1,
        inset: 0,
        marginTop: "3em",
        width: "100%",
        height: "100%",
      }}
      layout
    >
      <motion.img
        layout
        style={{ zIndex: 0, position: "absolute", left: 0, top: 0 }}
        src={`${data}`}
        alt=""
        initial={{
          height: itemPosition.imagePosition.height,
          width: itemPosition.imagePosition.width,
          translateX: itemPosition.imagePosition.left,
          translateY: itemPosition.imagePosition.top,
        }}
        animate={{
          height: imageToPosition.height,
          width: imageToPosition.width,
          translateX: 0,
          translateY: 0,
          borderRadius: ".5em",
        }}
        transition={{
          duration: 0.5,
        }}
        onAnimationComplete={() => setShow(true)}
      />
    </motion.div>
  );
};

export default index;
