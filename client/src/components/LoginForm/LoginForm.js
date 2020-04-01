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


    clicked = (values) => {
        this.props.loginRequest(values);
    };


    render() {
        const {isFetching} = this.props.auth;
        const {handleSubmit, submitting} = this.props;
        return (

                <form onSubmit={handleSubmit(this.clicked)}>
                    <Field
                        name='email'
                        classes={{
                            container: styles.inputContainer,
                            input: styles.input,
                            warning: styles.fieldWarning,
                            notValid: styles.notValid,
                            valid: styles.valid
                        }}
                        component={FormInput}
                        type='text'
                        label='Email Address'
                    />
                    <Field
                        name='password'
                        classes={{
                            container: styles.inputContainer,
                            input: styles.input,
                            warning: styles.fieldWarning,
                            notValid: styles.notValid,
                            valid: styles.valid
                        }}
                        component={FormInput}
                        type='password'
                        label='password'
                    />
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