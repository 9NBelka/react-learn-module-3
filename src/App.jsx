import { useState } from "react";
import UserForm from "./components/UserForm/UserForm"
import TextInput from "./TextInput/TextInput";

function App() {

  const [user, setUser] = useState(null);
  const [text, setText] = useState("qwerty")

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

      <hr />
     
      <TextInput value={text} onChange={setText}/>
      <p>{text}</p>
    </>
  )
}

export default App
