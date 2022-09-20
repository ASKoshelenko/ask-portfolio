import React from 'react'
import '../css/style.css'



export function Services() {
    return (
      <div className="default-section services">
      <div className="container">
        <h3 className="title text-center">Services</h3>
        <div id="tabs" className="services-tab">
          <ul>
            <li>
              <a href="#branding">
                <span className="icon-strategy"></span>
                <span>Branding</span>
              </a>
            </li>
            <li>
              <a href="#web-design">
                <span className="icon-desktop"></span>
                <span>Web Design</span>
              </a>
            </li>
            <li>
              <a href="#graphic-design">
                <span className="icon-tools"></span>
                <span>Graphic Design</span>
              </a>
            </li>
            <li>
              <a href="#development">
                <span className="icon-gears"></span>
                <span>Development</span>
              </a>
            </li>
            <li>
              <a href="#photography">
                <span className="icon-camera"></span>
                <span>Photography</span>
              </a>
            </li>
          </ul>
          <div id="branding">
            <div className="row">
              <div className="col col-4 col-md-12">
                <blockquote>
                  <p>A brand for a company is like 
                    a reputation for a person. You earn reputation by trying to do hard things well.</p>
                  <span>— Jeff Bezos</span>
                </blockquote>
              </div>
              <div className="col col-4 col-md-6 col-sm-12">
                <p className="default-text">Maecenas  volutpat, diam enim sagittis quam, id porta quam. Sed id dolor consectetur fermentum volutpat nibh, accumsan purus. Lorem ipsum dolor sit semper amet, consectetur adipiscing elit. In maximus ligula metus pellentesque mattis. </p>
              </div>
              <div className="col col-4 col-md-6 col-sm-12">
                <p className="default-text">Donec vel ultricies purus. Nam dictum sem, ipsum aliquam . Etiam sit amet fringilla lacus. Pellentesque suscipit ante at ullamcorper pulvinar neque porttitor. Integer lectus. Praesent sed nisi eleifend, fermentum orci amet, iaculis libero.</p>              
              </div>
            </div>
          </div>
          <div id="web-design">
            <div className="row">
              <div className="col col-4 col-md-12">
                <p className="default-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus ligula semper metus pellentesque mattis. Maecenas  volutpat, diam enim sagittis quam, id porta quam. Sed id dolor consectetur fermentum nibh volutpat, accumsan purus.</p>
              </div>
              <div className="col col-4 col-md-6 col-sm-12">
                <p className="default-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus ligula semper metus pellentesque mattis. Maecenas  volutpat, diam enim sagittis quam, id porta quam. Sed id dolor consectetur fermentum nibh volutpat, accumsan purus.</p>
              </div>
              <div className="col col-4 col-md-6 col-sm-12">
                <p className="default-text">Etiam sit amet fringilla lacus. Pellentesque suscipit ante at ullamcorper pulvinar neque porttitor. Integer lectus. Praesent sed nisi eleifend, fermentum orci amet, iaculis libero. Donec vel ultricies purus. Nam dictum sem, eu aliquam ipsum.</p>              
              </div>
            </div>
          </div>
          <div id="graphic-design">
            <div className="row">
              <div className="col col-4 col-md-12">
                <p className="default-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus ligula semper metus pellentesque mattis. Maecenas  volutpat, diam enim sagittis quam, id porta quam. Sed id dolor consectetur fermentum nibh volutpat, accumsan purus.</p>
              </div>
              <div className="col col-4 col-md-6 col-sm-12">
                <p className="default-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus ligula semper metus pellentesque mattis. Maecenas  volutpat, diam enim sagittis quam, id porta quam. Sed id dolor consectetur fermentum nibh volutpat, accumsan purus.</p>
              </div>
              <div className="col col-4 col-md-6 col-sm-12">
                <p className="default-text">Etiam sit amet fringilla lacus. Pellentesque suscipit ante at ullamcorper pulvinar neque porttitor. Integer lectus. Praesent sed nisi eleifend, fermentum orci amet, iaculis libero. Donec vel ultricies purus. Nam dictum sem, eu aliquam ipsum.</p>              
              </div>
            </div>
          </div>
          <div id="development">
            <div className="row">
              <div className="col col-4 col-md-12">
                <p className="default-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus ligula semper metus pellentesque mattis. Maecenas  volutpat, diam enim sagittis quam, id porta quam. Sed id dolor consectetur fermentum nibh volutpat, accumsan purus.</p>
              </div>
              <div className="col col-4 col-md-6 col-sm-12">
                <p className="default-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus ligula semper metus pellentesque mattis. Maecenas  volutpat, diam enim sagittis quam, id porta quam. Sed id dolor consectetur fermentum nibh volutpat, accumsan purus.</p>
              </div>
              <div className="col col-4 col-md-6 col-sm-12">
                <p className="default-text">Etiam sit amet fringilla lacus. Pellentesque suscipit ante at ullamcorper pulvinar neque porttitor. Integer lectus. Praesent sed nisi eleifend, fermentum orci amet, iaculis libero. Donec vel ultricies purus. Nam dictum sem, eu aliquam ipsum.</p>              
              </div>
            </div>
          </div>
          <div id="photography">
            <div className="row">
              <div className="col col-4 col-md-12">
                <p className="default-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus ligula semper metus pellentesque mattis. Maecenas  volutpat, diam enim sagittis quam, id porta quam. Sed id dolor consectetur fermentum nibh volutpat, accumsan purus.</p>
              </div>
              <div className="col col-4 col-md-6 col-sm-12">
                <p className="default-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus ligula semper metus pellentesque mattis. Maecenas  volutpat, diam enim sagittis quam, id porta quam. Sed id dolor consectetur fermentum nibh volutpat, accumsan purus.</p>
              </div>
              <div className="col col-4 col-md-6 col-sm-12">
                <p className="default-text">Etiam sit amet fringilla lacus. Pellentesque suscipit ante at ullamcorper pulvinar neque porttitor. Integer lectus. Praesent sed nisi eleifend, fermentum orci amet, iaculis libero. Donec vel ultricies purus. Nam dictum sem, eu aliquam ipsum.</p>              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}