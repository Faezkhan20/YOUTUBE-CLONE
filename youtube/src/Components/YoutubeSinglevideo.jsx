import React, { useState } from 'react'
import './YoutubeSinglevideo.css'
import Navbar from './Navbar'

const YoutubeSinglevideo = () => {
    const [dataa, setDataa] = useState([{
        thumbnail: 'https://i.ytimg.com/vi/Sn9jAcGx3cs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB7lo_gv44qzQgzXiTQ7OOuTuJ-AA',
        image: 'https://yt3.ggpht.com/yjTVc8qOsfZR2ZJxljrSqnaJ6irI0rYZpwKLMfROIqijxTZK_it0dETF9VSdWMgyZFkuMHAx=s68-c-k-c0x00ffffff-no-rj',
        owner: 'React Kar Jay',
        views: '65K Views . 5 days ago',
        title: 'EMIWAY - STILL NUMBER 1 | React Kar Jay'
    }, {
        thumbnail: 'https://i.ytimg.com/vi/MK5kQk6JRko/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAh37l7QsR5rl5VZ5dgRZAEAVWwaw',
        image: 'https://yt3.ggpht.com/ytc/APkrFKY1f0osPgZkiKaqPUDlOrH7afMdWNXBLUjSmZ7mBw=s68-c-k-c0x00ffffff-no-rj',
        owner: 'RankknaR',
        views: '2K Views . 1 day ago',
        title: 'How To Make Backlinks'
    }, {
        thumbnail: 'https://i.ytimg.com/vi/LY8FOvmhY4M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB7x6Z-CZpRJYB6mKK8X7ddrUwqpw',
        image: 'https://yt3.ggpht.com/ytc/APkrFKaJAzaTjIOB64Ixnaj7dIpXXRMJV3a2hQaXPHEK=s68-c-k-c0x00ffffff-no-rj',
        owner: 'MFN-Matrix Fight Night',
        views: '1.2M Views .4 years ago',
        title: 'Anshul Jubli Vs Sanjeet Budhwar | 29.06.2019 |'
    }, {
        thumbnail: 'https://i.ytimg.com/vi/-jFYdg31Jd0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==',
        image: 'https://yt3.ggpht.com/oQ2NQMuq-9IS6_MZdsGXa0RWecaACremA01Z7jo-YpoEF1H6PyUF8PZzXkV10OYwSP3UMJDeTg=s68-c-k-c0x00ffffff-no-rj',
        owner: 'Dhruv Rathee',
        views: '8.5M Views . 5 months ago',
        title: 'Why Hitler Lost? | World War 2 | Dhruv Rathee '
    }, {
        thumbnail: 'https://i.ytimg.com/vi/7QilHJpp4VU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAcAe1WcZSm2O8IbEkPesfYtW9zpQ',
        image: 'https://yt3.ggpht.com/nL65E8l3huPqo0Kkj6Cy4BDbupoF2-qdBHOWx6UVTA10BrmmHkg9uU5jFAIzNHFise3KOQAlcA=s68-c-k-c0x00ffffff-no-rj',
        owner: 'Goldmines Dishoom',
        views: '1.4M Views . 10 month ago ',
        title: '96 (4K ULTRA HD) Hindi Dubbed Full Movie'
    }, {
        thumbnail: 'https://i.ytimg.com/vi/RlYHkFMLMtg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==',
        image: 'https://yt3.ggpht.com/y1F4EOGuP19nZcBlzcyCtnHiYhkAOPQiRxwKeaGrOjXarUZZjcx_heiDiC06_Qj6ERea_qWK9A=s68-c-k-c0x00ffffff-no-rj',
        owner: 'T-Series',
        views: '169M Views . 2 months ago ',
        title: 'JAWAN Chaleya..'
    }, {
        thumbnail: 'https://i.ytimg.com/vi/WkMr5zNqgwM/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA9vncjedQKKRu9LNS6OBxBYc2lJg',
        image: 'https://yt3.ggpht.com/ytc/APkrFKaa5t6txFIe3gi2jPp_cvy7uO595gH7qOdApKFIjg=s88-c-k-c0x00ffffff-no-rj',
        owner: 'iSpeed',
        views: '3M Views . 9 days ago ',
        title: 'My Life In India🇮🇳'
    },{

        thumbnail: 'https://i.ytimg.com/vi/a18py61_F_w/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==',
        image: 'https://yt3.ggpht.com/nOd4MDguLocyCgkOOs1YBF0xZfvafKP27Q_E6BwK85myVX9BWhSEBePoeIrhuil_PoYb5O-gOg=s68-c-k-c0x00ffffff-no-rj',
        owner: 'Coke Studio Pakistan',
        views: '473M Views . 8 years ago ',
        title: 'Coke Studio Season 8|Tajdar-e-Haram|Atif Aslam'
    }, {
        thumbnail: 'https://i.ytimg.com/vi/MQH1IcSIeyc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==',
        image: 'https://i.ytimg.com/vi/MQH1IcSIeyc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==',
        owner: 'Zee Music Compamny',
        views: '3.3M Views . 6 days ago ',
        title: 'Sara Zamana - Ganapath | Tiger Shroff,Elli AvrRam| Benny Dayal, Prakri..'
    }
    // }, {
    //     thumbnail: 'https://i.ytimg.com/vi/ch_rX3qF_WE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCngHnvnsCSlGqoN-2ZMEw4-KGfLg',
    //     image: 'https://yt3.ggpht.com/y1F4EOGuP19nZcBlzcyCtnHiYhkAOPQiRxwKeaGrOjXarUZZjcx_heiDiC06_Qj6ERea_qWK9A=s68-c-k-c0x00ffffff-no-rj',
    //     owner: 'T-Series',
    //     views: '2.4M Views . 6 months ago ',
    //     title: 'Tulsi Kumar: Awaara (Truly Konnected) | Kaushik-Guddu | Bhushan Kumar | Song With Lyrics'
    // }, {
    //     thumbnail: 'https://i.ytimg.com/vi/5V04DETPF0o/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC3R3yXyYC46Xc7u78mtVs4yW3GhQ',
    //     image: 'https://yt3.ggpht.com/y1F4EOGuP19nZcBlzcyCtnHiYhkAOPQiRxwKeaGrOjXarUZZjcx_heiDiC06_Qj6ERea_qWK9A=s68-c-k-c0x00ffffff-no-rj',
    //     owner: 'T-Series',
    //     views: '169M Views . 2 months ago ',
    //     title: 'ANIMAL: HUA MAIN (Song) | Ranbir Kapoor | Rashmika M | Sandeep V | Raghav,Manoj M | Bhushan K'
    // }
    ])
    return (
        <div id='youtubesinglevideoscreen'>
            <Navbar />
            <div id='wholemain'>
                <div id='leftwholemain'>
                    <div className='leftvid'>
                        <iframe src='https://www.youtube.com/embed/VAdGW7QDJiU' ></iframe>
                        <div className='title'>JAWAN: Chaleya (Hindi) | Shah Rukh Khan | Nayanthara | Atlee | Anirudh | Arijit S, Shilpa R | Kumaar</div>
                        <div className='lastleftdiv'>
                            <div id='lastinnerleft'>
                                <div className='ownericon'>
                                    <img className='ownericonimg' src="https://yt3.ggpht.com/y1F4EOGuP19nZcBlzcyCtnHiYhkAOPQiRxwKeaGrOjXarUZZjcx_heiDiC06_Qj6ERea_qWK9A=s88-c-k-c0x00ffffff-no-rj" alt="" />
                                </div>
                                <div className='ownersubsname'>
                                    <div className='ownername'>T-Series<i id='checked' class="fa-solid fa-circle-check fa-2xs"></i></div>
                                    <div className='ownersubs'>252M subscribers</div>
                                </div>
                                <button className='subsbutton'>Subscribe</button>
                            </div>

                            <div id='leftmainbutton'>
                                <div id='innerflex'>
                                    <button className='likeb'><i id='thumbsup' class="fa-regular fa-thumbs-up fa-xl"></i><span className='thumbsup'>2.4M</span></button>
                                    <div className='likedislikeline'></div>
                                    <button className='dislikeb'><i class="fa-regular fa-thumbs-down fa-xl"></i></button>
                                </div>
                                <button className='shareb'><i class="fa-solid fa-share"></i>Share</button>
                                <button className='downloadb'><i class="fa-solid fa-arrow-down-long"></i>Download</button>
                                <button className='threedotb'><i class="fa-solid fa-circle fa-2xs" style={{ color: "#8f8f8f" }}></i><i class="fa-solid fa-circle fa-2xs" style={{ color: "#8f8f8f" }}></i><i class="fa-solid fa-circle fa-2xs" style={{ color: "#8f8f8f" }}></i></button>
                            </div>
                        </div>

                    </div>
                </div>
                <div id='rightwholemain'>
                    <div id='rightwholeinner'>
                        {dataa.map((pro) => (
                            <div className='youtube-single-div2'>
                                <div className='Youtube-thumbnail2'>
                                    <img src={pro.thumbnail} />
                                </div>
                                <div className='single-down-div2'>
                                    <div className='single-div-content2'>
                                        <p>{pro.title}</p>
                                        <span className='single-div-owner2'>{pro.owner}</span><br />
                                        <span className='single-div-views2'>{pro.views}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default YoutubeSinglevideo