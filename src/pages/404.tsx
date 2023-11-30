import logo4 from '@/assets/ninjachat-logo-4.png';

const NotFound404 = () => {
  return (
    <div className={`flex h-screen w-screen items-center justify-center`}>
      <div className={`mb-20 flex items-center gap-x-4 text-neutral-100`}>
        <img src={logo4} className={`h-[4rem] animate-bounce`} />
        <div className={`flex flex-col items-center`}>
          <p className={`text-5xl font-bold`}>404</p>
          <p className={`font-semibold`}>Not found</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound404;
