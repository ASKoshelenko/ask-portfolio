import React from 'react'
import '../css/style.css'
import  portfolioImg1 from '../img/portfolioImg1.jpg'



export function Portfolio() {
    return (
      <div className="default-section portfolio">
      <div className="container">
          <h3 className="title text-center">Portfolio</h3>
          <p className="portfolio-text">In auctor ex id urna faucibus porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus ligula semper metus pellentesque mattis. Maecenas  volutpat, diam enim sagittis quam, id porta quam. Sed id dolor consectetur fermentum nibh volutpat, accumsan purus. </p>
      </div>
      <div id="tabs" className="portfolio-tab">
        <ul>
          <li>
            <a href="#all-works">              
              <span>All works</span>
            </a>
          </li>
          <li>
            <a href="#branding">
              <span>Branding</span>
            </a>
          </li>
          <li>
            <a href="#design">
              <span>Design</span>
            </a>
          </li>
          <li>
            <a href="#photography">
              <span>Photography</span>
            </a>
          </li>           
        </ul>
        <div id="all-works">
          <div className="portfolio-item">
            <img src={portfolioImg1} alt="" />              
          </div>
          <div className="portfolio-item">
            <img src={portfolioImg1} alt="" />              
          </div>
          <div className="portfolio-item">
            <img src={portfolioImg1} alt="" />                
          </div>
          <div className="portfolio-item">
            <img src={portfolioImg1} alt="" />              
          </div>
          <div className="portfolio-item">
            <img src={portfolioImg1} alt="" />              
          </div>
          <div className="portfolio-item">
            <img src={portfolioImg1} alt="" />              
          </div>
        </div>
        {/* <div id="branding">
          <div className="portfolio-item">
            <img src={portfolioImg1}alt="" />              
          </div>
          <div className="portfolio-item">
            <img src={portfolioImg1} alt="" />              
          </div>
          <div className="portfolio-item">
            <img src={portfolioImg1} alt="" />              
          </div>
        </div>
        <div id="design">
          <div className="portfolio-item">
            <img src={portfolioImg1} alt="" />              
          </div>
          <div className="portfolio-item">
            <img src={portfolioImg1} alt="" />              
          </div>
          <div className="portfolio-item">
            <img src={portfolioImg1} alt="" />              
          </div>
        </div>
        <div id="photography">
          <div className="portfolio-item">
            <img src={portfolioImg1} alt="" />              
          </div>
          <div className="portfolio-item">
            <img src={portfolioImg1} alt="" />              
          </div>
          <div className="portfolio-item">
            <img src={portfolioImg1} alt="" />              
          </div>
        </div> */}
      </div>
    </div>
    )
}