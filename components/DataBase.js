import React, { useEffect, useState } from "react";
import axios from "axios";
import UsersComp from "./Users";
import AppContext from "../AppContext";
import SearchComp from "./Search";
import TodosComp from "./Todos";
import PostsComp from "./Posts";
import AddUserComp from "./AddUser";

function DataBaseComp() {
    const [data, setData] = useState({ users: [], posts: [], todos: [] });
    const [searchInput, setSearchInput] = useState("");
    const [showTodosAndPosts, setShowTodosAndPosts] = useState(false);
    const [showAddUser, setShowAddUser] = useState(false);
    const [userID, setUserID] = useState(0);

    // Initilize Data - Users , Posts, Todos
    useEffect(() => {
        const fetchData = async () => {
            let usersResp = await axios.get(
                "https://jsonplaceholder.typicode.com/users"
            );
            let postsResp = await axios.get(
                "https://jsonplaceholder.typicode.com/posts"
            );
            let todosResp = await axios.get(
                "https://jsonplaceholder.typicode.com/todos"
            );

            setData({
                users: usersResp.data,
                posts: postsResp.data,
                todos: todosResp.data,
            });
        };
        fetchData();
    }, []);

    //Update a User
    const updateUser = (user) => {
        console.log("User (" + user.id + ") Updated");
        let users = data.users.map((x) => {
            if (user.id === x.id) {
                return user;
            }
            return x;
        });
        setData({ ...data, users: users });
    };

    //Delete a User
    const deleteUser = (id) => {
        console.log("User (" + id + ") Deleted");
        let users = data.users.filter((user) => user.id !== id);
        setData({ ...data, users: users });
    };

    // Add Todo
    const addTodo = (todo) => {
        console.log("Todo Added");
        let newTodos = data.todos;
        todo.id = data.todos[data.todos.length - 1].id + 1;
        newTodos.push(todo);
        setData({ ...data, todos: newTodos });
    };

    //Add Post
    const addPost = (post) => {
        console.log("Post Added");
        let newPosts = data.posts;
        newPosts.push(post);

        setData({ ...data, posts: newPosts });
    };

    // Add User
    const addUser = (user) => {
        console.log("User Added");
        let newUsers = data.users;
        user.id = data.users[data.users.length - 1].id + 1;
        newUsers.push(user);
        setShowAddUser(false);
        setData({ ...data, users: newUsers });
    };

    // Mark as Complete
    const markComplete = (todoId) => {
        let todos = data.todos.map((todo) => {
            if (todo.id === todoId) {
                todo.completed = true;
                return todo;
            }
            return todo;
        });
        setData({ ...data, todos });
    };

    return (
        <AppContext.Provider
            value={{ ...data, setUserID, setShowTodosAndPosts, setShowAddUser }}
        >
            <div className="app-container">
                <div className="users-container">
                    <SearchComp
                        search={setSearchInput}
                        show={setShowTodosAndPosts}
                        showAddUser={setShowAddUser}
                    />
                    <UsersComp
                        users={data.users}
                        update={updateUser}
                        delete={deleteUser}
                        userId={showAddUser ? 0 : userID}
                        searchInput={searchInput}
                    />
                </div>
                {showTodosAndPosts && (
                    <div className="posts_and_todos">
                        <TodosComp
                            userId={userID}
                            add={addTodo}
                            todos={data.todos}
                            markComplete={markComplete}
                        />
                        <PostsComp
                            userId={userID}
                            add={addPost}
                            posts={data.posts}
                        />
                    </div>
                )}

                {showAddUser && (
                    <AddUserComp
                        showAddUser={setShowAddUser}
                        addUser={addUser}
                    />
                )}
            </div>
        </AppContext.Provider>
    );
}

export default DataBaseComp;
