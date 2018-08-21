import React, { Component } from 'react';
import { FormWrapper, FormHeader, FormHeading, FormBody, FormFieldset, FormInput, FormButton, FormLink } from '../../util/Form'

class Login extends Component {

  render() {
    return (
      <FormWrapper>
        <FormHeader>
          <FormHeading>Forget Password Form</FormHeading>
        </FormHeader>

        <FormBody>

          <FormFieldset>
            <FormInput
              placeholder='Enter Email Address'
              type='text'
              required
            />
          </FormFieldset>

          <FormFieldset>
            <FormButton type='button'>Recover Password</FormButton>
          </FormFieldset>

          <FormFieldset>
            <FormLink href="/Login">Go to Login</FormLink>
          </FormFieldset>

        </FormBody>

      </FormWrapper>
    )
  }
}

export default Login;