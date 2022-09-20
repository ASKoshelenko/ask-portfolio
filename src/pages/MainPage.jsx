import React from 'react'
import '../css/style.css'



export function MainPage() {
    return (
        <div id="main">
          <div className="inner animate-opacity">
            <div className="inner-content">
            <div className="inner-title">Alexey Koshelenko</div>
            <p className="inner-subtitle">Extraordinary web developer and creative minimalism lover</p>
            <div className="inner-button" data-scroll=".about-studio"><i className="fas fa-angle-down"></i></div>      
            </div>       
          </div>
        </div>
    )
}