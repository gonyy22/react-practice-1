import React from 'react';
import Modal from 'react-modal';

import Header from './Header';
import '../css/Home.css';
import { Link } from 'react-router-dom';
import imgSrc from '../profileImages';

function Home() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [randomImageIndex, setRandomImageIndex] = React.useState(0);
  
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  
  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   ReactModal__Overlay.style.color = '#000';
  // }

  function randomImg(){
    let newRandomImageNum = Math.floor((imgSrc.length) * Math.random());
    if(newRandomImageNum === randomImageIndex){
      newRandomImageNum = (newRandomImageNum + 1) % imgSrc.length;
    }
    setRandomImageIndex(newRandomImageNum);
  }

    return (
      <>
      <Header />
      <div className="inner-section">
        <h1>Welcome!</h1>
        <Link to="/Section">
          <button className="participate-btn">대화에 참여하기</button>
        </Link>
        <button onClick={openModal}>open</button>
        <Modal className="modal-wrap"
          isOpen={modalIsOpen}
          // onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={{
            overlay: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.35)'
            },
            content: {
              width: '300px',
              height:'500px',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
              border: '1px solid #ccc',
              background: '#fff',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '4px',
              outline: 'none',
              padding: '20px'
            }
          }}
      >
        <p>프로필을 생성하세요</p>
        <img src={imgSrc[randomImageIndex]} id="userImg" />
        <button className="randomImg" onClick={randomImg}>랜덤 이미지 고르기</button>
        <input placeholder="닉네임을 입력하세요"/>
        </Modal>
      {/* <button onClick={closeModal}>close</button> */}
      </div>
      </>
    )
}

export default Home;