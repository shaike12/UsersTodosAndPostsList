import React, { useState, useContext, useEffect } from "react";
import UserComp from "./User";

function UsersComp(props) {
    // Filtering Users that Containes User Typing
    let filteredUsers = props.users.filter(
        (user) =>
            user.name.toLowerCase().includes(props.searchInput) ||
            user.email.toLowerCase().includes(props.searchInput)
    );

    let users = filteredUsers.map((user, index) => (
        <UserComp
            key={index}
            user={user}
            setUserId={props.setUserId}
            update={props.update}
            delete={props.delete}
            backgroundColor={user.id === props.userId ? "orange" : "white"}
        />
    ));

    return <div>{users}</div>;
}

export default UsersComp;
