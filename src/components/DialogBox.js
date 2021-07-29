import React from 'react';
import faker from 'faker';


function DialogBox(props) {
    return (
      <>
        <div className="inner-section">
          <div className="dialog-container">
            <div className="dialog-box">
              <div className="userInfoWrap">
                <img src={faker.image.animals()} className="userImg" />
                <span className="userName">박동백</span>
              </div>
              <p>{props.dialog}</p>
              </div>
              <div className="dialog-box">
              <div className="userInfoWrap">
                <img src={faker.image.animals()} className="userImg" />
                <span className="userName">박동백</span>
              </div>
              <p>안녕! 내 이름은 박동백이야!</p>
              </div> 
          </div>
        </div>
      </>
    )
}

export default DialogBox;