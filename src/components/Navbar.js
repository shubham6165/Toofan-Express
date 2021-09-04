import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {


    render() {
        return (
            <div>
                <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">

                    <Link className="navbar-brand text-white" to="/"><i className="fa fa-graduation-cap fa-lg mr-2"></i>Toofan Express</Link>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">

                            <li className="nav-item ">
                                <Link className="nav-link" to="/"><i className="fa fa-home fa-fw mr-1"></i>Home</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/entertainment"><i className="fa fa-film fa-fw mr-1 fs-1"></i>Entertainment</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/business"><i className="fa fa-money fa-fw fa-rotate-180 mr-1"></i>Business</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/sports"><i className="fa fa-futbol-o fa-fw mr-1 fs-1"></i>Sports</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/health"><i className="fa fa-bolt fa-fw mr-1"></i>Health</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/science"><i className="fa fa-bolt fa-fw mr-1"></i>Science</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" to="/technology"><i className="fa fa-bolt fa-fw mr-1"></i>Technology</Link>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
                </header>

            </div>
        )
    }
}

export default Navbar
