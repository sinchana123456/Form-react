import {Routes,Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import DriverOnboarding from './components/DriverOnboarding';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/add-user" element={<DriverOnboarding />}/>
      </Routes>
  </>
  );
}

export default App;
