import { useState } from 'react'
import './App.css'
import Heading from './assets/components/Heading.jsx'
import Todo from './assets/components/Todo.jsx'
import Lists from './assets/components/Lists.jsx'
function App() {

  // Making list states
  const [todoList, setTodoList] = useState([]);
  // creating list using current input text
  let List = (inputText)=>{
    if(inputText!==''){
      setTodoList([...todoList,inputText]);
    }
  };

  //deleting item from the list
  let deleteTodoItem = (key)=>{
    let newList = [...todoList];
    newList.splice(key,1);
    setTodoList([...newList]);
  };

  //updating list item of index 
  let updateListItem = (index,text)=>{
    const updatedList = [...todoList];
    updatedList[index] = text;
    setTodoList(updatedList);
  };
  return (
    <div className='container'>
      <Heading />
      <br />
      <hr />
      <div className="list-container">
      <Todo List = {List} />
      <div className="todoList">
        {/* list item by list item mapping traversal */}
      {
        todoList.map((todoitem,i)=>{
          return(
            <Lists key={i} item={todoitem} index={i} deleteItem={deleteTodoItem} updateItem = {updateListItem}/>
          )
        })
      }
      </div>
      </div>
    </div>
  )
}

export default App
