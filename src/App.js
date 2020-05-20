import React from 'react';
import './App.css';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';

function App({
    errors,
    touched
}) {
  return (
      <Form className="sign-in-form">
          <h2>sign in to your account</h2>
          <Field
              className = {errors.email ? 'hasError' : null}
              type="email"
              placeholder="Email"
              name="email"

          />
          {
              touched.email && errors.email ?
                  (<div className="err">{errors.email}</div>)
                  : null
          }
          <Field
              className = {errors.password ? 'hasError' : null}
              type="password"
              placeholder="Password"
              name="password"

          />
          {
              touched.password && errors.password ?
                  (<div className="err">{errors.password}</div>)
                  : null
          }
          <div className="checkbox-container">
              <label>
                  <Field className="checkbox" type="checkbox" name="checkbox"/>
              </label>
            <span>Keep me signed in</span>
          </div>
          {
              touched.checkbox && errors.checkbox ?
                  (<div className="err">{errors.checkbox}</div>)
                  : null
          }

          <button type="submit">sign in</button>

          <a href="/#">Forgot your password?</a>
      </Form>
  );
}

const FormikApp = withFormik({
    mapPropsToValues(){
      return{
          email: '',
          password:'',
          checkbox: ''
      }
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().email('invalid email').required('email is required'),
        password: Yup.string().min(8, 'password must be at least 8 characters').required('password is required'),
        checkbox: Yup.bool().required('checkbox is required')
    }),
    handleSubmit(values){
        console.log(values);
    }
})(App);

export default FormikApp;
