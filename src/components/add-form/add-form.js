const AddForm = ({addItem, onChangeInputValue, currentValue}) => {
    return(
        <form onSubmit={addItem} type="POST">
            <input type="text" onChange={onChangeInputValue} value={currentValue}/>
            <button type="submit">Добавить</button>
        </form>
    )
}

export default AddForm;