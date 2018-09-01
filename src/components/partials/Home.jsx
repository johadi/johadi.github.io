import React from 'react';

export const Home = () => (
  <div className="flexslider js-fullheight">
    <ul className="slides">
      <li className="slider1">
        <div className="overlay"></div>
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
              <div className="slider-text-inner js-fullheight">
                <div className="desc">
                  <h1>Hi! <br/>I'm Jimoh</h1>
                  <h2>A passionate and result-oriented software developer with 5+ years experience in
                    programming</h2>
                  <p>
                    <a download href="/template-assets/files/jimoh_hadi_cv.pdf" className="btn btn-primary btn-learn">
                      Download my CV <i className="icon-download4"></i>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li className="slider2">
        <div className="overlay"></div>
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
              <div className="slider-text-inner">
                <div className="desc navbar-inner">
                  <h1>I am a<br/> Software Developer</h1>
                  <h2>With Bsc. in Computer Science and strong background in programming</h2>
                  <p>
                    <a href="#" data-nav-section="about" className="btn btn-primary btn-learn">
                      See my Portfolio <i className="icon-user"></i>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
);
