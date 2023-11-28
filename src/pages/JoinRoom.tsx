import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import logo from '../assets/ninjachat-logo.png';
import { motion } from 'framer-motion';
import TextInput from '@/components/ui/input-text';
import { TUserFormType, ZodUserFormSchema } from '@/types/user-form';
import SmallBlobs from '@/components/sections/background/blobs-small';
import Button from '@/components/ui/button';

const friend = 'Gugu Singh';

function JoinRoom() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<TUserFormType>({
    mode: 'onSubmit',
    resolver: zodResolver(ZodUserFormSchema),
  });

  const onSubmit = (data: TUserFormType) => {
    console.log(data);
  };

  return (
    <>
      <SmallBlobs />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={`xs:w-[26rem] drop-shadow-glow xs:p-12 z-[1] mb-40 w-[90%] rounded-t-xl rounded-bl-xl bg-black p-8 xl:mb-20`}
      >
        <div className={`flex h-10 items-center gap-x-4`}>
          <img src={logo} className={`h-full`} />
          <p className={`xs:text-4xl text-3xl font-bold text-white`}>
            NinjaChat
          </p>
        </div>
        <div className={`px-2 pt-3 text-slate-100`}>
          You are invited by &nbsp;
          <span className={`pr-1 text-red-400`}>{friend}</span>
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
              placeholder='Choose Your Name'
              autoComplete='off'
              autoFocus
            />
            <p className='self-start text-lg font-normal text-red-500'>
              {errors.name?.message}
            </p>
          </div>
          <Button>Join Chat</Button>
        </form>
        <div
          className={`absolute bottom-0 right-0 aspect-square  translate-y-[100%] border-l-[4rem] border-t-[4rem] border-l-transparent border-t-black shadow-md`}
        />
      </motion.div>
    </>
  );
}

export default JoinRoom;