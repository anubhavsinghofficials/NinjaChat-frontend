import { motion } from 'framer-motion';

const SmallBlobs = () => {
  return (
    <div
      className={`absolute left-0 top-0 z-[0] flex h-full w-full items-center justify-center overflow-hidden`}
    >
      <div
        className={`absolute h-96 w-96 animate-[spin_linear_36000ms_infinite_reverse]`}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1, delay: 0.5 }}
          className={`absolute bottom-0 left-0 aspect-[3/5] h-80 animate-[spin_linear_15000ms_infinite] rounded-full bg-red-400 blur-3xl`}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1, delay: 1 }}
          className={`absolute left-[50%] top-0 aspect-[3/5] h-80 animate-[spin_linear_15000ms_infinite] rounded-full bg-blue-400 blur-3xl`}
        />
      </div>
    </div>
  );
};

export default SmallBlobs;
