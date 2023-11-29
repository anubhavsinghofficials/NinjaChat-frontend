import {
  Outlet,
  useLocation,
  Navigate,
  useSearchParams,
} from 'react-router-dom';

const ChatAuth = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const name = location.state?.name;
  const room = searchParams.get('room');

  if (!name || !room) {
    return <Navigate to='/create-room' />;
  } else {
    return <Outlet />;
  }
};

export default ChatAuth;
