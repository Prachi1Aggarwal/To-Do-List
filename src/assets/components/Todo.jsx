import React,{useState} from "react";

export default function Todo(props) {
  // Changing state for input text from user
  const [inputText, setInputText] = useState('');
  const enterPress =  (e)=>{
    if(e.keyCode===13){
      props.List(inputText);
      setInputText("");
    }
  }
  return (
    <div className="list-adding">
      {/* value = {inputText} to set input field value(mainly for emptying it after adding task) */}
      <input
        className="input-field"
        type="text"
        value={inputText}
        placeholder="Enter Your Task Here!!"
        onChange={e=>{
            setInputText(e.target.value)
        }}
        onKeyDown={enterPress}
      />
      <button className="addBtn" onClick={
        ()=>{
          props.List(inputText)
          setInputText("")
        }
      }>Add</button>


    </div>
  );
}
