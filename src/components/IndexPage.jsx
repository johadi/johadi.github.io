import React from 'react';
import {
  Blog, SideBar, Home, About, Services, Skills, Education, Experience, Work, Contact, Overview
} from './partials';

const IndexPage = () => <div id="colorlib-page">
  <div className="container-wrap">
    <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar"
       aria-expanded="false" aria-controls="navbar"><i></i></a>

    <SideBar/>

    <div id="colorlib-main">
      <section id="colorlib-hero" className="js-fullheight" data-section="home">
        <Home/>
      </section>

      <section className="colorlib-about" data-section="about">
        <About/>
      </section>


      <section className="colorlib-services" data-section="services">
        <Services/>
      </section>

      <section className="overview">
        <Overview/>
      </section>

      <section className="colorlib-skills" data-section="skills">
        <Skills/>
      </section>

      <section className="colorlib-education" data-section="education">
        <Education/>
      </section>

      <section className="colorlib-experience" data-section="experience">
        <Experience/>
      </section>

      <section className="colorlib-work" data-section="work">
        <Work/>
      </section>

      {/* <section className="colorlib-blog" data-section="blog"> */}
         {/* <Blog/> */}
      {/* </section> */}
      <section className="colorlib-contact" data-section="contact">
        <Contact/>
      </section>

    </div>
  </div>
</div>;

export default IndexPage;
