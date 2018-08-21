import React, { Component } from 'react';
import { FormWrapper, FormHeader, FormHeading, FormBody, FormFieldset, FormInput, FormIcon, FormOptionsNote, FormOptions, FormOptionsItem, FormButton, FormLink } from '../../util/Form'

class Signup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isPasswordVisible: false, posts: []
    }

    this.revealPassword = this.revealPassword.bind(this);

    // fetch('http://localhost:3000/login')
    //   .then(response => response.json())
    // .then(posts => (this.setState({ posts })))
  }

  revealPassword() {
    this.setState({
      isPasswordVisible: !this.state.isPasswordVisible
    })
  }

  render() {
    return (
      <FormWrapper>
        <FormHeader>
          <FormHeading>SignUp Form</FormHeading>
        </FormHeader>

        <FormBody>

          <FormFieldset>
            <FormInput
              placeholder='Username'
              type='text'
              required
            />
          </FormFieldset>

          <FormFieldset>
            <FormInput
              placeholder='E-mail'
              type='text'
              required
            />
          </FormFieldset>

          <FormFieldset>
            <FormInput
              placeholder='Password'
              type={!this.state.isPasswordVisible ? 'password' : 'text'}
              required
            />
            <FormIcon eye small
              onClick={this.revealPassword}
              className='fa fa-eye'
            />
          </FormFieldset>

          <FormFieldset>
            <FormOptionsNote>Or sign up with</FormOptionsNote>

            <FormOptions>
              <FormOptionsItem>
                <FormIcon big
                  onClick={this.revealPassword}
                  className='fa fa-google-plus'
                />
              </FormOptionsItem>

              <FormOptionsItem>
                <FormIcon big
                  onClick={this.revealPassword}
                  className='fa fa-twitter'
                />
              </FormOptionsItem>

              <FormOptionsItem>
                <FormIcon big
                  onClick={this.revealPassword}
                  className='fa fa-facebook'
                />
              </FormOptionsItem>
            </FormOptions>
          </FormFieldset>

          <FormFieldset>
            <FormButton type='button'>Sign Up</FormButton>
          </FormFieldset>

          <FormFieldset>
            <FormLink href="/Login">I already have an account</FormLink>
          </FormFieldset>

        </FormBody>

      </FormWrapper>
    )
  }
}

export default Signup;