import {useState} from "react"
import Form from './form/Form';
import Users from './usersList/Users';

import './App.css'

function App() {
  const [usersList, setUsersList] = useState([]);
    
  const addUser = ((user) =>{
      setUsersList((currUsers) => {
          return [...currUsers,{userName:user.userName, age:user.age}];
      })
  })

  return (
    <div>
      <Form addUser={addUser}/> 
      <Users users={usersList} />
    </div>
  )
}

export default App
