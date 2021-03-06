import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {StateProps} from "../../Redux/state";

export type NavbarPropsType = {
    state: StateProps
}

const Navbar = (props: NavbarPropsType) => {

    let friendsElements = props.state.sidebar.friends.map(f => <img src={f.avatar} className={s.friendImg} alt='Avatar'/>)

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            <div className={s.itemFriends}>
                <NavLink to='/friends' activeClassName={s.activeLink}>
                    <div className={s.friendTitle}>Friends</div>
                    <div className={s.friendItem}>{friendsElements}</div>
                </NavLink>
            </div>
        </nav>
    );
}
export default Navbar;