import { Outlet, Navigate, useSearchParams } from 'react-router-dom';

const JoinRoomAuth = () => {
  const [searchParams] = useSearchParams();
  const room = searchParams.get('room');

  if (!room) {
    return <Navigate to='/create-room' />;
  } else {
    return <Outlet />;
  }
};

export default JoinRoomAuth;
