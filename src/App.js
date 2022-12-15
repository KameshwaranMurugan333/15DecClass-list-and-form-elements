import './App.css';
import { UsersForm } from './Form';

function App() {
  let usersList = [
    { id: 1, name: "John", age: "19" },
    { id: 2, name: "Bob", age: "21" },
    { id: 3, name: "Sathish", age: "26", class: ["React", "HTML", "JS"] }
  ];

  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], //rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], //columns
  ];

  return (
    <div>
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
          {usersList.map((user, index) => {
            return <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          })}
        </tbody>
      </table>

      <h1>Numbers Table</h1>
      <table>
        <thead>
          <tr>
            <td>0</td>
            <td>1</td>
            <td>2</td>
          </tr>
        </thead>
        <tbody>
          {lines.map(line => {
            return <TableRow key={line}>
              {line.map((x) => {
                return <TableData key={x}>{x}</TableData>
              })}
            </TableRow>
          })}
        </tbody>
      </table>

      <UsersForm />
    </div>
  );
}

const TableRow = (props) => {
  return <tr>{props.children}</tr>
}

const TableData = (props) => {
  return <td>{props.children}</td>
}

export default App;
