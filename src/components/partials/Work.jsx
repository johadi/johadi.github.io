import React from 'react';

export const Work = () => (
  <div className="colorlib-narrow-content">
    <div className="row">
      <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
        <span className="heading-meta">My Work</span>
        <h2 className="colorlib-heading animate-box">Recent Work</h2>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
        <div className="project" style={{backgroundImage: 'url(/template-assets/images/img-1.jpg)'}}>
          <div className="desc">
            <div className="con">
              <h3><a href="https://jimoh-postit.herokuapp.com" target="_blank" rel="noopener">Postit</a></h3>
              <a href="https://jimoh-postit.herokuapp.com" target="_blank" rel="noopener"><span>View Website</span></a>
              <a href="https://github.com/johadi/Postit" target="_blank" rel="noopener"><span>View Github repo</span></a>
              <p className="icon">
                Application that allows users send notifications to one another via groups.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
        <div className="project" style={{backgroundImage: 'url(/template-assets/images/img-2.jpg)'}}>
          <div className="desc">
            <div className="con">
              <h3><a href="https://you-post.herokuapp.com" target="_blank" rel="noopener">YouPost</a></h3>
              <a href="https://you-post.herokuapp.com" target="_blank" rel="noopener"><span>View Website</span></a>
              <a href="https://github.com/johadi/you-post" target="_blank" rel="noopener"><span>View Github repo</span></a>
              <p className="icon">
                Application that allows users to read and send messages to groups they joined.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 animate-box" data-animate-effect="fadeInTop">
        <div className="project" style={{backgroundImage: 'url(/template-assets/images/img-3.jpg)'}}>
          <div className="desc">
            <div className="con">
              <h3><a href="https://jim-notebook.herokuapp.com" target="_blank" rel="noopener">Notebook</a></h3>
              <a href="https://jim-notebook.herokuapp.com" target="_blank" rel="noopener"><span>View Website</span></a>
              <a href="https://github.com/johadi/notebook-web" target="_blank" rel="noopener"><span>View Github repo</span></a>
              <p className="icon">
                Application that allows users jot down notes and access them anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 animate-box" data-animate-effect="fadeInBottom">
        <div className="project" style={{backgroundImage: 'url(/template-assets/images/img-4.jpg)'}}>
          <div className="desc">
            <div className="con">
              <h3><a href="https://twovotes.herokuapp.com" target="_blank" rel="noopener">TwoVotes</a></h3>
              <a href="https://twovotes.herokuapp.com" target="_blank" rel="noopener"><span>View Website</span></a>
              <a href="https://github.com/johadi/twovotes" target="_blank" rel="noopener"><span>View Github repo</span></a>
              <p className="icon">
                Application that allows users vote between two pictures seen on their timelines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 animate-box">
        <p>
          <a
            target="_blank"
            rel="noopener"
            href="https://github.com/johadi?tab=repositories"
            className="btn btn-primary btn-lg btn-load-more">
            See more projects on my Github <i className="icon-plus"></i>
          </a>
        </p>
      </div>
    </div>
  </div>
);
