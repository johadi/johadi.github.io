import React from 'react';
import { Link } from 'react-router-dom';

const IndexPage = () => (
  <div>
    <h2>Welcome to my home page</h2>
    <p>Visit the <Link to="/about">about</Link> page to know more about me</p>
  </div>
);

export default IndexPage;
