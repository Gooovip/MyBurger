import React from 'react';
import classes from './SideDrawer.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

const SideDrawer = (props) => {
    let classesSideDrawer = [classes.SideDrawer, classes.Close];
        if (props.open) {
            classesSideDrawer = [classes.SideDrawer, classes.Open]
        };
    return (
        <Aux>
            <Backdrop show = {props.open} close = {props.close}/>
            <div
                className={classesSideDrawer.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
}

export default SideDrawer;