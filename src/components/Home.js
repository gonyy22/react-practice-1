import React from 'react';

function Home(props) {
    return (
      <>
      <div className="inner-section">
        <h1>Welcome!</h1>
        <button className="participate-btn" onClick={props.handleClick}>대화에 참여하기</button>
      </div>
      </>
    )
}

export default Home;