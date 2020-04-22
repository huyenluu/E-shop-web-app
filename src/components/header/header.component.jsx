import React from 'react';
import { Link } from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';

import {connect} from 'react-redux';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import CartIcon from '../cart-icon/cart-icon.component';
import './header.styles.scss';
import Cart from '../cart/cart.component';

const Header = ({currentUser, isHidden}) => (
    <>
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/shop'>
                    CONTACT
                </Link>
                {
                    currentUser ?
                    <div className='option' onClick={() => auth.signOut()}> SIGN OUT</div>
                    :
                    <Link className='option' to='/signin'> SIGN IN</Link>
                }
                <CartIcon/>
                <div className='sub-header'>
                    <Cart/>
                </div>
            </div>
        </div>

    </>

);

const mapStateToProps = ({ user: { currentUser }}) => ({
    currentUser
  })

export default connect(mapStateToProps)(Header) ;