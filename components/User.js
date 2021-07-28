import React, { useEffect, useState, useContext } from "react";
import AppContext from "../AppContext";

function UserComp(props) {
    const context = useContext(AppContext);
    const [user, setUser] = useState({});
    const [toggleOtherData, setToggleOtherData] = useState(false);

    useEffect(() => {
        setUser(props.user);
    }, [props.user]);

    const showOpenTodosAndPosts = () => {
        context.setShowTodosAndPosts(true);
        context.setShowAddUser(false);
        context.setUserID(user.id);
    };

    let userTodos = context.todos
        .filter((todo) => todo.userId === user.id)
        .splice(0, 3);

    let userBorderColor = "red";
    if (userTodos.find((todo) => todo.completed === false)) {
        userBorderColor = "red";
    } else {
        userBorderColor = "green";
    }

    return (
        <div
            className="user-container"
            style={{
                border: "2px solid " + userBorderColor,
                background: props.backgroundColor,
            }}
        >
            <div className="user-form">
                <form>
                    <span onClick={() => showOpenTodosAndPosts()}>
                        ID: {user.id}
                    </span>
                    <br />
                    Name:
                    <input
                        type="text"
                        value={user.name}
                        onChange={(e) =>
                            setUser({ ...user, name: e.target.value })
                        }
                    />
                    <br />
                    Email:
                    <input
                        type="text"
                        value={user.email}
                        onChange={(e) =>
                            setUser({ ...user, email: e.target.value })
                        }
                    />
                    <br />
                    <input
                        type="button"
                        value="Other Data"
                        onMouseOver={() => setToggleOtherData(true)}
                        onClick={() => setToggleOtherData(false)}
                    />
                    {toggleOtherData && (
                        <div className="other_user_data">
                            <form>
                                <label htmlFor="street">Street:</label>
                                <input
                                    type="text"
                                    name="street"
                                    value={user.address.street}
                                    onChange={(e) =>
                                        setUser({
                                            ...user,
                                            address: {
                                                ...user.address,
                                                street: e.target.value,
                                            },
                                        })
                                    }
                                />
                                <br />
                                <label htmlFor="city">City:</label>
                                <input
                                    type="text"
                                    name="city"
                                    value={user.address.city}
                                    onChange={(e) =>
                                        setUser({
                                            ...user,
                                            address: {
                                                ...user.address,
                                                city: e.target.value,
                                            },
                                        })
                                    }
                                />
                                <br />
                                <label htmlFor="zip_code">Zip Code:</label>
                                <input
                                    type="text"
                                    name="zip_code"
                                    value={user.address.zipcode}
                                    onChange={(e) =>
                                        setUser({
                                            ...user,
                                            address: {
                                                ...user.address,
                                                zipcode: e.target.value,
                                            },
                                        })
                                    }
                                />
                            </form>
                            <div>
                                <input
                                    type="button"
                                    value="Update"
                                    onClick={() => props.update(user)}
                                />
                                <input
                                    type="button"
                                    value="Delete"
                                    onClick={() => props.delete(user.id)}
                                />
                            </div>
                        </div>
                    )}
                </form>
            </div>
            <div className="todos-container"></div>
        </div>
    );
}

export default UserComp;
