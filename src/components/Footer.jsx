import React from 'react'
import '../css/style.css'



export function Footer() {
    return (
        <div id="footer">
      <div className="container-fluid text-center bg-lightgray">
        <div className="footer-img">
          <img src="img/footer-logo.png" alt="" />
        </div>
        {/* <!-- /.footer-img --> */}
        <div className="footer-social-nav">
          <ul>
            <li>              
              <a href="#" className="rhomb-icon transparent-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#" className="rhomb-icon transparent-icon">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#" className="rhomb-icon transparent-icon">
                <i className="fab fa-behance"></i>
              </a>
            </li>
            <li>
              <a href="#" className="rhomb-icon transparent-icon">
                <i href="#" className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href="#" className="rhomb-icon transparent-icon">
                <i className="fab fa-pinterest"></i>
              </a>
            </li>
          </ul>
        </div>
        {/* <!-- /.footer-social-nav --> */}
        <div className="copyright">
          <i className="far fa-copyright"></i>
          <span>ASK 2022</span>
          <p>Made with love for great people</p>
        </div>
        {/* <!-- /.copyright --> */}
        <div className="go-home" data-scroll=".inner"><i className="fas fa-sort-up"></i></div>        
      </div>
      {/* <!-- /.container-fluid --> */}
    </div>
    )
}