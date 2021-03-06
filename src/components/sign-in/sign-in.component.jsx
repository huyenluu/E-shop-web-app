import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle, signInWithFacebook, auth } from '../../firebase/firebase.utils'

import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const {email, password} = this.state;

    try {

      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });

    } catch(error) {

      console.log(error);

    };
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2 className='title'>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <div className='btn-group'>
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton socialLogin = 'google' onClick={signInWithGoogle}> Sign in with Google</CustomButton>
            <CustomButton socialLogin = 'facebook' onClick={signInWithFacebook}> Sign in with FaceBook</CustomButton>
          </div>

        </form>
      </div>
    );
  }
}

export default SignIn;