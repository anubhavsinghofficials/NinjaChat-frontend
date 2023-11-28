import { motion } from 'framer-motion';

const LargeBlobs = () => {
  return (
    <div
      className={`absolute left-0 top-0 z-[0] flex h-full w-full items-center justify-center overflow-hidden`}
    >
      <motion.div
        className={`absolute h-96 w-96 animate-[spin_linear_36000ms_infinite_reverse]`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2 }}
      >
        <div
          className={`absolute bottom-0 left-0 aspect-[3/5] h-[34rem] animate-[spin_linear_15000ms_infinite] rounded-full bg-red-400 blur-3xl`}
        />
        <div
          className={`absolute left-[50%] top-0 aspect-[3/5] h-[28rem] animate-[spin_linear_12000ms_infinite] rounded-full bg-blue-400 blur-3xl`}
        />
      </motion.div>
    </div>
  );
};

export default LargeBlobs;
