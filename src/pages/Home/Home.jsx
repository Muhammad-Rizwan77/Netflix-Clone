import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Hero_banner from '../../assets/hero_banner.jpg'
import Hero_title from '../../assets/hero_title.png'
import Play_icon from '../../assets/play_icon.png'
import Info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={Hero_banner} alt="" className='banner-img' />
        <div className="hero-caption">
          <img src={Hero_title} alt="" className='caption-img' />
          <p>Discovering his ties to a secret ancient order, a young man Living in modern <br /> Istanbul embarks on a quest to a save the city from an importal enemy.</p>
          <div className="hero-btns">
            <button className='btn'><img src={Play_icon} alt="" />Play</button>
            <button className='btn dark-btn'><img src={Info_icon} alt="" />More info</button>
          </div>
          <TitleCards/>   
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuser Movies"} category={"top_rated"}/>
        <TitleCards title={"Only On Netflix"} category={"popular"}/>
        <TitleCards title={"Upcoming"} category={"upcoming"}/>
        <TitleCards title={"Top Pics for You"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
