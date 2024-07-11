import { useId } from "react";

const UserForm = ({onSave}) =>{

    const usernameFieldId = useId();
    const roleFieldId = useId();

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
        <div>
          <label htmlFor={usernameFieldId}>Username:</label>
          <input type="text" name="username" id={usernameFieldId}></input>

        </div>
        <div>
          <label htmlFor={roleFieldId}>Role:</label>
          <select name="role" id={roleFieldId}>
            <option value="guest">guest</option>
            <option value="admin">admin</option>
            <option value="user">user</option>
          </select>
        </div>
        
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default UserForm