import { useState } from "react"

const initialValues = {
    login: "a",
    email: "b",
    tech: "html"
}

const Formd = () => {
  const [state, setState] = useState(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();

    setState(initialValues);
  }

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
      <input type="text" name="login" value={state.login} onChange={handleChange}></input>
      <input type="email" name="email" value={state.email} onChange={handleChange}></input>
    

    <select name="tech" id="" value={state.tech} onChange={handleChange}>
      <option value="html">HTML</option>
      <option value="js">JAVASCRIPT</option>
      <option value="react">REACT</option>
    </select>

    <button type="submit">Submit</button>
    </form>
  )
}

export default Formd