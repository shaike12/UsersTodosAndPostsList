function TodoComp(props) {

    let style = {}
    if (!props.todo.completed){
        style = {border: "2px solid red"}
    }

    return (
        <div className="todo-item" style={style}>
            <label htmlFor="Title">Title:</label>
            <p>{props.todo.title}</p>
            <label htmlFor="completed">Completed:</label>
            <p>{props.todo.completed.toString()}</p>
            {!props.todo.completed && (
                <input
                    type="button"
                    value="Mark Completed"
                    onClick={() => props.markComplete(props.todo.id)}
                />
            )}
        </div>
    );
}

export default TodoComp;
