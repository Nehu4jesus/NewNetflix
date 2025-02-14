import React from 'react'
import './Header.css'
import NetflixLogo from '../../assets/images/netflix_logo_PMS.png'
const Header = () => {
  return (
    <div className='header_outer_container'>
        <div className='header_container'>
            <div className='header_left'>
              <ul>
                    <li><img src={NetflixLogo} alt="Netflix logo" width="100" /></li>
                    <li>Netflix</li>
                    <li>Home</li>
                    <li>TVShows</li>
                    <li>Movies</li>
                    <li>Latest</li>
                    <li>MyList</li>
                    <li>Browser by Language</li>
               </ul>
            </div>
            <div className='header_right'>
                <ul>
                    {/* <li><SearchIcon /></li>
                    <li><NotificationNoneIcon /></li>
                    <li><AccountBoxIcon /></li>
                    <li><ArrowDropDown /></li> */}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header
