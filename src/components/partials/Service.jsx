import React from 'react';

export const Services = () => (
  <div className="colorlib-narrow-content">
    <div className="row">
      <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
        <span className="heading-meta">What I do?</span>
        <h2 className="colorlib-heading">Here are some of my expertise</h2>
      </div>
    </div>
    <div className="row row-pt-md">
      <div className="col-md-4 text-center animate-box">
        <div className="services color-1">
								<span className="icon">
									<i className="icon-globe"></i>
								</span>
          <div className="desc">
            <h3>Web development</h3>
            <p>I develop and contribute to web applications everyday of my life</p>
          </div>
        </div>
      </div>
      <div className="col-md-4 text-center animate-box">
        <div className="services color-2">
								<span className="icon">
									<i className="icon-phone3"></i>
								</span>
          <div className="desc">
            <h3>Mobile Development</h3>
            <p>I'm well immersed in developing mobile applications</p>
          </div>
        </div>
      </div>
      <div className="col-md-4 text-center animate-box">
        <div className="services color-3">
								<span className="icon">
									<i className="icon-database"></i>
								</span>
          <div className="desc">
            <h3>Database Management</h3>
            <p>Managing databases has been an inherent part of my programming career</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)
