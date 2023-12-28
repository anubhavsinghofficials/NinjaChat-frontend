import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { IoSend } from 'react-icons/io5';
import { motion } from 'framer-motion';
import { FaLink } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';
import { FaRegCopy } from 'react-icons/fa6';
import { TMessage, ZodMessageSchema } from '@/types/message';
import logo from '../assets/ninjachat-logo.png';
import LargeBlobs from '@/components/sections/background/blobs-large';
import ChatSection from '@/components/sections/widgets/chat-section';
import Details from '@/components/sections/widgets/details';
import TextInput from '@/components/ui/input-text';
import { useSearchParams, useLocation, NavLink } from 'react-router-dom';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { socketStore } from '@/store/client-store/socket';
import { toastStore } from '@/store/client-store/toast';

const Chat = () => {
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [socketIdArray, setSocketIdArray] = useState<string[]>([]);
  const [searchParams] = useSearchParams();
  const [roomLink, setRoomLink] = useState<string>('');
  const location = useLocation();
  const { chatSocket } = socketStore();
  const { setToggleToast } = toastStore();
  const activityTimerRef = useRef<number | NodeJS.Timeout>();

  useEffect(() => {
    const room = searchParams.get('room');
    const name = location.state.name;
    const host = window.location.hostname;
    const protocol = window.location.protocol;
    const port = window.location.port;
    const url = `${protocol}//${host}:${port}/join-room?room=${room}&invitor=${name}`;
    setRoomLink(url);

    chatSocket.on('connect', () => {
      console.log('i connected');
    });
    chatSocket.emit('new-join-request', { name, room });
    chatSocket.emit('sendSocketId');
    chatSocket.on('socketid', (data) => {
      let socketIds: string[] = [];
      const socketIdsJson = sessionStorage.getItem('socketIds');
      if (socketIdsJson) {
        socketIds = JSON.parse(socketIdsJson);
      }
      socketIds.push(data.socketId);
      setSocketIdArray(socketIds);
      sessionStorage.setItem('socketIds', JSON.stringify(socketIds));
    });
    chatSocket.on('new-ninja', (data) => {
      console.log(data.name);
      setToggleToast(`${data.name} joined the chat !!`);
    });

    return () => {
      chatSocket.off('connect');
      chatSocket.off('socketid');
    };
  }, []);

  const form = useForm<TMessage>({
    mode: 'onSubmit',
    resolver: zodResolver(ZodMessageSchema),
  });

  const { register, handleSubmit, reset } = form;

  const onSubmit = (data: TMessage) => {
    clearInterval(activityTimerRef.current);
    activityTimerRef.current = setInterval(
      () => {
        onSubmit({ message: 'Seems like there is no activity in this chat..' });
      },
      4 * 60 * 1000
    );

    reset();
    const room = searchParams.get('room');
    const name = location.state.name;
    chatSocket.emit('message', { message: data.message, room, name });
  };

  const copyRoomLink = () => {
    navigator.clipboard.writeText(roomLink);
  };
  const handleDetails = () => {
    setShowDetails((prev) => !prev);
  };

  return (
    <div className={`h-full w-screen max-w-[40rem] pb-4 pt-2`}>
      <LargeBlobs />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={`flex h-[94%] flex-col gap-y-4 rounded-xl bg-black bg-opacity-[85%] p-2 drop-shadow-glow backdrop-blur-2xl xl:h-full`}
      >
        <div className={`relative bg-neutral-950`}>
          <div className={`flex h-16 justify-between px-4 py-2`}>
            <div className={`flex items-center gap-x-2`}>
              <img src={logo} className={`hidden h-[2.2rem] xs:block`} />
              <p className={`text-xl font-bold text-neutral-200 xs:text-3xl`}>
                ChatNinja
              </p>
            </div>
            <div className={`flex items-center gap-x-4`}>
              <button
                className={`duration-75 hover:scale-105 active:scale-100`}
                onClick={handleDetails}
              >
                <img src={logo} className={`h-[1.6rem] xs:h-[2rem]`} />
              </button>
              <Popover defaultOpen>
                <PopoverTrigger
                  className={`rounded-md bg-neutral-200 p-2 hover:bg-white active:bg-neutral-300`}
                >
                  <FaLink className={`text-xs xs:text-base`} />
                </PopoverTrigger>
                <PopoverContent
                  className={`border-0 bg-black shadow-md shadow-neutral-700`}
                >
                  <button
                    className={`flex items-center gap-x-3 px-2 py-2 font-semibold text-red-400 outline-none hover:text-red-300 active:text-red-400`}
                    onClick={copyRoomLink}
                  >
                    <FaRegCopy />
                    Click Here To Copy
                  </button>
                  <p className={`px-2 leading-5 text-neutral-300`}>
                    Share this url with your friends to invite them to your
                    NinjaChat
                  </p>

                  <div className={`mb-3 mt-4 h-1 bg-neutral-800`} />
                  <NavLink
                    to='/create-room'
                    className={`px-2 text-neutral-400 hover:text-red-400`}
                  >
                    Create new chat
                  </NavLink>
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <Details showDetails={showDetails} />
        </div>

        <ChatSection
          socketIdArray={socketIdArray}
          room={searchParams.get('room') || 'NinjaChatRoom'}
        />
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
