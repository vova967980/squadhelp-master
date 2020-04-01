import React      from 'react';
import classNames from 'classnames';
import PropTypes  from 'prop-types'

const FormInput = ( props ) => {
    const {label, input, type, className, validStyles, invalidStyles, container, warning, meta: {touched, error}} = props;

    const inputClassName = classNames( className, {[invalidStyles]: touched && error},
                                       {[validStyles]: touched && !error} );
    return (
        <div className={container}>
            <input {...input} placeholder={label} type={type}
                   className={inputClassName}/>
            {
                touched && (error && <span className={warning}>{error}</span>)
            }
        </div>
    )
};

FormInput.PropTypes = {
    className: PropTypes.string,
    validStyles: PropTypes.string,
    invalidStyles: PropTypes.string,
    container: PropTypes.string,
    warning: PropTypes.string,
};

export default FormInput;