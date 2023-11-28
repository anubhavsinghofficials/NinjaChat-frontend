import { AnimatePresence, motion } from 'framer-motion';

const NinjaPrivacy = ({ slide }: { slide: number }) => {
  return (
    <AnimatePresence mode='popLayout'>
      {slide === 2 && (
        <motion.div
          key={'NinjaPrivacy'}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          exit={{ opacity: 0, x: -40 }}
          className={`flex flex-col gap-x-4`}
        >
          <div
            className={`xs:text-3xl xs:pb-4 pb-2 text-center text-2xl font-bold text-red-400`}
          >
            Ninja Privacy
          </div>
          <motion.div
            initial={{ x: 20 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className={`xs:text-base flex flex-col items-center text-sm text-white`}
          >
            <p>Whisper in the Chat,</p>
            <p>Right one shall recieve,</p>
            <p className={`whitespace-nowrap`}>Your words will be vanished,</p>
            <p>as soon as you leave...</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NinjaPrivacy;
