import React from 'react'
import '../css/style.css'
import logo from '../img/logo.png'
// import {Link, Router} from 'react-router-dom'

export function Header() {
    return (
        <div id="header">
        <div className="container-fluid">
          <div className="logo" data-scroll=".inner">
            <a href="/home">
              <img src={logo} alt="" />
              <span>ASKoshelenko</span>
            </a>  
          </div>
          <ul className="header-nav animation-scale">
            <li>
              <a href="/home" data-scroll=".inner">Home</a>
            </li>
            <li>
              <a href="/about" data-scroll=".about-studio">About</a>
            </li>
            <li>
              <a href="/services" data-scroll=".services">Services</a>
            </li>
            <li>
              <a href="/portfolio" data-scroll=".portfolio">Works</a>
            </li>
            <li>
              <a href="/contacts" data-scroll=".contacts">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    )
}