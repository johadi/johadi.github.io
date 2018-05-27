import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => (
  <div>
    <h3>Welcome to my about page</h3>
    <p>Here you will know a lot about me</p>
    <p>Go back to <Link to="/">home</Link> page</p>
  </div>
);

export default AboutPage;
