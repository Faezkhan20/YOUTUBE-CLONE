import React, { useState } from 'react'
import './HomeYoutube.css'
import Navbar from './Navbar'

const HomeYoutube = () => {
    const [data, setData] = useState([{
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
        title: 'How To Make Backlinks | Powerful Backlinks For 2x Traffic [In Single Video]'
    }, {
        thumbnail: 'https://i.ytimg.com/vi/LY8FOvmhY4M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB7x6Z-CZpRJYB6mKK8X7ddrUwqpw',
        image: 'https://yt3.ggpht.com/ytc/APkrFKaJAzaTjIOB64Ixnaj7dIpXXRMJV3a2hQaXPHEK=s68-c-k-c0x00ffffff-no-rj',
        owner: 'MFN-Matrix Fight Night',
        views: '1.2M Views .4 years ago',
        title: 'Anshul Jubli Vs Sanjeet Budhwar | 29.06.2019 | Matrix Fight Night'
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
        title: '96 (4K ULTRA HD) Hindi Dubbed Full Movie | Vijay Sethupathi, Trisha Krishnan, Devadarshini'
    }, {
        thumbnail: 'https://i.ytimg.com/vi/RlYHkFMLMtg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==',
        image: 'https://yt3.ggpht.com/y1F4EOGuP19nZcBlzcyCtnHiYhkAOPQiRxwKeaGrOjXarUZZjcx_heiDiC06_Qj6ERea_qWK9A=s68-c-k-c0x00ffffff-no-rj',
        owner: 'T-Series',
        views: '169M Views . 2 months ago ',
        title: 'JAWAN: Chaleya (Hindi) | Shah Rukh Khan | Nayanthara | atlee | Anirudh | A..'
    }, {
        thumbnail: 'https://i.ytimg.com/vi/WkMr5zNqgwM/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA9vncjedQKKRu9LNS6OBxBYc2lJg',
        image: 'https://yt3.ggpht.com/ytc/APkrFKaa5t6txFIe3gi2jPp_cvy7uO595gH7qOdApKFIjg=s88-c-k-c0x00ffffff-no-rj',
        owner: 'iSpeed',
        views: '3M Views . 9 days ago ',
        title: 'My Life In India🇮🇳'
    }, {
        thumbnail: 'https://i.ytimg.com/vi/HrnrqYxYrbk/hqdefault.jpg',
        image: 'https://yt3.ggpht.com/y1F4EOGuP19nZcBlzcyCtnHiYhkAOPQiRxwKeaGrOjXarUZZjcx_heiDiC06_Qj6ERea_qWK9A=s68-c-k-c0x00ffffff-no-rj',
        owner: 'T-Series',
        views: '20M Views . 1 day ago ',
        title: 'ANIMAL: SATRANGA |Ranbir Kapoor, Rashmika| Sandeep V |Arijit, Shreyas P, Siddharth-Garima |Bhushan K'
    }, {
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
    }, {
        thumbnail: 'https://i.ytimg.com/vi/ch_rX3qF_WE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCngHnvnsCSlGqoN-2ZMEw4-KGfLg',
        image: 'https://yt3.ggpht.com/y1F4EOGuP19nZcBlzcyCtnHiYhkAOPQiRxwKeaGrOjXarUZZjcx_heiDiC06_Qj6ERea_qWK9A=s68-c-k-c0x00ffffff-no-rj',
        owner: 'T-Series',
        views: '2.4M Views . 6 months ago ',
        title: 'Tulsi Kumar: Awaara (Truly Konnected) | Kaushik-Guddu | Bhushan Kumar | Song With Lyrics'
    }, {
        thumbnail: 'https://i.ytimg.com/vi/5V04DETPF0o/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC3R3yXyYC46Xc7u78mtVs4yW3GhQ',
        image: 'https://yt3.ggpht.com/y1F4EOGuP19nZcBlzcyCtnHiYhkAOPQiRxwKeaGrOjXarUZZjcx_heiDiC06_Qj6ERea_qWK9A=s68-c-k-c0x00ffffff-no-rj',
        owner: 'T-Series',
        views: '169M Views . 2 months ago ',
        title: 'ANIMAL: HUA MAIN (Song) | Ranbir Kapoor | Rashmika M | Sandeep V | Raghav,Manoj M | Bhushan K'
    }
    ])

    const [shortsData, setShortsData] = useState([
        {
            SThumbnail: "https://i.ytimg.com/vi/QQG7OwF2AWk/oar2.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLAl87NvFZAOYXapgUORq2HBaDvIvA",
            STitle: "JavaScript: 7 String Methods",
            SViews: "4.5M views"
        }, {
            SThumbnail: "https://i.ytimg.com/vi/3Hh4Wc95Yis/hq720.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLBUg0s6KZDgf47eRfxQj3-OX4GXfw",
            STitle: "Boxing best match",
            SViews: "2M views"
        },{
            SThumbnail : "https://i.ytimg.com/vi/Vh2a5g_O5fY/oar2.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLBHwuozwEmcAYw0IzBPw5wbWHUFZw",
            STitle: "Superstar yash",
            SViews: "3M views"
        },{
            SThumbnail : "https://i.ytimg.com/vi/vrsOytg_kQU/oar2.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLCimpKgAd4YferXyOshHVIQMFNyFA",
            STitle: "Best unreal gun",
            SViews: "37M views"
        },{
            SThumbnail : "https://i.ytimg.com/vi/Uj5wjMUtrS0/oar2.jpg?sqp=-oaymwEdCJUDENAFSFWQAgHyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLDoArQ6eMm4nzpCT51oTo19Gai9gA",
            STitle: "Electric sooter",
            SViews: "898K views"
        }
    ])
    return (
        
        <div id='homeyoutube'>
            <Navbar/>
            <div className='youtubebody'>
                <div className='homeleft'>
                    <i style={{ marginTop: '25px' }} class="fa-solid fa-house fa-lg"></i>
                    <span>Home</span><br />
                    <i class="fa-solid fa-photo-film fa-lg"></i>
                    <span>Shorts</span><br />
                    <i class="fa-solid fa-folder-minus fa-lg"></i>
                    <span>Subscriptions</span><br/>
                    <div id='borderleftbottom'></div>
                    <i style={{ marginTop: '25px' }} class="fa-brands fa-youtube fa-lg"></i>
                    <span>You</span> <br/>
                    <i class="fa-solid fa-clock-rotate-left"></i>
                    <span>Histroy</span>
                    <div style={{marginTop:'-10px'}} id='borderleftbottom'></div>
                    <div className='exploreleft'>Explore</div>
                    <i style={{marginTop:'30px'}}  class="fa-solid fa-fire-flame-curved"></i>
                    <span>Trending</span><br />
                    <i class="fa-solid fa-bag-shopping"></i>                    
                    <span>Shopping bag</span><br />
                    <i class="fa-solid fa-music"></i>               
                         <span>Music</span><br />
                         <i class="fa-solid fa-film"></i>
                    <span>Movies</span><br />
                    <i class="fa-solid fa-life-ring"></i>
                    <span>Live</span><br />
                    <i class="fa-solid fa-gamepad"></i>
                    <span>Gaming</span><br />
                    <i class="fa-solid fa-newspaper"></i>
                    <span>News</span><br />


                    
                </div>
                <div className='homeright'>
                <div className='homebodytop'>
                        <button style={{ backgroundColor: 'black', color: 'white' }}>All</button>
                        <button>Music</button>
                        <button>Reaction Videos</button>
                        <button>Mixes</button>
                        <button>Divine</button>
                        <button>Web Development</button>
                        <button>Computer Science</button>
                        <button>Live</button>
                        <button>History</button>
                        <button>Action Thriller</button>
                        <button>Gaming</button>
                        <button>Protein</button>
                        <button>Emiway</button>
                        
                    </div>


                    <div className='youtube-main'>
                        {data.map((pro) => (
                            <div className='youtube-single-div'>
                                <div className='Youtube-thumbnail'>
                                    <img src={pro.thumbnail} />
                                </div>
                                <div className='single-down-div'>
                                    <div className='single-down-img'>
                                        <img src={pro.image} />
                                    </div>
                                    <div className='single-div-content'>
                                        <p>{pro.title}</p>
                                        <span className='single-div-owner'>{pro.owner}</span><br />
                                        <span className='single-div-views'>{pro.views}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='youtube-shorts'>
                        <img src='data:image/png;base64,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' />
                    </div>
                    <div className='youtube-main2'>
                        {shortsData.map((pro2) => (
                            <div className='shorts-single-div'>
                                <img src={pro2.SThumbnail}/>
                                <p>{pro2.STitle}</p>
                                <span>{pro2.SViews}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeYoutube