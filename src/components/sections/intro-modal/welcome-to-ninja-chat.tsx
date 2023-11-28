import { AnimatePresence, motion } from 'framer-motion';
import logo from '@/assets/ninjachat-logo.png';

const WelcomeToNinjaChat = ({ slide }: { slide: number }) => {
  return (
    <AnimatePresence mode='popLayout'>
      {slide === 1 && (
        <motion.div
          key={'WelcomeToNinjaChat'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          exit={{ opacity: 0, x: -40 }}
          className={`flex gap-x-6`}
        >
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            src={logo}
            className={`xs:mt-0 xs:h-[4.6rem] mt-2 h-[3rem]`}
          />
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className={`xs:text-2xl text-xl font-bold text-neutral-200`}
            >
              Welcome To
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              className={`xs:text-4xl text-3xl font-bold text-red-400`}
            >
              NinjaChat
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeToNinjaChat;
