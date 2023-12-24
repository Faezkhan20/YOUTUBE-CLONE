import toast from 'react-hot-toast';
import './Navbar.css'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/Authcontext';
import { useContext } from 'react';

const Navbar = () => {
  const router=useNavigate()
  const { state, Logout } = useContext(AuthContext)
    return(
        <div id='navbar-screen'>
            <div className='navbar-body'>
                <div className='navbar-left'>
                <i class="fa-solid fa-bars fa-lg"></i>
                <div>
                    <img src='https://www.gstatic.com/youtube/img/promos/growth/6ab442d6a1002dcfa655526badce27feecfc743e1fbe9cbb98ed6855a504a898_324x72.png'/>
                </div>
                </div>
                <div className='navbar-mid'>
                    <div>
                        <input type='input' placeholder='Search' />
                        <button><i class="fa-solid fa-magnifying-glass fa-xl"></i></button>
                    </div>
                    <div className='voice-button'>
                    <i class="fa-solid fa-microphone fa-l"></i>
                    </div>
                </div>
                <div className='navbar-right'>
                <i class="fa-solid fa-video fa-lg"></i>
                <i class="fa-regular fa-bell fa-lg"></i>

                <div onClick={()=>router("/login")} className='nav-photo'>
                {state?.user?.id ?
                <>
                     {/* <img src='https://cdn.pixabay.com/photo/2020/12/13/15/49/red-5828571_960_720.jpg'/> */}
                    {/* <i class="fa-solid fa-user"></i> */}
                  {/* <span className='signinfont'> Sign in</span> */}
                  <button id='logoutb' onClick={Logout}>Logout</button>
                  <h3 id='username'>{state.user.name}</h3>
                  </>
                  :
                  <>
                  <div id='buttonhandle'>
                  <button id='logoutb' className='signinfont' onClick={() => router("/login")}>Login</button>
                  <button id='logoutb' className='signinfont' onClick={() => router("/signup")}>Signup</button>
                  </div>
                  </>
                  }
                </div>
            
                </div>
            </div>
        </div>
    )
}

export default Navbar;
