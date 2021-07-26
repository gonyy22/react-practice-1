import React from 'react';
import faker from 'faker';

function Header() {
    return (
        <>
        <header>
          <span class="logo-title">Pet Conversation</span>
          <div class="userInfo">
            <img src={faker.image.animals()} class="userImg" />
            <span class="userName">Dongbaek</span>
          </div>
        </header>
        </>
    )
}

export default Header;