import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home">
      <h1>Welcome to PlaceHolder</h1>
      <p>Find your perfect custom keyboard build.</p>
      <Link to="/shop" className="btn">Browse Keyboards</Link>
    </div>
  );
}