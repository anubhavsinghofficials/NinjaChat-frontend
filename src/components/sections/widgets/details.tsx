import { AnimatePresence, motion } from "framer-motion"
import { FaCode, FaGithub } from "react-icons/fa"

const Details = ({ showDetails }: { showDetails: boolean }) => {
  return (
    <AnimatePresence>
      {showDetails && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{
            y: showDetails ? 1 : 0,
            opacity: showDetails ? 1 : 0,
          }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.1 }}
          className={`text-white overflow-hidden absolute top-[100%] bg-black w-full shadow-md shadow-neutral-700 z-10 p-8 flex flex-col gap-y-4 rounded-b-3xl`}>
          <div className={`flex`}>
            <a
              target="_blank"
              className={`grow flex gap-x-4 items-center justify-center text-center text-neutral-100 bg-neutral-900 hover:bg-neutral-800 active:bg-neutral-900 py-3 px-2 rounded-md`}
              href="https://github.com/stars/anubhavsinghofficials/lists/ninjachat">
              <FaCode className={`hidden xs:block`} />
              View Source Code
            </a>
            <a
              target="_blank"
              className={`grow flex gap-x-4 items-center justify-center text-center text-neutral-100 bg-neutral-900 hover:bg-neutral-800 active:bg-neutral-900 py-3 px-2 rounded-md`}
              href="https://github.com/anubhavsinghofficials">
              <FaGithub className={`hidden xs:block`} />
              Find me on Github
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Details
