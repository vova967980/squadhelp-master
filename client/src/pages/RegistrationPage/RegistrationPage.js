import React                                   from 'react';
import RegistrationForm                        from '../../components/RegistrationForm/RegistrationForm';
import styles                                  from './RegistrationPage.module.sass';
import { Link }                                from 'react-router-dom';
import { connect }                             from 'react-redux';
import { clearAuth, clearErrorSignUpAndLogin } from '../../actions/actionCreator';
import CONSTANTS                               from '../../constants';
import articleData                             from './articlesData.json';
import Error                                   from "../../components/Error/Error";
import { Field }                               from "redux-form";
import FormInput                               from "../../components/FormInput/FormInput";
import RoleInput                               from "../../components/RoleInput/RoleInput";
import AgreeTermOfServiceInput                 from "../../components/AgreeTermOfServiceInput/AgreeTermOfServiceInput";

class RegistrationPage extends React.Component {

    componentDidMount() {
        this.props.clearError();
    }

    componentWillUnmount() {
        this.props.authClear();
    }

    render() {

        const {auth, authClear} = this.props;
        const {error} = auth;

        return (
            <div className={styles.signUpPage}>
                <div className={styles.signUpContainer}>
                    <div className={styles.headerSignUpPage}>
                        <Link to='/'>
                            <img src={`${CONSTANTS.STATIC_IMAGES_PATH}logo.png`} alt="logo"/>
                        </Link>
                        <div className={styles.linkLoginContainer}>
                            <Link to='/login' style={{textDecoration: 'none'}}><span>Login</span></Link>
                        </div>
                    </div>
                    <div className={styles.signUpFormContainer}>
                        {error && <Error data={error.data} status={error.status} clearError={authClear}/>}
                        <div className={styles.headerFormContainer}>
                            <h2>
                                CREATE AN ACCOUNT
                            </h2>
                            <h4>
                                We always keep your name and email address private.
                            </h4>
                        </div>
                        <RegistrationForm/>
                    </div>

                </div>
                <div className={styles.footer}>
                    <div className={styles.articlesMainContainer}>
                        <div className={styles.ColumnContainer}>
                            <div className={styles.headerArticle}>{articleData[0].headerArticle}</div>
                            <div className={styles.article}>
                                {
                                    articleData[0].data
                                }
                            </div>
                            <div className={styles.headerArticle}>{articleData[1].headerArticle}</div>
                            <div className={styles.article}>
                                {
                                    articleData[1].data
                                }
                            </div>
                        </div>
                        <div className={styles.ColumnContainer}>
                            <div className={styles.headerArticle}>{articleData[2].headerArticle}</div>
                            <div className={styles.article}>
                                {
                                    articleData[2].data
                                }
                            </div>
                            <div className={styles.headerArticle}>{articleData[3].headerArticle}</div>
                            <div className={styles.article}>
                                {
                                    articleData[3].data
                                }
                            </div>
                            <div className={styles.headerArticle}>{articleData[4].headerArticle}</div>
                            <div className={styles.article}>
                                {
                                    articleData[4].data
                                }
                            </div>
                            <div className={styles.headerArticle}>{articleData[5].headerArticle}</div>
                            <div className={styles.article}>
                                {
                                    articleData[5].data
                                }
                            </div>
                            <div className={styles.headerArticle}>I have other questions! How can I get in touch with
                                Squadhelp?
                            </div>
                            <div className={styles.article}>
                                Check out our <span className={styles.orangeSpan}>FAQs</span> or send us a <span
                                className={styles.orangeSpan}>message</span>. For assistance with launching a contest,
                                you can also call us at (877) 355-3585 or schedule a <span
                                className={styles.orangeSpan}>Branding Consultation</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ( state ) => {
    return {
        auth: state.auth
    }
};

const mapDispatchToProps = ( dispatch ) => {
    return {
        clearError: () => dispatch( clearErrorSignUpAndLogin() ),
        authClear: () => dispatch( clearAuth() )
    }
};

export default connect( mapStateToProps, mapDispatchToProps )( RegistrationPage );