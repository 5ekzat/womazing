import React from 'react'
import HeroBtn from '../../assets/hero-btn.png'
import HeroImg1 from '../../assets/hero-img1.png'
import HeroImg2 from '../../assets/hero-img2.png'
import HeroImg3 from '../../assets/hero-img3.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-text">
        <h1>Новые поступления в этом сезоне</h1>
        <p>Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.</p>
        <div className="img-btn">
         <img src={HeroBtn} alt="" /> 
        <button>Открыть магазин</button>
        </div>
      </div>

      <div className="hero-img">
        <div className="hero-inner-img">
          <img src={HeroImg1} className='hero-img1' alt="" />
          <img src={HeroImg2} className='hero-img2'  alt="" />
          <img src={HeroImg3} className='hero-img3'  alt="" />
        </div>
        
      </div>
    </div>
  )
}

export default Hero