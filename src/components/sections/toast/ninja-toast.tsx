import { toastStore } from '@/store/client-store/toast';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';

const NinjaToast = () => {
  const { toastMessage, toggleToast, setToggleToast } = toastStore();

  useEffect(() => {
    if (toggleToast) {
      setTimeout(() => {
        setToggleToast(false);
      }, 4000);
    }
  }, [toggleToast]);

  return (
    <AnimatePresence>
      {toggleToast && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className={`drop-shadow-glow xs:max-w-[22rem] fixed bottom-4 z-20 max-w-[18rem] rounded-lg bg-black px-8 py-4 text-neutral-100 sm:max-w-[28rem]`}
        >
          {toastMessage}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NinjaToast;
