import React, { useState } from 'react';

import Home from './Home';
import InputForm from './InputForm';
import GuestbookBox from './GuestbookBox';
import '../css/Section.css';

function Section() {

        const [isButtonClicked, setIsButtonClicked] = useState(false);
        const [inputValue, setInputValue] = useState('');
        const [guestBookTextArr, setGuestBookTextArr] = useState([]);

        function handleClick() {
          setIsButtonClicked(!isButtonClicked);
        }

        function handleSubmit(e) {
          e.preventDefault();
          setInputValue('');

          //setState 안에서 이전 값이 필요하다면 반드시 함수로 넘겨
          //EX_ setCounter((prevCounter) => prevCounter + 1)

          // const a = [1,2,3];
          // const b = [...a, 4]; // -> [1,2,3,4]
          setGuestBookTextArr((prevGuestBookTextArr) => [...prevGuestBookTextArr, inputValue]);
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
            <div className="guestBook-inner-section">
              {guestBookTextArr.map(text => <GuestbookBox text={text} />)}
            </div>
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