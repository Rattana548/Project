import React from 'react'
import { Link } from 'react-router-dom'


function Nav() {

    const Logout = () => {
        localStorage.removeItem('user')
        window.location.href = '/login'
    }

    /*const cot = JSON.parse(localStorage.getItem('user'))


    if (!cot) {

        return (
            <>
                <div className="navigation">
                    <nav className="navbar navbar-expand navbar-green mt">
                        <div className="container">
                            <Link to="/login" className="l text-decoration colorFFF">Mini Market</Link>
                        </div>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/login" className="nav-link colorFFF">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/register" className="nav-link colorFFF">Register</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </>
        )

    }
    else {
        console.log(cot[cot.fname])*/
        return (
            <>
                <div className="navigation">
                    <nav className="navbar navbar-expand bg-green mt">
                        <div className="container">
                            <Link to="/showproduct" className="l text-decoration colorFFF">Mini Market</Link>
                        </div>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/showproduct" className="nav-link colorFFF">Shop</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/showproduct" className="nav-link colorFFF">Name</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/showproduct" className="nav-link colorFFF">Status</Link>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link colorFFF" onClick={Logout}>Logout</span>
                            </li>
                        </ul>
                    </nav>
                </div>

            </>
        )
    }
//}

export default Nav