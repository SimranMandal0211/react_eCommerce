import './navigation.styles.css';
import avatar from '../../assets/images/avatar.png';

import React from "react";

import { Outlet, Link } from 'react-router-dom';

import CartIcon from '../../components/cart-icon/cart-icon.component';

export default function Navigation() {
    return (
        <>
            <div className='navBar'>
                <div className='sectionOne'>
                    <Link className='navLinks' to='allProds'>
                        <h2 className='logo'>Emart</h2>
                    </Link>

                    <Link className='navLinks' to="allProd">
                        Products
                    </Link>

                    <Link className='navLinks' to="addProd">
                        Add Product
                    </Link>
                </div>


                <div className='sectionTwo'>
                    <Link className='navLinks' to='cart'>
                        <CartIcon />
                    </Link>

                    <div className='navItem'>
                        <img 
                        className='avatar'
                        src={avatar}
                        alt=''
                        />
                        <p className='name'>Simran Mandal</p>
                    </div>
                </div>
            </div>


            <Outlet />
        </>
    );
}