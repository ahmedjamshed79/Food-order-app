import {Fragment} from 'react';
import mealsImage from '../../assets/meals2.jpg';
import HeaderCartBtn from './HeaderCartBtn';

import classes from './Header.module.css';

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Burger Cottege</h1>
                <HeaderCartBtn onClick={props.onShowCart}></HeaderCartBtn>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="hero"/>
            </div>
        </Fragment>
    )
}

export default Header
