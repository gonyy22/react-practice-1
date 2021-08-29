import React from 'react';

import Header from './Header';
import '../css/Home.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
      <>
      <Header />
      <div className="inner-section">
        <h1>Welcome!</h1>
        <Link to='./Section'>
          <button className="participate-btn">메모 쓰기</button>
        </Link>
      </div>
      </>
    )
}

export default Home;