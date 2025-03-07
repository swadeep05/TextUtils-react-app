import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

export default function NavBar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <a className="navbar-brand" href="#">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to="/about">{props.aboutText}</Link>
          </li> */}
        </ul>
      </div>
      <button className="btn btn-primary" onClick={props.lightMode} type="submit">{props.btntxt}</button>
    </nav>
  );
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};



// import React from 'react';
// import PropTypes from 'prop-types';
// import {Link} from 'react-router-dom';
// export default function NavBar(props) {
// 	return (
// 		<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
// 			<a className="navbar-brand" href="/">{props.title}</a>
// 			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
// 				<span className="navbar-toggler-icon"></span>
// 			</button>

// 			<div className="collapse navbar-collapse" id="navbarSupportedContent">
// 				<ul className="navbar-nav mr-auto">
// 					<li className="nav-item active">
// 						<Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
// 					</li>
// 					<li className="nav-item">
// 						<Link className="nav-link" to="/about">{props.aboutText}</Link>
// 					</li>

// 				</ul>
// 				{/* <form className="form-inline my-2 my-lg-0"> // search commented out
// 					<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
// 					<button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
// 				</form> */}
// 			</div>
// 			<button className="btn btn-primary" onClick={props.lightMode} type="submit" >{props.btntxt}</button>
// 		</nav>
// 	)
// }
// NavBar.propTypes = {
// 	title: PropTypes.string.isRequired,
// 	aboutText: PropTypes.string.isRequired,
// }
