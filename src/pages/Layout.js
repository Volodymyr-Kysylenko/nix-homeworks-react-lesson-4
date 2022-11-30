import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Layout() {
    const logo = (
    <div>
        <Link to='/'>App Logo</Link>
    </div>
    );

    const nav = (
    <nav>
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/blogs'>Blogs</Link>
            </li>
            <li>
                <Link to='/contact'>Contact</Link>
            </li>
            <li>
                <Link to='/no-page'>No Page</Link>
            </li>
        </ul>
    </nav>
    );

    return (
        <>
            <header>
                {logo}
                {nav}
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                {logo}
                {nav}
                <p>React App © 2022</p>
            </footer>
        </>
    )
}

export default Layout;