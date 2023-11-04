import React from 'react'
import './YoutubeSinglevideo.css'
import Navbar from './Navbar'

const YoutubeSinglevideo = () => {
    return (
        <div id='youtubesinglevideoscreen'>
            <Navbar />
            <div id='wholemain'>
                <div id='leftwholemain'>
                    <div className='leftvid'>
                        <iframe src='https://www.youtube.com/embed/VAdGW7QDJiU' ></iframe>
                        <div className='title'>JAWAN: Chaleya (Hindi) | Shah Rukh Khan | Nayanthara | Atlee | Anirudh | Arijit S, Shilpa R | Kumaar</div>
                        <div className='lastleftdiv'>
                            <div className='ownericon'>
                                <img className='ownericonimg' src="https://yt3.ggpht.com/y1F4EOGuP19nZcBlzcyCtnHiYhkAOPQiRxwKeaGrOjXarUZZjcx_heiDiC06_Qj6ERea_qWK9A=s88-c-k-c0x00ffffff-no-rj" alt="" />
                            </div>
                            <div className='ownersubsname'>
                                <div className='ownername'>T-Series <i class="fa-solid fa-check fa-2xs"></i></div>
                                <div className='ownersubs'>252M subscribers</div>
                            </div>
                            <button className='subsbutton'>Subscribe</button>
                        </div>

                    </div>
                </div>
                <div id='rightwholemain'></div>
            </div>

        </div>
    )
}

export default YoutubeSinglevideo