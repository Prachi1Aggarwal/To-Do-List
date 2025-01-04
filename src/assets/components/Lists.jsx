import React, { useState } from "react";

export default function Lists(props) {
  const [checkEditing, setCheckEditing] = useState(false);
  const [editText, setEditText] = useState(props.item);
  const makeEdit = () => {
    if (editText.trim() !== "") {
      props.updateItem(props.index, editText);
      setCheckEditing(false);
    }
  };
  return (
    <li className="lstItem">
      {checkEditing ? (
        <>
        <input type="text"
        value={editText}
        onChange={(e)=>
            setEditText(e.target.value)
            
        } className='edit-field'/>
       <div className="functionbtn">
       <button className="Update" onClick={makeEdit}>
            Save
        </button>
        <div className="gap"></div>
        <button className="Exit" onClick={()=>setCheckEditing(false)}>
            Exit
        </button>
       </div>
        </>
      ) : (
        <div className="listItemwise">
          {props.item}

          <div className="functionality">
          <span className="edit" onClick={()=> setCheckEditing(true)}>
            <i className="fa-solid fa-pen-to-square"></i>
          </span>

          <span className="trash">
            <i
              className="fa-solid fa-trash"
              onClick={(e) => {
                props.deleteItem(props.index);
              }}
            ></i>
          </span>
          </div>
        </div>
      )}
    </li>
  );
}
