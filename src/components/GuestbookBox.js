import React from 'react';
import faker from 'faker';


function GuestbookBox(props) {
    return (
      <>
        <div className="inner-section">
          <div className="guestBook-container">
            <div className="guestBook-box">
              <div className="userInfoWrap">
                <img src={faker.image.animals()} className="userImg" />
                <span className="userName">박동백</span>
              </div>
              <p>{props.guestBook}</p>
              </div>
              {/* <div className="guestBook-box">
              <div className="userInfoWrap">
                <img src={faker.image.animals()} className="userImg" />
                <span className="userName">박동백</span>
              </div>
              <p>안녕! 내 이름은 박동백이야!</p>
              </div>  */}
          </div>
        </div>
      </>
    )
}

export default GuestbookBox;