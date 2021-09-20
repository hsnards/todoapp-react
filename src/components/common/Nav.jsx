import React from 'react';
import {Link , withRouter ,NavLink} from "react-router-dom"
const Nav = (props) => {

     return (
          <div className="m-3">
               <ul className="nav nav-pills justify-content-between  ">
                    <li className="nav nav-item ">
                         <NavLink exact className="nav-link" to="/">
                              کارهای روزمره{' '}
                         </NavLink>
                    </li>
                    <li className="nav nav-item ">
                         <NavLink  className="nav-link" to="/about">
                              درباره ی سازنده{' '}
                         </NavLink>
                    </li>
               </ul>
          </div>
     );
};

export default Nav;
