import React from 'react'
import './Footer.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <div className='footer_outer_container'>
      <div className='footer_inner_container'>
        <div className='footer_icons'>
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
        <div className='footer_data'>
          <div className='footer_data ul'>
            <ul className='footer_data ul li'>
              <li>Audio Description</li>
              <li>Investor Relation</li>
              <li>Legal Notices</li>
            </ul>
          </div>
          <div className='footer_data ul'>
            <ul className='footer_data ul li'>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Privacy</li>
            </ul>
          </div>
          <div className='footer_data ul'>
            <ul className='footer_data ul li'> 
              <li>Helpp Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>
          <div className='footer_data ul'>
            <ul className='footer_data ul li'>
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>Cooprate Information</li>
            </ul>
        </div>
        <div className='footer_data ul'>
          <ul className='footer_data ul li'>
            <li>Media Center</li>
            <li>Privacy</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className='service_code'>
          <p>
            Service Code
          </p>
        </div>
        <div className='copy_right'>
          &copy; 1997-2021 Netflix, Inc.
        </div>
      </div>
    </div>
  </div>
  )
}

export default Footer
