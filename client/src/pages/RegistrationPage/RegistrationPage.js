import React from 'react';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import styles from './RegistrationPage.module.sass';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {clearErrorSignUpAndLogin} from '../../actions/actionCreator';
import CONSTANTS from '../../constants';
import articleData from './articlesData.json';

const RegistrationPage = (props) => {
    props.clearError();

    const changeRoute = () => {
        props.history.replace('/');
    };

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
                <RegistrationForm changeRoute={changeRoute}/>
            </div>
            <div className={styles.footer}>
                <div className={styles.articlesMainContainer}>
                    <div className={styles.ColumnContainer}>
                        <div className={styles.headerArticle}>Why should I use Squadhelp?</div>
                        <div className={styles.article}>
                            {
                                articleData[0].data
                            }
                        </div>
                        <div className={styles.headerArticle}>How is Squadhelp Different?</div>
                        <div className={styles.article}>
                            {
                                articleData[1].data
                            }
                        </div>
                    </div>
                    <div className={styles.ColumnContainer}>
                        <div className={styles.headerArticle}>I’ve never used Squadhelp before. What should I
                            expect?
                        </div>
                        <div className={styles.article}>
                            {
                                articleData[2].data
                            }
                        </div>
                        <div className={styles.headerArticle}>How much does it cost?</div>
                        <div className={styles.article}>
                            {
                                articleData[3].data
                            }
                        </div>
                        <div className={styles.headerArticle}>Do you offer any discount for multiple contests?</div>
                        <div className={styles.article}>
                            {
                                articleData[4].data
                            }
                        </div>
                        <div className={styles.headerArticle}>Will you help me validate my name?</div>
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
};


const mapDispatchToProps = (dispatch) => {
    return {
        clearError: () => dispatch(clearErrorSignUpAndLogin())
    }
};

export default connect(null, mapDispatchToProps)(RegistrationPage);