import React from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../../actions/session_actions'
import { connect } from 'react-redux'
import '../../css/dropdown.scss'

const Dropdown = ({ currentUser, logout, hiddenClass }) => {
  return (
     <ul id="dropdown" className={`dropdown-content ${hiddenClass}`} onClick={(e) => e.stopPropagation()}>
       <div className="dropdown-body">
         <li className="dropdown-item">
           <Link to="/projects/new">Start a project</Link>
         </li>
       </div>
       <li className="logout">
         You're logged in as <p>{currentUser.name}</p>&nbsp;&nbsp;
         <button onClick={() => logout(currentUser)}>Log Out</button>
       </li>
     </ul>
 );
};

const mapStateToProps = state => {
  return { currentUser: state.session.currentUser };
};

export default connect(mapStateToProps, { logout })(Dropdown);
