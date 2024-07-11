
function App() {

    const handleUsername = (e) => {
      e.preventDefault();
      console.log(e.target.elements.username.value)
    }
  return (
    <>
      <form onSubmit={handleUsername}>
        <input type="text" name="username"></input>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default App
