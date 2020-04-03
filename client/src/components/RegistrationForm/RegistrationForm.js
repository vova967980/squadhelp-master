import React, { useState } from 'react';
import Error               from '../Error/Error';
import {connect} from "react-redux";
import {authActionRegister, clearAuth} from '../../actions/actionCreator';
import {Redirect} from 'react-router-dom';
import styles from './RegistrationForm.module.sass';
import {Field, reduxForm} from 'redux-form';
import FormInput from '../FormInput/FormInput';
import RoleInput from '../RoleInput/RoleInput';
import AgreeTermOfServiceInput from '../AgreeTermOfServiceInput/AgreeTermOfServiceInput';
import CONSTANTS from '../../constants';
import customValidator from '../../validators/validator';
import Schems from '../../validators/validationSchems';


class RegistrationForm extends React.Component {




    registerValues = (values) => {
        this.props.register({
            firstName: values.firstName,
            lastName: values.lastName,
            displayName: values.displayName,
            email: values.email,
            password: values.password,
            role: values.role
        });
    };

    render() {
        const {handleSubmit, submitting} = this.props;
        const formInputProps = {
            containerStyles: styles.inputContainer,
            className: styles.input,
            warningStyles: styles.fieldWarning,
            validStyles: styles.valid,
            invalidStyles: styles.notValid,
        };


        const fieldRender = ( name, type, placeholder,  ) => {
            return (
                <Field name={name} type={type} placeholder={placeholder} {...formInputProps} component={FormInput} />
            );
        };

        return (
                <form onSubmit={handleSubmit(this.registerValues)}>
                    <div className={styles.row}>
                        {
                            fieldRender( 'firstName', 'text', 'Name' )
                        }
                        {
                            fieldRender( 'lastName', 'text', 'Surname' )
                        }
                    </div>
                    <div className={styles.row}>
                        {
                            fieldRender( 'displayName', 'text', 'Display Name' )
                        }
                        {
                            fieldRender( 'email', 'email', 'Email address' )
                        }
                    </div>
                    <div className={styles.row}>
                        {
                            fieldRender( 'password', 'password', 'Password' )
                        }
                        {
                            fieldRender( 'confirmPassword', 'password', 'Password confirmation' )
                        }
                    </div>
                    <div className={styles.choseRoleContainer}>
                        <Field name='role' type='radio' value={CONSTANTS.CUSTOMER} strRole='Join As a Buyer'
                               infoRole='I am looking for a Name, Logo or Tagline for my business, brand or product.'
                               component={RoleInput} id={CONSTANTS.CUSTOMER}/>
                        <Field name='role' type='radio' value={CONSTANTS.CREATOR} strRole='Join As a Creative'
                               infoRole='I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.'
                               component={RoleInput} id={CONSTANTS.CREATOR}/>
                    </div>
                    <div className={styles.termsOfService}>
                        <Field
                            name='agreeOfTerms'
                            classes={{
                                container: styles.termsOfService,
                                warning: styles.fieldWarning
                            }}
                            id='termsOfService'
                            component={AgreeTermOfServiceInput}
                            type='checkbox'
                        />

                    </div>
                    <button type='submit' disabled={submitting} className={styles.submitContainer}>
                        <span className={styles.inscription}>Create Account</span>
                    </button>
                </form>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        initialValues: {
            role: CONSTANTS.CUSTOMER
        }
    }
};

const mapDispatchToProps = (dispatch) => (
    {
        register: (data) => dispatch(authActionRegister(data))
    }
);


export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'login',
    validate: customValidator(Schems.RegistrationSchem)
})(RegistrationForm));