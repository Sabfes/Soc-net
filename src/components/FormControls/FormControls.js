import React from "react";
import classes from './FormControls.module.css'
import {Field} from "redux-form";

export const TextArea = ({input, meta, ...props}) => {
    const hasError = meta.error && meta.touched
    return (
        <div className={classes.formControl + ' ' + (hasError ? classes.error : null)}>
            <textarea className={classes.formControl__textArea} {...props} {...input} />
            {
                hasError
                    ? <span className={classes.errorMessage}>{meta.error}</span>
                    : null
            }
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.error && meta.touched
    return (
        <div className={classes.formControl + ' ' + (hasError ? classes.error : null)}>
            <input className={classes.formControl__input} {...props} {...input} />
            {
                hasError
                    ? <span className={classes.errorMessage}>{meta.error}</span>
                    : null
            }
        </div>
    )
}

export const createField = (placeholder, name, validators, component, props ={}, text='') => {
    return (
        <div>
            <Field
                placeholder={placeholder}
                name={name}
                validate={validators}
                component={component}
                {...props}
            /> {text}
        </div>
    )
}