import React, { useState } from 'react';
import faker from 'faker';

function Section() {

        const [isButtonClicked, setIsButtonClicked] = useState(false);

        function handleClick() {
        setIsButtonClicked(true);
        }

    return (
        <>
<section>
      {
        isButtonClicked 
        ? (
          <>
            <button class="backBtn">뒤로가기</button>
            <div class="inner-section">
              <div class="dialog-container">
                <div class="dialog-box">
                  <div class="userInfoWrap">
                    <img src={faker.image.animals()} class="userImg" />
                    <span class="userName">박동백</span>
                  </div>
                  <p>안녕! 내 이름은 박동백이야!</p>
                 </div>
                 <div class="dialog-box">
                  <div class="userInfoWrap">
                    <img src={faker.image.animals()} class="userImg" />
                    <span class="userName">박동백</span>
                  </div>
                  <p>안녕! 내 이름은 박동백이야!</p>
                 </div>
                <input type="text" placeholder="텍스트를 입력하세요!" class="textInput"></input>
              </div>
            </div>
            </>
        )
        :  (
          <>
          <div class="inner-section">
            <h1>Welcome!</h1>
            <button class="participate-btn" onClick={handleClick}>대화에 참여하기</button>
            </div>
          </>
        )
      }
    </section>        
    </>
    )
}

export default Section;