import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='bg-black text-white'>
     <Navbar />
      <Outlet /> 
    </div>
  );
}

export default App;
