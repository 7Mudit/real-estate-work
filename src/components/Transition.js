import React from "react";
import { AnimatePresence , motion } from "framer-motion";

const Transition = () => {
  return (
    <>
    <motion.div
        className="fixed top-0 left-0 w-full h-screen z-50 bg-[#FFA500]"
        initial={{ y: "0%", height: "100%" }}
        animate={{ y: "-100%", height: "0%" }}
        exit={{ y: "0%", height: "100%" }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
      >
      </motion.div>

      {/* <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-white"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#138808]"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
      /> */}
    </>
  );
};

export default Transition;
