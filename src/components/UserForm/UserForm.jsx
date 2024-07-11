const UserForm = ({onSave}) =>{

    const handleSubmit = (e) => {
      e.preventDefault();

      onSave({
        username:e.target.elements.username.value,
        role: e.target.elements.role.value
      });

      e.target.reset();
    }

  return (
    <>
      <form onSubmit={handleSubmit}>
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

export default UserForm