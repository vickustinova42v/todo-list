import './todo-item.css';

const TodoItem = ({deleteItem, item, toggleItem}) => {
    return(
        <li className="item">
            <button data-id={item.id} type="button" onClick={toggleItem} className={item.done === true ? "item--done" : null}>
                <span>{item.date.toLocaleDateString()} - {item.date.toLocaleTimeString()}</span>
                <span>{item.title}</span>
            </button>
            <button data-id={item.id} type="button" onClick={deleteItem}>&times;</button>
        </li>
    )
}

export default TodoItem;