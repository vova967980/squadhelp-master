import React      from 'react';
import classNames from 'classnames';
import PropTypes  from 'prop-types';

const FormInput = ( props ) => {
    const {placeholder, input, type, className, validStyles, invalidStyles, containerStyles, warningStyles, meta: {touched, error}} = props;

    const inputClassName = classNames( className, {[invalidStyles]: touched && error},
                                       {[validStyles]: touched && !error} );
    return (
        <div className={containerStyles}>
            <input {...input} placeholder={placeholder} type={type}
                   className={inputClassName}/>
            {
                touched && (error && <span className={warningStyles}>{error}</span>)
            }
        </div>
    )
};

FormInput.propTypes = {
    className: PropTypes.string.isRequired,
    validStyles: PropTypes.string,
    invalidStyles: PropTypes.string,
    containerStyles: PropTypes.string.isRequired,
    warningStyles: PropTypes.string.isRequired,
};

export default FormInput;