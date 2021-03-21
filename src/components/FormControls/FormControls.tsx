import React from "react";
import classes from './FormControls.module.css'
import {Field} from "redux-form";
import {ValidatorsType} from "../../utils/validate/validate";

type PropsTypes = {
    meta: {
        error: string
        touched: boolean
    }
    input: any
}

export const TextArea:  React.FC<PropsTypes> = ({input, meta, ...props}) => {
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

export const Input: React.FC<PropsTypes> = ({input, meta, ...props}) => {
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

export const createField = (
    placeholder: string,
    name:string,
    validators: Array<ValidatorsType>,
    component: string | React.Component,
    props ={},
    text: string = ''
) => {
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




