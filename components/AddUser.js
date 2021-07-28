import { useState } from "react";

function AddUserComp(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [zipCode, setZipCode] = useState("");

    const addUser = () => {
        props.addUser({
            name: name,
            email: email,
            address: { street: street, city: city, zipcode: zipCode },
        });
    };

    return (
        <div>
            <h2>Add New User</h2>
            <div className="add_new_user">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <br />
                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <label htmlFor="street">Street:</label>
                <input
                    type="text"
                    name="street"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                />
                <br />
                <label htmlFor="city">City:</label>
                <input
                    type="text"
                    name="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <br />
                <label htmlFor="zip_code">Zip Code:</label>
                <input
                    type="text"
                    name="zip_code"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                />
                <br />
                <br />
                <button onClick={() => props.showAddUser(false)}>Cancel</button>
                <button onClick={() => addUser()}>Add</button>
            </div>
        </div>
    );
}

export default AddUserComp;
