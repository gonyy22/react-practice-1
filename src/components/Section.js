import React, { useState } from 'react';

import Header from './Header';
import InputForm from './InputForm';
import GuestbookBox from './GuestbookBox';
import '../css/Section.css';
import { Link } from 'react-router-dom';

function Section() {
        const [inputValue, setInputValue] = useState('');
        const [guestBookTextArr, setGuestBookTextArr] = useState([]);
        const [randomImageIndex, setRandomImageIndex] = React.useState(0);

        function handleSubmit(e) {
          e.preventDefault();
          setInputValue('');

          //setState 안에서 이전 값이 필요하다면 반드시 함수로 넘겨야한다.
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
          <Header />
          <section>
            <Link className="backBtn" to="/">뒤로가기</Link>
            <div className="guestBook-inner-section">
              {guestBookTextArr.map(text => <GuestbookBox text={text}/>)}
            </div>
            <InputForm handleSubmit={handleSubmit} handleChange={handleChange} inputValue={inputValue} />
          </section>        
      </>
    )
}

export default Section;