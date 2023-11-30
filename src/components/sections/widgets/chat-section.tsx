import { socketStore } from '@/store/client-store/socket';
import { useEffect, useRef, useState } from 'react';
import { twJoin } from 'tailwind-merge';

type TChatSection = { socketIdArray: string[]; room: string };
type TMessageData = { user: string; message: string; socketId: string };

const ChatSection = ({ socketIdArray, room }: TChatSection) => {
  const chatSectionRef = useRef<HTMLDivElement>(null);
  const { chatSocket } = socketStore();
  const [messages, setMessages] = useState<TMessageData[]>([]);

  const scrollToBottom = () => {
    setTimeout(() => {
      if (chatSectionRef && chatSectionRef.current) {
        chatSectionRef.current.scrollTo({
          top: chatSectionRef.current.scrollHeight,
          behavior: 'smooth',
        });
      }
    }, 100);
  };

  useEffect(() => {
    scrollToBottom();
    const messagesJson = sessionStorage.getItem(room);
    if (messagesJson) {
      setMessages(JSON.parse(messagesJson));
    }
  }, []);

  useEffect(() => {
    chatSocket.on('message', (data: TMessageData) => {
      let messages: TMessageData[] = [];
      const messagesJson = sessionStorage.getItem(room);
      if (messagesJson) {
        messages = JSON.parse(messagesJson);
      }
      messages.push(data);
      setMessages(messages);
      sessionStorage.setItem(room, JSON.stringify(messages));
      scrollToBottom();
    });

    return () => {
      chatSocket.off('message');
      // chatSocket.disconnect();
    };
  }, []);

  const byMe = (socketId: string) => socketIdArray.includes(socketId);

  return (
    <div
      ref={chatSectionRef}
      className={`mt-auto flex flex-col gap-y-2 overflow-y-scroll`}
    >
      {messages.map((message, index) => (
        <div
          className={twJoin(
            `relative flex px-2`,
            byMe(message.socketId) && 'justify-end'
          )}
          key={index}
        >
          <div
            className={twJoin(
              `relative max-w-[80%] rounded-b-lg bg-opacity-60 p-4 pb-5`,
              byMe(message.socketId)
                ? 'rounded-tl-lg bg-neutral-700 text-neutral-100'
                : 'rounded-tr-lg bg-neutral-800 text-neutral-200'
            )}
          >
            <p
              className={twJoin(
                `font-semibold`,
                byMe(message.socketId) ? 'text-red-400' : 'text-blue-400'
              )}
            >
              {byMe(message.socketId) ? 'You' : message.user}
            </p>
            {message.message}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatSection;
