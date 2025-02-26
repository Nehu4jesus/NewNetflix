import React from 'react';
import './Footer.css';
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
        <div className='footer_links_container'>
          <div className='footer_links_column'>
            <ul>
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Legal Notices</li>
            </ul>
          </div>
          <div className='footer_links_column'>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Terms of Use</li>
            </ul>
          </div>
          <div className='footer_links_column'>
            <ul>
              <li>Gift Cards</li>
              <li>Corporate Information</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className='footer_links_column'>
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>
        </div>
        <div className='footer_bottom'>
          <div className='service_code_container'> {/* Container for Service Code and Copyright */}
            <div className='service_code'>
              <p>Service Code</p>
            </div>
            <div className='copy_right'>
              &copy; 1997-2024 Netflix, Inc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;