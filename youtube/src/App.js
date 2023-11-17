import { Route , Routes } from 'react-router-dom';
import './App.css';
import HomeYoutube from './Components/HomeYoutube';
import Navbar from './Components/Navbar';
import Loginyoutube from './Components/Loginyoutube';
import Signupyoutube from './Components/Signupyoutube';
import YoutubeSinglevideo from './Components/YoutubeSinglevideo';
import YoutubeHistory from './Components/YoutubeHistory';
import YoutubeYou from './Components/YoutubeYou';



function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<HomeYoutube/>} />
        <Route path='/navbar' element={<Navbar/>} />
        <Route path='/signup' element={<Signupyoutube/>} />
        <Route path='/login' element={<Loginyoutube/>} />
        <Route path='/youtubesinglevideo' element={<YoutubeSinglevideo/>} />
        <Route path='/history' element={<YoutubeHistory/>} />
        <Route path='/you' element={<YoutubeYou/>} />

      </Routes>
    </div>
  );
}


export default App;
