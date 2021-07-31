import React from 'react';
import faker from 'faker';

import '../css/Header.css';

function Header() {
    return (
        <>
        <header>
          <span className="logo-title">Pet Conversation</span>
          <div className="userInfo">
            <img src={faker.image.animals()} className="userImg" />
            <span className="userName">Dongbaek</span>
          </div>
        </header>
        </>
    )
}

export default Header;