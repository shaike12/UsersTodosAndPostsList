import React, { useContext, useState, useEffect } from "react";
import appContext from "../AppContext";
import AppContext from "../AppContext";
import TodoComp from "./Todo";

function TodosComp(props) {
    const [showAddNewTodo, setShowAddNewTodo] = useState(false);
    const [title, setTitle] = useState("");

    // Add A New Todo
    const addTodo = () => {
        props.add({ userId: props.userId, title: title, completed: false });
        setShowAddNewTodo(false);
    };

    // Reverse User Todos And Getting Only The Three First Todos
    let firstThreeTodos = props.todos
        .filter((todo) => todo.userId === props.userId)
        .reverse()
        .splice(0, 3);

    let userTodos = firstThreeTodos.map((todo) => {
        return (
            <TodoComp
                key={todo.id}
                todo={todo}
                markComplete={props.markComplete}
            />
        );
    });

    return (
        <div className="todos-container">
            {showAddNewTodo ? (
                <div className="new_todo_container">
                    <div className="new_todo_header">
                        <h2>New Todo - User {props.userId}</h2>
                    </div>
                    <div className="new_todo">
                        <label htmlFor="title">Title:</label>
                        <input
                            className="title"
                            value={title}
                            type="text"
                            name="title"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <br />
                        <input
                            className="cancel_button"
                            type="button"
                            value="Cancel"
                            onClick={() => setShowAddNewTodo(false)}
                        />
                        <input
                            className="add_button"
                            type="button"
                            value="Add"
                            onClick={addTodo}
                        />
                        <br />
                    </div>
                </div>
            ) : (
                <div>
                    <div className="todos-header">
                        <h2>Todos - User {props.userId}</h2>
                        <input
                            type="button"
                            value="Add"
                            onClick={() => setShowAddNewTodo(true)}
                        />
                    </div>
                    <div className="todos">
                        {firstThreeTodos.length !== 0 ? (
                            userTodos
                        ) : (
                            <div>No Todos</div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default TodosComp;
