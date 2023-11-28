import { AnimatePresence, motion } from "framer-motion";

const NinjaAnonymity = ({ slide }: { slide: number }) => {
  return (
    <AnimatePresence mode='popLayout'>
      {slide === 3 && (
        <motion.div
          key={'AnonymitySlide'}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          exit={{ opacity: 0, x: -40 }}
          className={`flex flex-col gap-x-4`}
        >
          <div
            className={`xs:text-3xl xs:pb-4 whitespace-nowrap pb-2 text-2xl font-bold text-red-400`}
          >
            Ninja Anonymity
          </div>
          <motion.div
            initial={{ x: 20 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className={`xs:text-base flex flex-col items-center text-sm text-white`}
          >
            <p>Worry not my friend,</p>
            <p>There is nothing to lose,</p>
            <p>For all they will know is,</p>
            <p>the name you will choose...</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NinjaAnonymity