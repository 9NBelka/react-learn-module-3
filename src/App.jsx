import { useState } from "react";
import UserForm from "./components/UserForm/UserForm"

function App() {

  const [user, setUser] = useState(null);

  const saveUsername = (user) => {
      console.log(user);
      setUser(user);
  }
    
  return (
    <>
      {user && 
      <div>
        <p>{user.username}</p>
        <p>{user.role}</p>
      </div>
      }
      <UserForm onSave={saveUsername}/>
      <UserForm onSave={saveUsername}/>
    </>
  )
}

export default App
