import { Route , Routes } from 'react-router-dom';
import './App.css';
import HomeYoutube from './Components/HomeYoutube';
import Navbar from './Components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomeYoutube/>} />
        <Route path='/navbar' element={<Navbar/>} />
      </Routes>
    </div>
  );
}

export default App;
