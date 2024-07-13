import { Formik, Form, Field} from "formik"
import { useId } from "react"

  

const FormFormik = ({onDoHandleSubmit}) => {

  const usernameFieldId = useId();
  const emailFieldId = useId();
  const roleFieldId = useId();

  return (
    <Formik initialValues={{
      username: "",
      email: ""
    }} onSubmit={(value, actions) => {
      // console.log(value);
      onDoHandleSubmit(value);
      actions.resetForm();
      }}>
      <Form>
        <div>
          <label htmlFor={usernameFieldId}>Name:</label>
          <Field name="username" id={usernameFieldId} />
        </div>
        <div>
          <label htmlFor={emailFieldId}>Email:</label>
          <Field type="email" name="email" id={emailFieldId} />
        </div>
        {/* <div>
          <label htmlFor={roleFieldId}>Role:</label>
          <select name="role" id={roleFieldId}>
            <option value="guest">guest</option>
            <option value="admin">admin</option>
            <option value="user">user</option>
          </select>
        </div> */}
        <button type="submit">submit</button>
      </Form>
    </Formik>
  )
}

export default FormFormik