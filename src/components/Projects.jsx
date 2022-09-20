import React from 'react'
import '../css/style.css'
import portfolioImg1 from '../img/portfolioImg1.jpg'



export function Projects() {
    return (
        <div className="default-section latest-news">
        <div className="container">
          <h3 className="title">Latest news</h3>
          <a href="#">All News in our blog <span className="fas fa-angle-right"></span></a>
          <div className="row">
            <div className="col col-4 col-md-12">
              <div className="latest-news-item">
                <img src={portfolioImg1} alt="" />
                <div className="latest-news-title">New web design trends</div> 
                {/* <!-- /.latest-news-title --> */}
                <div className="latest-news-signature">
                  <span>John Doe | 10 December</span>
                </div>
                {/* <!-- /.latest-news-signature --> */}
                <p className="default-text">Maecenas  volutpat, diam enim sagittis quam, id porta quam. Sed id dolor consectetur fermentum nibh volutpat, accumsan purus. </p>
                <button className="btn btn-small">Read more </button> 
                {/* <!-- /.btn btn-small --> */}
              </div>
              {/* <!-- /.latest-news-item --> */}
            </div>
            {/* <!-- /.col col-4 --> */}
            <div className="col col-4 col-md-12">
              <div className="latest-news-item">
                <img src={portfolioImg1}  alt="" />
                <div className="latest-news-title">Minimalistic Design Forever</div> 
                {/* <!-- /.latest-news-title --> */}
                <div className="latest-news-signature">
                  <span>John Doe | 9 December</span>
                </div>
                {/* <!-- /.latest-news-signature --> */}
                <p className="default-text">Maecenas  volutpat, diam enim sagittis quam, id porta quam. Sed id dolor consectetur fermentum nibh volutpat, accumsan purus. </p>
                <button className="btn btn-small">Read more </button> 
                {/* <!-- /.btn btn-small --> */}
              </div>
              {/* <!-- /.latest-news-item --> */}
            </div>
            {/* <!-- /.col col-4 --> */}
            <div className="col col-4 col-md-12">
              <div className="latest-news-item">
                <img src={portfolioImg1}  alt="" />
                <div className="latest-news-title">Hipster’s Style in Web</div> 
                {/* <!-- /.latest-news-title --> */}
                <div className="latest-news-signature">
                  <span>John Doe | 7 December</span>
                </div>
                {/* <!-- /.latest-news-signature --> */}
                <p className="default-text">Maecenas  volutpat, diam enim sagittis quam, id porta quam. Sed id dolor consectetur fermentum nibh volutpat, accumsan purus. </p>
                <button className="btn btn-small">Read more </button> 
                {/* <!-- /.btn btn-small --> */}
              </div>
              {/* <!-- /.latest-news-item --> */}
            </div>
            {/* <!-- /.col col-4 --> */}
          </div>
          {/* <!-- /.row --> */}
        </div>
        {/* <!-- /.container --> */}
      </div>
    )
}