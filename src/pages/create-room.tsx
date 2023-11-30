import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TUserForm, ZodUserFormSchema } from '@/types/user-form';
import logo from '../assets/ninjachat-logo.png';
import TextInput from '@/components/ui/input-text';
import Button from '@/components/ui/button';
import SmallBlobs from '@/components/sections/background/blobs-small';
import { useNavigate } from 'react-router-dom';

function CreateRoom() {
  const Navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<TUserForm>({
    mode: 'onSubmit',
    resolver: zodResolver(ZodUserFormSchema),
  });

  const onSubmit = (data: TUserForm) => {
    const currentDate = new Date();
    const currentIIsoDate = currentDate.toISOString();
    const creator = data.name;
    const room = `room-${currentIIsoDate}_by-${creator}`;
    Navigate(`/chat?room=${room}`, { state: { name: creator } });
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
          <img src={logo} className={`xs:h-full h-[90%]`} />
          <p className={`xs:text-4xl text-3xl font-bold text-white`}>
            NinjaChat
          </p>
        </div>
        <form
          className='flex flex-col gap-y-4 pt-10'
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
          <Button>Create Chat</Button>
        </form>
        <div
          className={`absolute bottom-0 right-0 aspect-square  translate-y-[100%] border-l-[4rem] border-t-[4rem] border-l-transparent border-t-black shadow-md`}
        />
      </motion.div>
    </>
  );
}

export default CreateRoom;
