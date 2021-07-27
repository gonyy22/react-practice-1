import React, { useState } from 'react';
import faker from 'faker';

function Section() {

        const [isButtonClicked, setIsButtonClicked] = useState(false);
        const [isSubmitMsg, setIsSubmitMsg] = useState('');

        function handleClick() {
        setIsButtonClicked(!isButtonClicked);
        }

        function submitMsg(){
          alert('sendmsg:' + isSubmitMsg);
        }

        function onChange(e){
          setIsSubmitMsg(e.target.value);
        }

        function onSend(){
          setIsSubmitMsg(isSubmitMsg);
        }
    return (
        <>
<section>
      {
        isButtonClicked 
        ? (
          <>
            <button className="backBtn" onClick={handleClick}>뒤로가기</button>
            <div className="inner-section">
              <div className="dialog-container">
                <div className="dialog-box">
                  <div className="userInfoWrap">
                    <img src={faker.image.animals()} className="userImg" />
                    <span className="userName">박동백</span>
                  </div>
                  <p>안녕! 내 이름은 박동백이야!</p>
                 </div>
                 <div className="dialog-box">
                  <div className="userInfoWrap">
                    <img src={faker.image.animals()} className="userImg" />
                    <span className="userName">박동백</span>
                  </div>
                  <p>안녕! 내 이름은 박동백이야!</p>
                 </div>
                 <form onSubmit={submitMsg}>
                   <input type="text" onChange={onChange} value={isSubmitMsg} placeholder="텍스트를 입력하세요!" className="textInput" />
                   <button type="submit" onClick={onSend} value="send" className="textSubmitBtn">send</button>
                 </form>
              </div>
            </div>
            </>
        )
        :  (
          <>
          <div className="inner-section">
            <h1>Welcome!</h1>
            <button className="participate-btn" onClick={handleClick}>대화에 참여하기</button>
            </div>
          </>
        )
      }
    </section>        
    </>
    )
}

export default Section;