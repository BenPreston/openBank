import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../_actions';

import i18next from '../_services/i18n';

import Title from '../Components/Title/Title';

import brain from '../assets/group.svg'
import safe from '../assets/group-3.svg'

import './welcomePage.css'

function WelcomePage() {

    return(
        <>
            <Title titles={i18next.t('CreateYourPasswordManager')} underline={true} />

            <div className="imageAndTextWrapper">
            <div className="imageAndText">
                <img src={brain} alt="brain"/>
                <p className="imageText">{i18next.t('welcomeText.textImage1')}</p>
            </div> 
 
            <div className="imageAndText">
                <img src={safe} alt="safe"/>
                <p className="imageText">{i18next.t('welcomeText.textImage2')}</p>
            </div>
            </div>

            <div className="headerAndText">
                <div className="subHeader">{i18next.t('welcomeText.subtitle1')}</div>
                <p>{i18next.t('welcomeText.subtitleText1')}</p>
            </div>

            <div className="headerAndText">
                <div className="subHeader">{i18next.t('welcomeText.subtitle2')}</div>
                <p>{i18next.t('welcomeText.subtitleText2')}</p>
            </div>
        </>
    )
}

export { WelcomePage };