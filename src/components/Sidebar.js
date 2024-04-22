import React from 'react'
import background from "./bg_img.jpg";
import { Link } from "react-router-dom";

export default function Sidebar() {

    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-primary bg-gradient bg-opacity-50">
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-dark min-vh-100">
                        <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                            <span className="fs-5 d-none d-sm-inline" ><b>Menu</b></span>
                        </a>
                        <ul className="nav nav-pills flex-column mb-sm-auto align-items-center align-items-sm-start" id="menu">

                            <li className="my-3">
                                <button className=" align-middle w-100" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                    <b>1st Year</b>
                                </button>
                                <div className="collapse" id="collapseExample">
                                    <li className="w-100">
                                        <a href="#" className="nav-link"> <span className="d-none d-sm-inline"><b> 1st Semester </b></span></a>
                                    </li>
                                    <li>
                                        <a href="#" className="nav-link"> <span className="d-none d-sm-inline"><b> 2nd Semester </b></span></a>
                                    </li>
                                </div>
                            </li>
                            <li className="my-3">
                                <button className=" align-middle w-100" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
                                    <b>2nd Year</b>
                                </button>
                                <div className="collapse" id="collapseExample2">
                                    <li className="w-100">
                                        <a href="#" className="nav-link"> <span className="d-none d-sm-inline"><b> 1st Semester </b></span></a>
                                    </li>
                                    <li>
                                        <a href="#" className="nav-link"> <span className="d-none d-sm-inline"><b> 2nd Semester </b></span></a>
                                    </li>
                                </div>
                            </li>
                            <li className="my-3">
                                <button className=" align-middle w-100" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample">
                                    <b>3rd Year</b>
                                </button>
                                <div className="collapse" id="collapseExample3">
                                    <li className="w-100">
                                        <a href="#" className="nav-link"> <span className="d-none d-sm-inline"><b> 1st Semester </b></span></a>
                                    </li>
                                    <li>
                                        <a href="#" className="nav-link"> <span className="d-none d-sm-inline"><b> 2nd Semester </b></span></a>
                                    </li>
                                </div>
                            </li>
                            <li className="my-3">
                                <button className=" align-middle w-100" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample">
                                    <b>4th Year</b>
                                </button>
                                <div className="collapse" id="collapseExample4">
                                    <li className="w-100">
                                        <a href="#" className="nav-link"> <span className="d-none d-sm-inline"><b> 1st Semester </b></span></a>
                                    </li>
                                    <li>
                                        <a href="#" className="nav-link"> <span className="d-none d-sm-inline"><b> 2nd Semester </b></span></a>
                                    </li>
                                </div>
                            </li>

                        </ul>

                    </div>
                </div>
                <div className="col py-3 bg-img bg-cover " style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>

                    <div className="container text-center">
                        <ul className="list-group p-5">
                            <li className="list-group-item bg-primary bg-gradient bg-opacity-75"><b><Link to="/Material" className="custom-link"> Machine Learning </Link></b></li>
                            <li className="list-group-item bg-primary bg-gradient bg-opacity-75"><b> Bio-Informatics </b></li>
                            <li className="list-group-item bg-primary bg-gradient bg-opacity-75"><b> Distributed Computing </b></li>
                            <li className="list-group-item bg-primary bg-gradient bg-opacity-75"><b> Network Security </b></li>
                            <li className="list-group-item bg-primary bg-gradient bg-opacity-75"><b> Machine Learning Lab </b></li>
                        </ul>

                    </div>
                </div>

            </div>
        </div>

    )
}
