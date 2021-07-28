import React, { useState } from 'react'
import utils from './utils'

function SearchUser() {

    const [id, setId] = useState(0)
    const [user, setUser] = useState({})
    const [toggleTasks, setToggleTasks] = useState(false)

    const findUser = async () => {

        let userInfo = await utils.getUserFullData(id)
        setUser(userInfo)
    }

    
    return (
        <div>
            ID: <input type="text" onChange={(e) => setId(e.target.value)}/>
            <input type="button" value="Get Data" onClick={findUser} /><br/>

            Name: {user.name}<br/>
            Email: {user.email}<br/>
            <input type="button" value="Tasks" onClick={() => setToggleTasks(!toggleTasks)}/>
            {toggleTasks &&
            <div>
                <ul>
                    {user.todos.map(todo => {
                        return <li key={todo.id}>{todo.title}</li>
                    })}

                </ul>
            </div>
            }

        </div>
    )
}

export default SearchUser
