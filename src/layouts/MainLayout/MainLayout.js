import css from './MainLayout.modules.css'
import {Outlet, Link, NavLink} from "react-router-dom"

export const MainLayout = () => {
    return (
        <div>
            <div className={'header'}>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>
            <hr/>
            <Outlet/>
        </div>
    );
};