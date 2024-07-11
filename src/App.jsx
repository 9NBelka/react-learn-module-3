
function App() {

    const handleUsername = (e) => {
      e.preventDefault();
      console.log(e.target.elements.username.value);
      console.log(e.target.elements.role.value);
      e.target.reset();
    }
  return (
    <>
      <form onSubmit={handleUsername}>
        <input type="text" name="username"></input>
        <select name="role">
          <option value="guest">guest</option>
          <option value="admin">admin</option>
          <option value="user">user</option>

        </select>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default App
