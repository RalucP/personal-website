import { PropTypes } from 'prop-types'

import LinkedIn from '../../assets/icons/linkedin-icon.svg'
import GitHub from '../../assets/icons/github-icon.svg'
import Email from '../../assets/icons/email-icon.svg'
import Phone from '../../assets/icons/phone-icon.svg'
import Download from '../../assets/icons/download-icon.svg'

import './ContactLink.styles.scss'

export const CONTACT_LINK_ICON_TYPE = {
  GITHUB: GitHub,
  EMAIL: Email,
  LINKEDIN: LinkedIn,
  PHONE: Phone,
  DOWNLOAD: Download
}

export const CONTACT_LINK_TYPE = {
  BUTTON: 'button',
  ANCHOR: 'anchor'
}

const ContactLink = ({ children, iconType, type, ...otherProps }) => {
  return (
    <>
    {
      type === CONTACT_LINK_TYPE.ANCHOR ? <a className='contact-link' {...otherProps}>
        <img src={iconType} alt='icon' className='contact-link-icon' />
        {children}
      </a> : 
      <button className='contact-link' {...otherProps}>
        <img src={iconType} alt='icon' className='contact-link-icon' />
        {children}
      </button>
    }
    </>
  )
}

ContactLink.propTypes = {
  children: PropTypes.string,
  iconType: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

export default ContactLink;