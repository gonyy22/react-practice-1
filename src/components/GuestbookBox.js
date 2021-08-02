import React from 'react';
import faker from 'faker';


function GuestbookBox(props) {
    return (
      <>
          <div className="guestBook-inner-container">
            <div className="guestBook-box">
                <img src={faker.image.animals()} className="userImg" />
                <span className="userName">박동백</span>
              <p>{props.text}</p>
              </div>
          </div>
      </>
    )
}

export default GuestbookBox;