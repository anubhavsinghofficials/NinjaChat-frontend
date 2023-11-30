import { Navigate, Route, Routes } from 'react-router-dom';
import ChatAuth from './components/sections/auth/chat-auth';
import JoinRoomAuth from './components/sections/auth/join-room-auth';
import { lazy, useEffect } from 'react';
import LazyRoute from './components/sections/auth/lazy-route';
import NinjaToast from './components/sections/toast/ninja-toast';
import { IntroStore } from './store/client-store/intro';
import Intro from './pages/intro';
const Chat = lazy(() => import('./pages/Chat'));
const CreateRoom = lazy(() => import('./pages/create-room'));
const JoinRoom = lazy(() => import('./pages/Join-room'));

function App() {
  const { setToggleIntro } = IntroStore();

  useEffect(() => {
    const returningUser = localStorage.getItem('returningUser');
    const isFirstTimeUser = returningUser ? false : true;
    if (isFirstTimeUser) {
      localStorage.setItem('returningUser', JSON.stringify(true));
      setToggleIntro(true);
    }
  }, []);

  return (
    <div
      className={`flex h-screen w-screen items-center justify-center overflow-hidden bg-black`}
    >
      <NinjaToast />
      <Intro />
      <Routes>
        <Route
          path='/create-room'
          element={
            <LazyRoute>
              <CreateRoom />
            </LazyRoute>
          }
        />

        <Route path='/join-room' element={<JoinRoomAuth />}>
          <Route
            index
            element={
              <LazyRoute>
                <JoinRoom />
              </LazyRoute>
            }
          />
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

        <Route path='*' element={<Navigate to={'/create-room'} />} />
      </Routes>
    </div>
  );
}

export default App;
