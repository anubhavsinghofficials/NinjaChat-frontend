import { Route, Routes } from 'react-router-dom';
import Intro from './pages/intro';
import CreateRoom from './pages/create-room';

function App() {
  return (
    <div
      className={`flex h-screen w-screen items-center justify-center overflow-hidden bg-black`}
    >
      <Routes>
        {/* intro must be only for the first time (localhost), not a route !! */}
        <Route path='/' element={<Intro />} />
        <Route path='/create-room' element={<CreateRoom />} />
        {/* <Route path='*' element={<404 Page />} /> */}
      </Routes>
    </div>
  );
}

export default App;
