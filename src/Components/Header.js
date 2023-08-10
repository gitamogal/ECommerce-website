import React from 'react'
import './Header.css';
import { Link, NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">

                    {/* <img width="130px" src="https://assets.ajio.com/static/img/Ajio-Logo.svg" alt="" title=""></img> */}
                    <NavLink to='/' className='Link'>
                    <h1 style={{ letterSpacing: "6px" }}><b>AJIO</b></h1>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" id='ulList'>
                            <li className="nav-item">
                              <Link className='Menc' to={'./Men'}>  <a className="nav-link active" aria-current="page" href="#">MEN</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link className='Menc' to={'./Women'}> <a className="nav-link active" aria-current="page" href="#">WOMEN</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link className='Menc' to={'./Kids'}> <a className="nav-link active" aria-current="page" href="#">KIDS</a></Link>
                            </li>
                            <li className="nav-item">
                               <Link className='Menc' to={'./Indie'}> <a className="nav-link active" aria-current="page" href="#">INDIE</a></Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">HOME AND KICHEN</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ borderRadius: "50px" }} />
                        </form>
                        <Link to={'./Like'}><img
                            src={require('./image/heart.png')} alt="logo" width="30px" height="30px"
                            className='imgicon1'/>
                        </Link>
                        <Link to={'./AddCart'}>  <img
                            src={require('./image/shopping-bag.png')} alt="logo" width="30px" height="30px"
                            className="imgicon2"/>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
