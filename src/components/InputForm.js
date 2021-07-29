import React from 'react';

function InputForm(props) {
    return (
      <>
      <form onSubmit={props.handleSubmit}>
        <input type="text" onChange={props.handleChange} value={props.inputValue} placeholder="텍스트를 입력하세요!" className="textInput" />
        <button type="submit" value="send" className="textSubmitBtn">send</button>
        {/* <button type="submit" onClick={onSend} value="send" className="textSubmitBtn">send</button> */}
      </form>
      </>
    )
}

export default InputForm;