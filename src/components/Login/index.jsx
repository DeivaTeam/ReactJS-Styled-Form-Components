import React, { Component } from 'react';
import { FormWrapper, FormHeader, FormHeading, FormBody, FormFieldset, FormInput, FormButton, FormLink } from '../../util/Form'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }


  render() {
    return (
      <FormWrapper>
        <FormHeader>
          <FormHeading>Login Form</FormHeading>
        </FormHeader>

        <FormBody>

          <FormFieldset>
            <FormInput
              placeholder='Username/Email'
              type='text'
              required
            />
          </FormFieldset>

          <FormFieldset>
            <FormInput
              placeholder='Password'
              type='password'
              required
            />
          </FormFieldset>

          <FormFieldset>
            <FormButton type='button'>Login</FormButton>
          </FormFieldset>

          <FormFieldset>
            <FormLink href="/Signup">Don't have account? Click here to Signup!</FormLink>
          </FormFieldset>

          <FormFieldset>
            <FormLink href="/ForgetPassword">Forget Password!</FormLink>
          </FormFieldset>
        </FormBody>

      </FormWrapper>
    )
  }
}

export default Login;