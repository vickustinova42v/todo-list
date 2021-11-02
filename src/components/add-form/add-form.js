import './add-form.css';

const AddForm = ({addItem, onChangeInputValue, currentValue}) => {
    return(
        <form className="todo__form" onSubmit={addItem} type="POST">
            <input className="todo__input" type="text" onChange={onChangeInputValue} value={currentValue}/>
            <button className="todo__button todo__button--submit" type="submit">
                <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="25px" height="25px">    
                    <path d="M25,2C12.317,2,2,12.317,2,25s10.317,23,23,23s23-10.317,23-23S37.683,2,25,2z M37,26H26v11h-2V26H13v-2h11V13h2v11h11V26z"/>
                </svg>
            </button>
        </form>
    )
}

export default AddForm;