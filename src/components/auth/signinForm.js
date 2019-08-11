import React, { Component } from 'react';
import { FormInput, FormButton } from './formFields';

import { reduxForm, Field } from 'redux-form';
import Details from '../details';
import history from '../../history';

class SignInForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;
        const links = [
            {
            _id: 0,
            title: 'Not registered? Create account here',
            onClick: () => history.push('/signup')

            },
            {
                _id: 1,
                title: 'Forgot account email?',
                onClick: () => console.log('forgot email')
            },
            {
                _id: 2,
                title: 'Forgot password?',
                onClick: () => console.log('forgot password')
            },

    ]

        
        return (
            <form onSubmit={handleSubmit} className={`${className} sign-in-form`}>
                <Field className='sign-in-form__email'
                     name='email'
                     type='email'
                     title='Email'
                     placeholder='Email'
                     component={FormInput}/>
                <Field className='sign-in-form__password'
                     name='password'
                     type='password'
                     title='Password'
                     placeholder='Password'
                     component={FormInput}/>
               
                <Field className='sign-in-form__login'
                     name='login'
                     type='submit'
                     title='Login'
                     component={FormButton}/>
                <Details className='sign-in-form__details' links={links}/>
            </form>
        )
    }
}

SignInForm = reduxForm({
    form: 'SignInForm'
})(SignInForm);

export default SignInForm;