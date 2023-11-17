import { useState } from 'react'
import Navbar from './Navbar'
import './YoutubeYou.css'
import { useNavigate } from 'react-router-dom'

const YoutubeYou = () => {
    const router = useNavigate()
    const [data, setData] = useState([{
        thumbnail: 'https://i.ytimg.com/vi/qot0iPHozdk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDaAaRzQ6mfpA-YL8Srqek_c8-8AQ',
        image: 'https://yt3.ggpht.com/4fBw3tbeuOwgxQ5bOeWESQCgmPtRsEuZp9xSyTsDwC6mhrXKtU90Khwn7Qrpog7RTndguhQm=s88-c-k-c0x00ffffff-no-rj',
        owner: 'Panther ',
        views: '649K Views',
        title: 'Panther X Raga - Galat Karam (Official Music Video)'
    }, {
        thumbnail: 'https://i.ytimg.com/vi/7QilHJpp4VU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAcAe1WcZSm2O8IbEkPesfYtW9zpQ',
        image: 'https://yt3.ggpht.com/nL65E8l3huPqo0Kkj6Cy4BDbupoF2-qdBHOWx6UVTA10BrmmHkg9uU5jFAIzNHFise3KOQAlcA=s68-c-k-c0x00ffffff-no-rj',
        owner: 'Goldmines Dishoom',
        views: '1.4M Views . 10 month ago ',
        title: '96 (4K ULTRA HD) Hindi Dubbed Full Movie | Vijay Sethupathi, Trisha Krishnan, Devadarshini'
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
        views: '8.5M Views',
        title: 'Why Hitler Lost? | World War 2 | Dhruv Rathee '
    }, {
        thumbnail: 'https://i.ytimg.com/vi/WkMr5zNqgwM/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA9vncjedQKKRu9LNS6OBxBYc2lJg',
        image: 'https://yt3.ggpht.com/ytc/APkrFKaa5t6txFIe3gi2jPp_cvy7uO595gH7qOdApKFIjg=s88-c-k-c0x00ffffff-no-rj',
        owner: 'iSpeed',
        views: '3M Views . 9 days ago ',
        title: 'My Life In India🇮🇳'
    }, {
        thumbnail: 'https://i.ytimg.com/vi/RlYHkFMLMtg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==',
        image: 'https://yt3.ggpht.com/y1F4EOGuP19nZcBlzcyCtnHiYhkAOPQiRxwKeaGrOjXarUZZjcx_heiDiC06_Qj6ERea_qWK9A=s68-c-k-c0x00ffffff-no-rj',
        owner: 'T-Series',
        views: '169M Views',
        title: 'JAWAN: Chaleya (Hindi) | Shah Rukh Khan | Nayanthara | atlee | Anirudh | A..'
    }, {
        thumbnail: 'https://i.ytimg.com/vi/HrnrqYxYrbk/hqdefault.jpg',
        image: 'https://yt3.ggpht.com/y1F4EOGuP19nZcBlzcyCtnHiYhkAOPQiRxwKeaGrOjXarUZZjcx_heiDiC06_Qj6ERea_qWK9A=s68-c-k-c0x00ffffff-no-rj',
        owner: 'T-Series',
        views: '20M Views . 1 day ago ',
        title: 'ANIMAL: SATRANGA |Ranbir Kapoor, Rashmika| Sandeep V |Arijit, Shreyas P, Siddharth-Garima |Bhushan K'
    }, {
        thumbnail: 'https://i.ytimg.com/vi/stjZKBhQ3lg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==',
        image: 'https://yt3.ggpht.com/y1F4EOGuP19nZcBlzcyCtnHiYhkAOPQiRxwKeaGrOjXarUZZjcx_heiDiC06_Qj6ERea_qWK9A=s68-c-k-c0x00ffffff-no-rj',
        owner: 'T-Series',
        views: '92M Views',
        title: 'JAWAN: Zinda Banda (Hindi) | Shah Rukh Khan | atlee | Anirudh | Narayan..'
    }, {
        thumbnail: 'https://i.ytimg.com/vi/a18py61_F_w/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==',
        image: 'https://yt3.ggpht.com/nOd4MDguLocyCgkOOs1YBF0xZfvafKP27Q_E6BwK85myVX9BWhSEBePoeIrhuil_PoYb5O-gOg=s68-c-k-c0x00ffffff-no-rj',
        owner: 'Coke Studio Pakistan',
        views: '473M Views',
        title: 'Coke Studio Season 8|Tajdar-e-Haram|Atif Aslam'
    }
    ])
    return (
        <>
            <div id='you-screen'>
                <Navbar />
                <div className='you-body'>
                    <div className='homeleft'>
                        <i style={{ marginTop: '25px' }} class="fa-solid fa-house fa-lg"></i>
                        <span onClick={()=>router("/")}>Home</span><br />
                        <i class="fa-solid fa-photo-film fa-lg"></i>
                        <span>Shorts</span><br />
                        <i class="fa-solid fa-folder-minus fa-lg"></i>
                        <span>Subscriptions</span><br />
                        <div id='borderleftbottom'></div>
                        <i style={{ marginTop: '25px' }} class="fa-brands fa-youtube fa-lg"></i>
                        <span>You</span> <br />
                        <i class="fa-solid fa-clock-rotate-left"></i>
                        <span onClick={()=>router("/history")}>Histroy</span>
                        <div style={{ marginTop: '-10px' }} id='borderleftbottom'></div>
                        <div className='exploreleft'>Explore</div>
                        <i style={{ marginTop: '30px' }} class="fa-solid fa-fire-flame-curved"></i>
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
                    <div className='you-right'>
                        <div className='you-right-1'>
                            <div className='you-image'>
                                <img src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJAAkgMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAACAQADB//EABoQAQEBAQEBAQAAAAAAAAAAAAABESExYQL/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APF4saLIIxRsWQGXFxQHGwsUBYmwAaw0wAxjxACjTqACFYlAcZVBSiQsBZFxp6uAy40hYCY2Fi4A42HiWAOJh4lgBWwsSwAxKdGgFg00oCzMBSFiQoCxY0KA0hRik4oki4siyfAHFwsYAxMPEsAKNdKOA51Kdg1AcGnRoDjKwLIUSeECwpEhQChScGFFFwsaLgNiYS2A5tYecGwAsGnRsALBsMKAVKVGoCysosKDCiBQ4EKAcKBDihlAhQCipKyKlGrUqoNCnQoDRpDQGiooIysCQwhwF/JwIUA4UGVYo6LAlIC1dDVBaNapQShStG0Bo1alqA0aQ0EZGBocc4YFCgEBwglKVQ9XQigetoawFrDqaCitGglGtalQQao0EZOqDSrKBQDlKOcpSgcWUJVgOkq65roOmtoa2qFqWpqVBbR1KwNU1tG3Aa1LW0bQbVFgRZRWAerKELQOKGroEoytoFrDrAWpqawLqNo6C6OtUtBKlZAVkYH/2Q==' />
                            </div>
                            <div className='you-details'>
                                <h1>Faez khan</h1>
                                <p>khanfaez2@gmail.com &bull; View channel</p>
                                <button><i class="fa-solid fa-user"></i> Switch account</button>
                                <button><i class="fa-brands fa-google"></i> Google Account</button>
                            </div>
                        </div>
                        <h1 className='you-history-h1'><i class="fa-solid fa-clock-rotate-left"></i> History</h1>
                        <div className='hist-vids'>
                            {data.map((pro) => (
                                <div className='you-history-single'>
                                    <div className='you-hist-thumbnail'>
                                        <img src={pro.thumbnail} />
                                    </div>
                                    <p className='you-hist-title'>{pro.title}</p>
                                    <span className='you-hist-owner'>{pro.owner}</span>
                                    <p className='you-hist-views'>{pro.views}</p>
                                </div>
                            ))}
                        </div>
                        <h1 className='you-history-h1'><i class="fa-solid fa-list"></i> Playlists</h1>
                        <div className='hist-vids'>
                            {data.map((pro) => (
                                <div className='you-history-single'>
                                    <div className='you-hist-thumbnail'>
                                        <img src={pro.thumbnail} />
                                    </div>
                                    <p className='you-hist-title'>{pro.title}</p>
                                    <span className='you-hist-owner'>{pro.owner}</span>
                                    <p className='you-hist-views'>{pro.views}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default YoutubeYou