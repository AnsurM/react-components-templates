import React from 'react';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import './Form/.css';

const MyForm = ({ 
    values,
    errors,
    touched,
    isSubmitting
 }) => {
        return (
            <Form className="formik-form">
                <div >
                <label>
                    Email: 
                </label>
                </div>
                <div className="formik-fields">
                {touched.email && errors.email && <p>{errors.email}</p>}
                <Field 
                type="email" name="email"
                placeholder="Email" 
                />
                </div>

                <div >
                <label>
                    Password: 
                </label>
                </div>
                <div className="formik-fields">
                {touched.password && errors.password && <p>{errors.password}</p>}
                <Field 
                type="password" name="password"
                placeholder="Password" 
                />
                </div>
                <div className="formik-fields">
                <label>
                    <Field type="checkbox" name="newsletter"
                    checked={values.newsletter} />
                    Join our newsletter
                </label>
                </div>
                <div className="formik-fields">
                <label style={{margin: "5px 10px"}}>
                    Plan: 
                </label>
                <Field component="select" name="plan">
                    <option value="free">Free</option>
                    <option value="premium">Premium</option>
                </Field>
                </div>
                <button disabled={isSubmitting}>Submit</button>
            </Form>
        );
}

const formikApp = withFormik({
    mapPropsToValues({email, password,  newsletter, plan}) {
        return {
            email: email || '',
            password: password || '',
            newsletter: newsletter || false,
            plan: plan || 'free'
        }
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().email('Email not valid').required(('Email is required.')),
        password: Yup.string().min(9, 'Password should be 9 or more characters long.').required('Password is required')
    }),
    handleSubmit(values, {resetForm, setErrors, setSubmitting}) {

        //setTimeout only simulates a submission here
        //Write your submission logic here
        setTimeout(() => {
            if(values.email === 'ansur@gmail.com')
            {
                setErrors({email: 'That email is already taken.'})
            }
            else
            {
                resetForm();
            }    
            setSubmitting(false);
        }, 2000);
    }
})(MyForm)

export default formikApp ; 