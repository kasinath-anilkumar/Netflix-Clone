import React from 'react';
import "./NavBar.css";

function NavBar(component) {

  return (
    <div className='navbar'>
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix" />
        <div className='NavBarListContainer'>
           <ul className='NavBarList'>
              <li>
                <a className='NavBarList' href='App.js'>Home</a>
              </li>
              <li>
                <a className='NavBarList' href='App.js' >Movies</a>
              </li>
              <li>
                <a className='NavBarList' href='App.js'>Tv Shows</a>
              </li>
              <li>
                <a className='NavBarList' href='App.js'>My List</a>
              </li>
            </ul>
        </div>
        
        <img className='avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" alt="" />
        

        
    </div>
  );
}

export default NavBar;
