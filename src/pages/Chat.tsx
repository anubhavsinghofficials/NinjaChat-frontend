import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { IoSend } from 'react-icons/io5';
import { FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { FaLink } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { FaRegCopy } from 'react-icons/fa6';
import { TMessage, ZodMessageSchema } from '@/types/message';
import logo from '../assets/ninjachat-logo.png';
import LargeBlobs from '@/components/sections/background/blobs-large';
import ChatSection from '@/components/sections/widgets/chat-section';
import Details from '@/components/sections/widgets/details';
import Friends from '@/components/sections/widgets/Friends';
import TextInput from '@/components/ui/input-text';
import { useSearchParams, useLocation } from 'react-router-dom';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

const Chat = () => {
  const [toggleScrollToBottom, setToggleScrollToBottom] = useState(false);
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [showFriends, setShowFriends] = useState<boolean>(false);
  const [searchParams] = useSearchParams();
  const [roomLink, setRoomLink] = useState<string>('');
  const location = useLocation();

  useEffect(() => {
    const room = searchParams.get('room');
    const name = location.state.name;
    const host = window.location.hostname;
    const protocol = window.location.protocol;
    const port = window.location.port;
    const url = `${protocol}//${host}:${port}/join-room?room=${room}&invitor=${name}`;
    setRoomLink(url);
  }, []);

  const form = useForm<TMessage>({
    mode: 'onSubmit',
    resolver: zodResolver(ZodMessageSchema),
  });

  const { register, handleSubmit, reset } = form;

  const onSubmit = (data: TMessage) => {
    console.log(data);
    reset();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setToggleScrollToBottom((prev) => !prev);
  };

  const copyRoomLink = () => {
    navigator.clipboard.writeText(roomLink);
  };
  const handleFriends = () => {
    setShowDetails(false);
    setShowFriends((prev) => !prev);
  };
  const handleDetails = () => {
    setShowFriends(false);
    setShowDetails((prev) => !prev);
  };

  return (
    <div className={`h-full w-screen max-w-[40rem] pb-4 pt-2`}>
      <LargeBlobs />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={`drop-shadow-glow flex h-[94%] flex-col gap-y-4 rounded-xl bg-black bg-opacity-80 p-2 backdrop-blur-2xl xl:h-full`}
      >
        <div className={`relative`}>
          <div className={`flex h-16 justify-between px-4 py-2`}>
            <div className={`flex items-center gap-x-2`}>
              <img src={logo} className={`xs:block hidden h-[2.2rem]`} />
              <p className={`xs:text-3xl text-xl font-bold text-neutral-200`}>
                ChatNinja
              </p>
            </div>
            <div className={`flex items-center gap-x-4`}>
              <button
                className={`duration-75 hover:scale-105 active:scale-100`}
                onClick={handleDetails}
              >
                <img src={logo} className={`xs:h-[2rem] h-[1.6rem]`} />
              </button>
              <button
                className={`rounded-md bg-neutral-200 p-2 hover:bg-white active:bg-neutral-300`}
                onClick={handleFriends}
              >
                <FaUsers className={`xs:text-lg text-xs`} />
              </button>
              <Popover>
                <PopoverTrigger
                  className={`rounded-md bg-neutral-200 p-2 hover:bg-white active:bg-neutral-300`}
                >
                  <FaLink className={`xs:text-base text-xs`} />
                </PopoverTrigger>
                <PopoverContent
                  className={`border-0 bg-black shadow-md shadow-neutral-700`}
                >
                  <button
                    className={`flex items-center gap-x-3 px-2 py-2 font-semibold text-red-400 hover:text-red-300 active:text-red-400`}
                    onClick={copyRoomLink}
                  >
                    <FaRegCopy />
                    Click Here To Copy
                  </button>
                  <p className={`px-2 leading-5 text-neutral-300`}>
                    Share this url with your friends to invite them to your
                    NinjaChat
                  </p>
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <Details showDetails={showDetails} />
          <Friends showFriends={showFriends} />
        </div>

        <ChatSection toggleScrollToBottom={toggleScrollToBottom} />
        <form
          className='flex w-full gap-x-2'
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <TextInput
            id='message'
            {...register('message')}
            placeholder='Type Something...'
            autoComplete='off'
            autoFocus
            className={`rounded-r-none`}
          />
          <button
            className={`self-stretch rounded-md rounded-l-none bg-neutral-300 px-6 py-1 text-lg font-semibold text-black duration-100 hover:bg-neutral-100 active:bg-neutral-300`}
          >
            <IoSend />
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Chat;
