import { AnimatePresence, motion } from 'framer-motion';
import logo from '@/assets/ninjachat-logo.png';

const List: string[] = [
  'Abhinav Singh Tomar',
  'Gugu',
  'Abhinav Singh',
  'Kartavya',
  'Anu',
  'Anurag',
  'Mota',
  'Mota',
  'Kartavya',
  'Gugu',
  'Anu',
  'Anurag',
];

const FriendsList: string[] = List;

const Friends = ({ showFriends }: { showFriends: boolean }) => {
  return (
    <AnimatePresence>
      {showFriends && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{
            y: showFriends ? 1 : 0,
            opacity: showFriends ? 1 : 0,
          }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.1 }}
          className={`absolute top-[100%] z-10 flex w-full flex-col gap-y-4 overflow-hidden rounded-b-3xl bg-black p-8 text-white shadow-md shadow-neutral-700`}
        >
          <p
            className={`flex items-center justify-center gap-x-3 text-lg font-semibold text-red-400 ${
              FriendsList.length === 0 && 'hidden'
            }`}
          >
            <img src={logo} className={`h-[1.4rem]`} />
            Other Ninjas in the Chat
          </p>
          <div
            className={`xs:grid-cols-3 relative grid grid-cols-2 gap-4 pb-4`}
          >
            {FriendsList.length === 0 ? (
              <p className={`absolute`}>You are the only one in the chat</p>
            ) : (
              FriendsList.map((friend, index) => (
                <div
                  key={index}
                  className={`line-clamp-1 rounded-full bg-neutral-800 px-4 py-1 text-center`}
                >
                  {friend}
                </div>
              ))
            )}
            {}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Friends;
