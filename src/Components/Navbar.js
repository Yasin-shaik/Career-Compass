import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
export default function Navbar(props) 
{
    const handleClick=()=>{
      props.modeFunction();
    }
    const handleLoad=()=>{
      props.changeProgress();
    }
    return (
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary" style={props.sty}>
  <div className="container-fluid" style={props.sty}>
    <Link className="navbar-brand" style={props.sty} onClick={handleLoad} to="/"><strong>{props.title}</strong></Link>
    <button style={props.sty} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span style={props.sty} className="navbar-toggler-icon"></span>
    </button>
    <div style={props.sty} className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul style={props.sty} className="navbar-nav me-auto mb-2 mb-lg-0">
        <li style={props.sty} className="nav-item">
          <Link style={props.sty} className="nav-link active" onClick={handleLoad} aria-current="page" to="/home2">{props.home}</Link>
        </li>
        <li  className="nav-item" style={props.sty}>
          <Link style={props.sty} onClick={handleLoad} className="nav-link" to="/link">Posted Jobs</Link>
        </li>
        <li style={props.sty} className="nav-item">
          <Link style={props.sty} onClick={handleLoad} className="nav-link" aria-disabled="true" to="/about">About Us</Link>
        </li>
      </ul>
      <button style={props.sty} className="btn btn-outline-primary my-1" type="mode" onClick={handleClick}>{props.btnText}</button>
    </div>
  </div>
</nav>
    );
  }
  Navbar.propTypes={
    title: PropTypes.string,
    home: PropTypes.string
  }
  Navbar.defaultProps={
    title: 'JobHere',
    home: 'Post a Job'
  }