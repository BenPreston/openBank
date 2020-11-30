import React, { useEffect, useState } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import { WelcomePage } from '../WelcomePage';

import './app.css'
import i18next from '../_services/i18n';

function App() {
    
    const alert = useSelector(state => state.alert);
    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location, action) => {
            dispatch(alertActions.clear());
        });
    }, []);

    return (
        <>
            <div className="main-container">
                <div className="header main-header"></div>
                <div className="content-container">
                    <div className="header">
                        <span className="header-numbers">1</span>
                        <span className="header-numbers">2</span>
                        <span className="header-numbers">3</span>
                    </div>

                    <div className="text-content">
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Router history={history}>
                            <Switch>
                                <PrivateRoute exact path="/" component={HomePage} />
                                <Route exact path="/welcome" component={WelcomePage} />
                                <Route path="/login" component={LoginPage} />
                                <Route path="/register" component={RegisterPage} />
                                <Redirect from="*" to="/" />
                            </Switch>
                        </Router>
                    </div>
                </div>
                <div className="buttonSection">
                    <button>{i18next.t('cancel')}</button>
                    <button>{i18next.t('next')}</button>
                </div>
            </div>
        </>
    );
}

export { App };