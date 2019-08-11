import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';
import Popup from 'reactjs-popup';

import { thanksMessage } from '../information/thanksMessage';

import { FormInput, FormButton } from '../auth/formFields';

import history from '../../history';
import OrderSummary from './orderSummary';

import { UnderlinedTitle } from './infoHelp';

class PaymentForm extends Component {

    thanksMessage() {

        return (
            console.log('tryna push a message'),
            <Popup>
                {close => (
                <div className="modal">
                    <a className="close" onClick={close}>
                    &times;
                    </a>
                    <div className="header"> Modal Title </div>
                    <div className="content">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
                    Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
                    delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
                    commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
                    explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
                    </div>
                    <div className="actions">
                    <Popup
                        trigger={<button className="button"> Trigger </button>}
                        position="top center"
                        closeOnDocumentClick
                    >
                        <span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                        magni omnis delectus nemo, maxime molestiae dolorem numquam
                        mollitia, voluptate ea, accusamus excepturi deleniti ratione
                        sapiente! Laudantium, aperiam doloribus. Odit, aut.
                        </span>
                    </Popup>
                    <button
                        className="button"
                        onClick={() => {
                        console.log("modal closed ");
                        close();
                        }}
                    >
                        close modal
                    </button>
                    </div>
                </div>
                )}
            </Popup>
        )
    }



    render() {
        const { className, handleSubmit } = this.props;


        return (
            <form onSubmit={handleSubmit} className={`${className} payment-form`}>
                <Field className='payment-form__name'
                    type='name'
                    title='Name on Credit Card'
                    placeholder='Name'
                    name='name'
                    component={FormInput}/>

                  <Field className='payment-form__card'
                    type='card'
                    title='Credit Card Number'
                    placeholder='____-____-____-____'
                    name='card'
                    component={FormInput}/>

                <Field className='payment-form__expiration'
                    type='expiration'
                    title='Expiration Date'
                    placeholder='expiration'
                    name='expiration'
                    component={FormInput}/>
               
               <Field className='payment-form__ccv'
                    type='ccv'
                    title='CCV'
                    placeholder='CCV'
                    name='ccv'
                    component={FormInput}/>

               <div className='payment-form__line'></div>

                <Field className='payment-form__pay-complete'
                    onClick={this.thanksMessage}
                    type='submit'
                    title='Pay & Complete'
                    name='pay-complete'
                    component={FormButton}/>
                <Field className='payment-form__back'
                    onClick={() => history.push('/signin')}
                    type='button'
                    title='Back'
                    name='back'
                    short={true}
                    component={FormButton}/>

                <OrderSummary className='payment-form__order-summary'/>
                <div className='payment-form__shipping-info shipping-info'>
                    <UnderlinedTitle className='shipping-info__title' title='Shipping To'/>
                    <div className='shipping-info__name small-text'>Ligia Dolinta</div>
                    <div className='shipping-info__address small-text'>1234 Libery Str.</div>
                </div>
            </form>
        )
    }
}

PaymentForm = reduxForm({
    form: 'PaymentForm'
})(PaymentForm);

// function mapStateToProps(state) {
//     const { name, address } = state.user.user;
//     return { 
//         name, 
//         address 
//     }
// }

//PaymentForm = connect(mapStateToProps)(PaymentForm);

export default PaymentForm;