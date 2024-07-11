import { IoShirt } from "react-icons/io5";
import { useState } from "react"

const initialValues = {
    size: "medium",
    color: "blue"
}

const FormClothes = () => {
  const [state, setState] = useState(initialValues);

   const handleSubmit = (e) => {
    e.preventDefault();

    console.log(state)
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
      <IoShirt size="100" color={state.color} />
    <select name="size" id="" value={state.size} onChange={handleChange}>
      <option value="small">small</option>
      <option value="medium">medium</option>
      <option value="large">large</option>
    </select>

    <select name="color" id="" value={state.color} onChange={handleChange}>
      <option value="red">red</option>
      <option value="blue">blue</option>
      <option value="green">green</option>
    </select>

    <button type="submit">Submit</button>
    </form>
  )
}

export default FormClothes