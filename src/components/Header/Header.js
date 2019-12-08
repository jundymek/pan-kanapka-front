import React from 'react';
import LoginFormHeader from './LoginFormHeader';
import './Header.scss'

function Header(props) {
    return (
        <section className="header">
            <h1>Pan Kanapka</h1>
            <LoginFormHeader />
        </section>
    )
}

export default Header;
