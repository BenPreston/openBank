import React, { useState, useEffect } from 'react';
import { Link, Route, BrowserRouter, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../_actions';

import i18next from '../_services/i18n';

import Title from '../Components/Title/Title'

import './registerPage.css'

function RegisterPage() {
    const [user, setUser] = useState({
        username: '',
        password: '',
        passwordCheck: '',
        passwordHint: '',       
        acceptTerms: false
    });
    const [submitted, setSubmitted] = useState(false);
    const registering = useSelector(state => state.registration.registering);
    const dispatch = useDispatch();

    // reset login status
    useEffect(() => {
        dispatch(userActions.logout());
    }, []);

    function handleChange(e) {
        
        let { name, value } = e.target;
        
        if(name === 'acceptTerms') {
            const checkbox = document.querySelector('.checkbox');
            value = checkbox && checkbox.checked ? true : false;
            setUser(user => ({ ...user, [name]: value }));
        } else {
            setUser(user => ({ ...user, [name]: value }));
        }
    }

    // These are split up as ideally I'd change the error message but I don't have time
    function passwordIsCorrect() {
        const password = user.password;
        const numReg = /\d/;
        const capReg = /[A-Z]/;
        const pwdLen = user.password.length;

        if(user.password !== user.passwordCheck) {
            return false;
        } 
        if(!password.match(numReg)) {
            return false
        }
        if(!password.match(capReg)) {
            return false
        }
        if(pwdLen < 8) {
            return false
        }
        if(pwdLen > 24) {
            return false
        }
        else {
            return true;
        }
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (passwordIsCorrect() && user.username && user.password && user.passwordCheck && user.acceptTerms) {
            dispatch(userActions.register(user));
        }
    }

    return (
        <div className="col-lg-8 offset-lg-2">
            <Title titles={i18next.t('CreateYourPasswordManager')} />

            <div className="explainerText">
                <p>{i18next.t('explainer')}</p>
            </div>
    
            <form name="form" onSubmit={handleSubmit}>

            <div className="form-group">
                    <label>{i18next.t('username')}</label>
                    <input type="text" name="username" value={user.username} onChange={handleChange} className={'form-control' + (submitted && !user.username ? ' is-invalid' : '')} />
                    {submitted && !user.username &&
                        <div className="invalid-feedback">Username is required</div>
                    }
                </div>

                <div className="form-inputs">
                    <div className="form-group">    
                        <label>{i18next.t('firstPassword')}</label>
                        <input type="password" name="password" value={user.password} onChange={handleChange} className={'form-control' + (submitted && !user.password ? ' is-invalid' : '')} />
                        {submitted && !user.password &&
                            <div className="invalid-feedback">Password is required</div>
                        }
                    </div>

                    <div className="form-group">
                        <label>{i18next.t('secondPassword')}</label>
                        <input type="password" name="passwordCheck" value={user.passwordCheck} onChange={handleChange} className={'form-control' + (submitted && !user.passwordCheck ? ' is-invalid' : '')} />
                        {submitted && !user.passwordCheck &&
                            <div className="invalid-feedback">You must put two passwords</div>
                        }
                    </div>
                </div>

                {submitted && !passwordIsCorrect() && 
                <div className="passwordWarning alert alert-danger">Passwords must match be between 8 and 24 characters and contain one number and one uppercase letter</div>}

                <p>{i18next.t('passwordReminderText')}</p>
                
                <div className="form-group">
                        <label>{i18next.t('passwordReminderText')}</label>
                        <input type="text" name="passwordHint" value={user.passwordHint} onChange={handleChange} className='form-control' />
                    </div>

                    <div className="form-group form-check">
                            <label for="acceptTerms" className="form-check-label">Accept Terms & Conditions</label>
                            <input type="checkbox" name="acceptTerms" onChange={handleChange} className=
                            {'checkbox' + submitted && !user.acceptTerms ? 'checkbox is-invalid' : 'checkbox'} />
                            {submitted && !user.acceptTerms &&
                        <div className="invalid-feedback">You must accept the terms</div>
                            }
                    </div>

                <div className="form-group">
                    <button className="btn btn-primary">
                        {registering && <span className="spinner-border spinner-border-sm mr-1"></span>}
                        Register
                    </button>
                    <Link to="/login" className="btn btn-link">Cancel</Link>
                </div>
            </form>
        </div>
    );
}

export { RegisterPage };