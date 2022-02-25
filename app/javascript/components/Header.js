import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = ({ routes }) => (
    <header>
        <nav>
            <ul className="nav-links">
                {routes.map(({ name, path }) => (
                    <li key={path} className="nav-link">
                        <NavLink to={path}>{name}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
);

Header.propTypes = {
    routes: PropTypes.arrayOf(PropTypes.shape({
        path: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    })).isRequired,
};

export default Header;