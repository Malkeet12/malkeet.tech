import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react';
import './navigation.scss';

const Navigation = () => (
  <div>
    <header className='article-nav'>
      <Link to='/'>
        <img className='nav-logo' src={'../src/app/icons/logo5.png'} />
      </Link>
      <ul className='nav'>
        <li className='nav-item'>
          <Link to='/js'>JS</Link>
        </li>
        <li className='nav-item'>
          <Link to='/css'>CSS</Link>
        </li>
      </ul>
      <i className='nav-search material-icons'>search</i>
    </header>
  </div>
);

export const ConnectedNavigation = connect(state => state)(Navigation);
