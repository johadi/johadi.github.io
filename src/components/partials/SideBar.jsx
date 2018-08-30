import React from 'react';

export const SideBar = () => (
  <aside id="colorlib-aside" role="complementary" className="border js-fullheight">
    <div className="text-center">
      <div className="author-img" style={{backgroundImage: 'url(/template-assets/images/about_johadi.jpg)'}}></div>
      <h1 id="colorlib-logo"><a>Jimoh Hadi</a></h1>
      <small><a className="position text-primary">Software Developer in Nigeria</a></small>
    </div>
    <nav id="colorlib-main-menu" role="navigation" className="navbar">
      <div id="navbar" className="navbar-inner collapse">
        <ul>
          <li className="active"><a href="#" data-nav-section="home">Home</a></li>
          <li><a href="#" data-nav-section="about">About</a></li>
          <li><a href="#" data-nav-section="services">Services</a></li>
          <li><a href="#" data-nav-section="skills">Skills</a></li>
          <li><a href="#" data-nav-section="education">Education</a></li>
          <li><a href="#" data-nav-section="experience">Experience</a></li>
          <li><a href="#" data-nav-section="work">Work</a></li>
           {/* <li><a href="#" data-nav-section="blog">Blog</a></li> */}
          <li><a href="#" data-nav-section="contact">Contact</a></li>
        </ul>
      </div>
    </nav>

    <div className="colorlib-footer">
      <ul>
        <li><a href="https://github.com/johadi" target="_blank" rel="noopener">
          <i className="icon-github text-primary"></i>
        </a></li>
        <li><a href="https://linkedin.com/in/jimoh-hadi" target="_blank" rel="noopener">
          <i className="icon-linkedin2 text-primary"></i>
        </a></li>
        <li><a href="https://facebook.com/jimoh.hadi11" target="_blank" rel="noopener">
          <i className="icon-facebook2 text-primary"></i>
        </a></li>
        <li><a href="https://twitter.com/johadi10" target="_blank" rel="noopener">
          <i className="icon-twitter2 text-primary"></i>
        </a></li>
        <li><a href="https://instagram.com/johadi10" target="_blank" rel="noopener">
          <i className="icon-instagram text-primary"></i>
        </a></li>
      </ul>
    </div>

  </aside>
);
