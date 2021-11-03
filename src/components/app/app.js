import {useState} from 'react';
import AddForm from '../add-form';
import TodoItem from '../todo-item';
import './app.css';

const App = () => {
  const[todo, setTodo] = useState([]);
  const[currentValue, setСurrentValue] = useState('');

  const onChangeInputValue = (e) => {
    setСurrentValue(e.target.value);
  }

  const addItem = (e) => {
    e.preventDefault();
    if(currentValue.trim() === '') return;
    setTodo((todoPrev) => [...todoPrev, {
      title: currentValue,
      id: Date.now(),
      date: new Date(),
      done: false,
    }]);
    setСurrentValue('');
  }

  const deleteItem = (e) => {
    const id = Number(e.currentTarget.dataset.id);
    setTodo((todoPrev) => 
      todoPrev.filter((item) => 
        item.id !== id
      )
    );
  }

  const toggleItem = (e) => {
    const id = Number(e.currentTarget.dataset.id);
    setTodo((todoPrev) => 
      todoPrev.map((item) => 
        item.id === id ? {...item, done: !item.done} : {...item}
      )
    );
  }

  return (
    <div className="todo">
      <h1 className="title">
        Список задач {todo.length}
      </h1>
      <AddForm addItem={addItem} onChangeInputValue={onChangeInputValue} currentValue={currentValue}/>
      <ul className="todo__list">
        {
          todo.map(
            (item) => { 
              return (
                <TodoItem key={item.id} deleteItem={deleteItem} item={item} toggleItem={toggleItem}/>
              )
            }
          ) 
        }
      </ul>
    </div>
  );
}

export default App;