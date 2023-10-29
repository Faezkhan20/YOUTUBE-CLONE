import { Route , Routes } from 'react-router-dom';
import './App.css';
import HomeYoutube from './Components/HomeYoutube';
import Navbar from './Components/Navbar';
import Loginyoutube from './Components/Loginyoutube';
import Signupyoutube from './Components/Signupyoutube';



function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<HomeYoutube/>} />
        <Route path='/navbar' element={<Navbar/>} />
        <Route path='/signup' element={<Signupyoutube/>} />
        <Route path='/login' element={<Loginyoutube/>} />

      </Routes>
    </div>
  );
}


export default App;
