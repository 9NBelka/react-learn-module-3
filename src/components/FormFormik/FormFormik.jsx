import { Formik, Form} from "formik"
import { useId } from "react"

  

const FormFormik = () => {

  const usernameFieldId = useId();
  const emailFieldId = useId();
  const roleFieldId = useId();
  
  return (
    <Formik>
      <Form>
        <div>
          <label htmlFor={usernameFieldId}>Name:</label>
          <input type="text" name="username" id={usernameFieldId}></input>
        </div>
        <div>
          <label htmlFor={emailFieldId}>Email:</label>
          <input type="email" name="email" id={emailFieldId}></input>
        </div>
        <div>
          <label htmlFor={roleFieldId}>Role:</label>
          <select name="role" id={roleFieldId}>
            <option value="guest">guest</option>
            <option value="admin">admin</option>
            <option value="user">user</option>
          </select>
        </div>
        <button type="submit">submit</button>
      </Form>
    </Formik>
  )
}

export default FormFormik