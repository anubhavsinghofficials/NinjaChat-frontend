import { Suspense, ReactNode, FC } from 'react';
import NinjaLoader from '@/components/ui/ninja-loader';

const LazyRoute: FC<{ children: ReactNode }> = ({ children }) => {
  return <Suspense fallback={<NinjaLoader />}>{children}</Suspense>;
};

export default LazyRoute;
