import { useState } from 'react'
import './App.css'
import Heading from './assets/components/Heading.jsx'
import Todo from './assets/components/Todo.jsx'
import Lists from './assets/components/Lists.jsx'
function App() {
  const [todoList, setTodoList] = useState([]);
  let List = (inputText)=>{
    if(inputText!==''){
      setTodoList([...todoList,inputText]);
    }
  };

  let deleteTodoItem = (key)=>{
    let newList = [...todoList];
    newList.splice(key,1);
    setTodoList([...newList]);
  };

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
