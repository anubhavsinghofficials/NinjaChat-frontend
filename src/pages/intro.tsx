import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import WelcomeToNinjaChat from '@/components/sections/intro-modal/welcome-to-ninja-chat';
import NinjaPrivacy from '@/components/sections/intro-modal/ninja-privacy';
import NinjaAnonymity from '@/components/sections/intro-modal/ninja-anonymity';
import Button from '@/components/ui/button';
import SmallBlobs from '@/components/sections/background/blobs-small';
import { IntroStore } from '@/store/client-store/intro';

const Intro = () => {
  const [slide, setSlide] = useState(1);
  const { setToggleIntro, toggleIntro } = IntroStore();

  useEffect(() => {
    if (slide > 3) {
      setToggleIntro(false);
    }
  }, [slide]);

  return (
    <AnimatePresence>
      {toggleIntro && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
          className={`fixed z-30 flex h-screen w-screen items-center justify-center bg-black`}
        >
          <SmallBlobs />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className={`xs:w-[26rem] drop-shadow-glow xs:p-12 z-[1] mb-40 w-[94%] rounded-t-xl rounded-bl-xl bg-black p-8 xl:mb-20`}
          >
            <div className={`xs:h-32 flex h-20 items-center justify-center`}>
              <WelcomeToNinjaChat slide={slide} />
              <NinjaPrivacy slide={slide} />
              <NinjaAnonymity slide={slide} />
            </div>
            <div className={`flex justify-center gap-x-4 pt-12`}>
              <motion.div
                className={`flex grow`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.9 }}
              >
                <Button
                  variant='secondary'
                  className={`grow`}
                  onClick={() => setSlide(4)}
                >
                  Skip
                </Button>
              </motion.div>
              <motion.div
                className={`flex grow`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 1 }}
              >
                <Button
                  variant='primary'
                  className={`grow`}
                  onClick={() => setSlide((prev) => prev + 1)}
                >
                  {slide < 3 ? 'Next' : 'Begin'}
                </Button>
              </motion.div>
            </div>
            <div
              className={`absolute bottom-0 right-0 aspect-square  translate-y-[100%] border-l-[4rem] border-t-[4rem] border-l-transparent border-t-black shadow-md`}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Intro;
