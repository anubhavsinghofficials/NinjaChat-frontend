import { Route, Routes } from 'react-router-dom';
import CreateRoom from './pages/create-room';
import JoinRoom from './pages/Join-room';
// import Chat from './pages/Chat';
import ChatAuth from './components/sections/auth/chat-auth';
import JoinRoomAuth from './components/sections/auth/join-room-auth';
import { lazy } from 'react';
import LazyRoute from './components/sections/auth/lazy-route';
const Chat = lazy(() => import('./pages/Chat'));

function App() {
  return (
    <div
      className={`flex h-screen w-screen items-center justify-center overflow-hidden bg-black`}
    >
      <Routes>
        <Route path='/create-room' element={<CreateRoom />} />

        <Route path='/join-room' element={<JoinRoomAuth />}>
          <Route index element={<JoinRoom />} />
        </Route>

        <Route path='/chat' element={<ChatAuth />}>
          <Route
            index
            element={
              <LazyRoute>
                <Chat />
              </LazyRoute>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
