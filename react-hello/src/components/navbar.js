import React, { Component } from 'react';
//imrc is the shortcut

//sfc is the shortcut for react snippets
const NavBar = (props) => {
    const handleSubmit = (e)=>{
        e.preventDefault();
        //in this case no validation required. just use required on the form

        //send to our app, so they can update the state.
        props.onSearch(document.getElementById('search').value);
    }

    // const length = props.titles.filter(title=> title.value > 0).length;
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
            <a className="navbar-brand" href="#">To-Do Basic App</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled">Disabled</a>
                </li>
                {/* <li className="nav-item" ><span className="nav-link">{props.length}</span></li> */}
                </ul>

                
                <button type="button" className="btn btn-primary m-2">
                    Tasks <span className="badge bg-secondary">{props.length}</span>
                </button>
                
                <form className="d-flex" onSubmit={handleSubmit}>
                <input className="form-control me-2" type="search" placeholder="Search" id="search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            </div>
        </nav>
  );
}
 
export default NavBar;
