import logo from '@/assets/ninjachat-logo.png';

const NinjaLoader = () => {
  return (
    <div
      className={`flex h-screen w-screen items-center justify-center bg-black`}
    >
      <img src={logo} className={`mb-20 h-[3rem] animate-bounce`} />
    </div>
  );
};

export default NinjaLoader;
