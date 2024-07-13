import { Formik, Form, Field, ErrorMessage} from "formik"
import { useId } from "react"
import * as Yup from 'yup'

  const UserSchema = Yup.object().shape({
    username: Yup.string().min(3, 'Too short!').max(20, 'Too Long!').required('This is required you dummy!'),
    email: Yup.string().email('Must be in email format').required('This is required you dummy!'),
    role: Yup.string().oneOf(["guest","user", "admin"]).required('This is required you dummy!')
  })

const FormFormik = ({onDoHandleSubmit}) => {

  const usernameFieldId = useId();
  const emailFieldId = useId();
  const roleFieldId = useId();

  return (
    <Formik initialValues={{
      username: "",
      email: "",
      role: "user"
    }} onSubmit={(value, actions) => {
      // console.log(value);
      onDoHandleSubmit(value);
      actions.resetForm();
      }}
      validationSchema={UserSchema}>
      <Form>
        <div>
          <label htmlFor={usernameFieldId}>Name:</label>
          <Field name="username" id={usernameFieldId} />
          <ErrorMessage name="username" component="span"/>
        </div>
        <div>
          <label htmlFor={emailFieldId}>Email:</label>
          <Field type="email" name="email" id={emailFieldId} />
          <ErrorMessage name="email" component="span"/>
        </div>
        {/* <Field as="textarea"/> */}
        <div>
          <label htmlFor={roleFieldId}>Role:</label>
          <Field as="select" name="role" id={roleFieldId}>
            <option value="guest">guest</option>
            <option value="admin">admin</option>
            <option value="user">user</option>
          </Field>
          <ErrorMessage name="role" component="span"/>
        </div>
        <button type="submit">submit</button>
      </Form>
    </Formik>
  )
}

export default FormFormik