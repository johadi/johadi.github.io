import React from 'react';

export const Overview = () => (
  <div id="colorlib-counter" className="colorlib-counters"
       style={{backgroundImage: 'url(/template-assets/images/cover_bg_1.jpg)'}}
       data-stellar-background-ratio="0.5">
    <div className="overlay"></div>
    <div className="colorlib-narrow-content">
      <div className="row">
      </div>
      <div className="row">
        <div className="col-md-4 text-center animate-box">
                <span className="colorlib-counter js-counter" data-from="0" data-to="10" data-speed="5000"
                      data-refresh-interval="50"></span>
          <span className="colorlib-counter-label">Projects</span>
        </div>
        <div className="col-md-4 text-center animate-box">
                <span className="colorlib-counter js-counter" data-from="0" data-to="5" data-speed="5000"
                      data-refresh-interval="50"></span>
          <span className="colorlib-counter-label">Clients</span>
        </div>
        <div className="col-md-4 text-center animate-box">
                <span className="colorlib-counter js-counter" data-from="0" data-to="6" data-speed="5000"
                      data-refresh-interval="50"></span>
          <span className="colorlib-counter-label">Partners</span>
        </div>
      </div>
    </div>
  </div>
);
