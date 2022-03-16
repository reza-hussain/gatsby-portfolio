import React from 'react'
import { Link } from 'gatsby'

import * as headerStyles from './header.module.scss';
const Header = () => {
    return (
        <header className={headerStyles.header}>
            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link className={headerStyles.navLink} activeClassName={headerStyles.navLinkActive} to="/">Home</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navLink} activeClassName={headerStyles.navLinkActive} to="/blog">Projects</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navLink} activeClassName={headerStyles.navLinkActive} to="/about">About</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navLink} activeClassName={headerStyles.navLinkActive} to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header