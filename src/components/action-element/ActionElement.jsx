import { PropTypes } from 'prop-types'

import LinkedIn from '../../assets/icons/linkedin-icon.svg'
import GitHub from '../../assets/icons/github-icon.svg'
import Email from '../../assets/icons/email-icon.svg'
import Phone from '../../assets/icons/phone-icon.svg'
import Download from '../../assets/icons/download-icon.svg'
import Link from '../../assets/icons/link-icon.svg'

import './ActionElement.styles.scss'

export const ACTION_ELEMENT_ICON_TYPE = {
  GITHUB: GitHub,
  EMAIL: Email,
  LINKEDIN: LinkedIn,
  PHONE: Phone,
  DOWNLOAD: Download,
  LINK: Link
}

export const ACTION_ELEMENT_TYPE = {
  BUTTON: 'button',
  ANCHOR: 'anchor'
}

const ContactLink = ({ children, iconType, type, ...otherProps }) => {
  return (
    <>
    {
      type === ACTION_ELEMENT_TYPE.ANCHOR ? <a className='action-element' {...otherProps}>
        <img src={iconType} alt='icon' className='action-element-icon' />
        {children}
      </a> : 
      <button className='action-element' {...otherProps}>
        <img src={iconType} alt='icon' className='action-element-icon' />
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