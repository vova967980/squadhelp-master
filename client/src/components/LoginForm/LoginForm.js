import React from 'react';
import {connect} from 'react-redux';
import {authActionLogin, clearAuth} from "../../actions/actionCreator";
import {Redirect} from 'react-router-dom';
import styles from './LoginForm.module.sass';
import {Field, reduxForm} from 'redux-form';
import FormInput from '../FormInput/FormInput';
import customValidator from '../../validators/validator';
import Schems from '../../validators/validationSchems';
import Error from '../../components/Error/Error';


class LoginForm extends React.Component {


    loginRequest = (values) => {
        this.props.loginRequest(values);
    };


    render() {
        const {isFetching} = this.props.auth;
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

                <form onSubmit={handleSubmit(this.loginRequest)}>
                    {
                        fieldRender( 'email', 'email', 'Email address' )
                    }
                    {
                        fieldRender( 'password', 'password', 'Password' )
                    }
                    <button type='submit' disabled={submitting} className={styles.submitContainer}>
                        <span className={styles.inscription}>{isFetching ? 'Submitting...' : 'LOGIN'}</span>
                    </button>
                </form>
        );
    }
}



const mapStateToProps = (state) => {
    const {auth} = state;
    return {auth};
};

const mapDispatchToProps = (dispatch) => (
    {
        loginRequest: (data) => dispatch(authActionLogin(data))
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'login',
    validate: customValidator(Schems.LoginSchem)
})(LoginForm));