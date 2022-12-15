import React from "react";

export const UsersForm = () => {

    const [users, setUsers] = React.useState([]);

    const [name, setName] = React.useState("");
    const [age, setAge] = React.useState(0);

    const addUsers = () => {
        let user = { name, age };
        setUsers([...users, user]);
        setName("");
        setAge(0);
    }

   
    return <div>
        {/* Name */}
        <label>Name:</label>
        <input type={""} value={name} onChange={(e) => setName(e.target.value)} />

        <br />

        {/* Age */}
        <label>Age:</label>
        <input type={"number"} value={age} onChange={(e) => setAge(e.target.value)} />
        <br />

        {/* Add Button */}
        <button onClick={addUsers}>Add</button>

        <h1>User Table</h1>
        <table>
            <thead>
                <tr>
                    <td>Sl.No</td>
                    <td>Name</td>
                    <td>age</td>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => {
                    return <tr key={index + 1}>
                        <td>{index + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
}