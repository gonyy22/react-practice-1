import React, { useState } from 'react';

import Home from './Home';
import InputForm from './InputForm';
import GuestbookBox from './GuestbookBox';
import '../css/Section.css';

function Section() {

        const [isButtonClicked, setIsButtonClicked] = useState(false);
        const [inputValue, setInputValue] = useState('');
        const [guestBook, setguestBook] = useState('');

        function handleClick() {
          setIsButtonClicked(!isButtonClicked);
        }

        function handleSubmit(e) {
          e.preventDefault();
          setguestBook(inputValue);
          setInputValue('');

          React.createElement('p', {}, guestBook);
        }

        function handleChange(e) {
          setInputValue(e.target.value);
        }
    return (
        <>
<section>
      {
        isButtonClicked 
        ? (
          <>
            <button className="backBtn" onClick={handleClick}>뒤로가기</button>
              <GuestbookBox guestBook={guestBook}/>
              <InputForm handleSubmit={handleSubmit} handleChange={handleChange} inputValue={inputValue} />
            </>
        )
        :  (
          <Home handleClick={handleClick} />
        )
      }
    </section>        
    </>
    )
}

export default Section;