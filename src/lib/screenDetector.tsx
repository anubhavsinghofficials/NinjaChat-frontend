function TailwindScreenDetector() {
  return (
    <div
      className={`fixed left-0 top-6 z-50 flex h-14 w-40 items-center justify-center text-black`}
    >
      <p className='xxs:block xxs:bg-red-300 xs:hidden top rounded-full px-4 text-3xl font-bold'>
        {'>'}320
      </p>
      <p className='xs:block xs:bg-blue-300 xxs:hidden rounded-full px-4 text-3xl font-bold sm:hidden'>
        {'>'}420
      </p>
      <p className='hidden rounded-full px-4 text-3xl font-bold sm:block sm:bg-red-300 md:hidden'>
        {'>'}640px
      </p>
      <p className='hidden rounded-full px-4 text-3xl font-bold md:block md:bg-green-300 lg:hidden'>
        {'>'}768px
      </p>
      <p className='hidden rounded-full px-4 text-3xl font-bold lg:block lg:bg-yellow-300 xl:hidden'>
        {'>'}1024px
      </p>
      <p className='hidden rounded-full px-4 text-3xl font-bold xl:block xl:bg-orange-300 2xl:hidden'>
        {'>'}1280px
      </p>
      <p className='hidden rounded-full px-4 text-3xl font-bold 2xl:block 2xl:bg-emerald-400'>
        {'>'}1536px
      </p>
    </div>
  );
}

export default TailwindScreenDetector;
