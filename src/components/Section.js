import React, { useState } from 'react';

import Home from './Home';
import InputForm from './InputForm';
import DialogBox from './DialogBox';

function Section() {

        const [isButtonClicked, setIsButtonClicked] = useState(false);
        const [inputValue, setInputValue] = useState('');
        const [dialog, setDialog] = useState('');

        function handleClick() {
          setIsButtonClicked(!isButtonClicked);
        }

        function handleSubmit(e) {
          e.preventDefault();
          setDialog(inputValue);
          setInputValue('');
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
              <DialogBox dialog={dialog}/>
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