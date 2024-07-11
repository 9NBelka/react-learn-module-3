import { useState } from "react";
import UserForm from "./components/UserForm/UserForm"
import TextInput from "./components/TextInput/TextInput";
import LangSwitcher from "./components/LangSwitcher/LangSwitcher";

function App() {

  const [user, setUser] = useState(null);
  const [text, setText] = useState("qwerty")
  const [lang, setLang] = useState("en")

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

      <hr />

      <LangSwitcher lang={lang} onSelect={setLang}/>
      <p>Current lang: {lang}</p>
    </>
  )
}

export default App
