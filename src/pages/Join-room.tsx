import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import logo from '../assets/ninjachat-logo.png';
import { motion } from 'framer-motion';
import TextInput from '@/components/ui/input-text';
import { TUserForm, ZodUserFormSchema } from '@/types/user-form';
import SmallBlobs from '@/components/sections/background/blobs-small';
import Button from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom';

function JoinRoom() {
  const [invitor, setInvitor] = useState<string>('');
  const [searchParams] = useSearchParams();
  const Navigate = useNavigate();

  useEffect(() => {
    const invitor = searchParams.get('invitor') || '';
    setInvitor(invitor);
  }, []);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<TUserForm>({
    mode: 'onSubmit',
    resolver: zodResolver(ZodUserFormSchema),
  });

  const onSubmit = (data: TUserForm) => {
    const name = data.name;
    const room = searchParams.get('room');
    Navigate(`/chat?room=${room}`, { state: { name: name } });
  };

  return (
    <>
      <SmallBlobs />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={`xs:w-[26rem] drop-shadow-glow xs:p-12 relative z-[1] mb-40 w-[90%] rounded-t-xl rounded-bl-xl bg-black p-8 xl:mb-20`}
      >
        <div className={`flex h-10 items-center gap-x-4`}>
          <img src={logo} className={`h-full`} />
          <p className={`xs:text-4xl text-3xl font-bold text-white`}>
            NinjaChat
          </p>
        </div>
        <div className={`px-2 pt-3 text-slate-100`}>
          {invitor ? (
            <span className={`text-red-400`}>{invitor}</span>
          ) : (
            <span>A Ninja</span>
          )}
          <span className={`pl-1`}>invited you !!</span>
        </div>
        <form
          className='xs:pt-10 flex flex-col gap-y-4 pt-6'
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className={`flex w-full flex-col gap-y-2 text-xl`}>
            <TextInput
              id='name'
              {...register('name')}
              error={errors.name}
              placeholder='Enter Your Name'
              autoComplete='off'
              autoFocus
            />
            <p className='self-start text-lg font-normal text-red-500'>
              {errors.name?.message}
            </p>
          </div>
          <Button>Join Chat</Button>
        </form>

        <NavLink
          to='/create-room'
          className={`absolute bottom-4 left-8 text-neutral-500 hover:text-red-400`}
        >
          or create new chat
        </NavLink>
        <div
          className={`absolute bottom-0 right-0 aspect-square  translate-y-[100%] border-l-[4rem] border-t-[4rem] border-l-transparent border-t-black shadow-md`}
        />
      </motion.div>
    </>
  );
}

export default JoinRoom;
