import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    handleSubmit =  async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state

        if(password !== confirmPassword) {

            alert('password not match, please try again');
            return;

        }
        // auth.createUserWithEmailAndPassword(email, password)
        //     .then( async userAuth => {

        //         console.log(displayName)

        //         await createUserProfileDocument(userAuth, { displayName })

        //         this.setState({ email: '', password: '', displayName: '', confirmPassword: '' });

        //     })
        //     .catch( error => {

        //         console.log('error creating user', error.message);

        //     });

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );

            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
            } catch (error) {
            console.error(error);
            }

    };

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    };

    render() {
        return (
            <div className='sign-up'>
                <h2 className='title'>Sign up</h2>
                <span>Set up a new account</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='displayName'
                        type='text'
                        value={this.state.displayName}
                        handleChange={this.handleChange}
                        label='your name'
                        required
                    />
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
                    <FormInput
                        name='confirmPassword'
                        type='password'
                        value={this.state.confirmPassword}
                        handleChange={this.handleChange}
                        label='confirm password'
                        required
                    />
                    <div className='btn-group'>
                        <CustomButton type='submit'> Sign up </CustomButton>
                    </div>

                </form>
            </div>
        );
    }
}

export default SignUp;