import ContactLink, { CONTACT_LINK_ICON_TYPE, CONTACT_LINK_TYPE } from "../contact-link/ContactLink";

import CV from '../../assets/Raluca_Parvan_Resume.pdf';

import './Contact.styles.scss'

const Contact = () => {

  const copyToClipboard = async (value) => {
    try{
      navigator.clipboard.writeText(value);
      alert('Copied to clipboard successfully!');
    }
    catch(error){
      alert(`Failed to copy to clipboard: Your browser doesn't support copying to clipboard!`);
    }
  }

  return (
    <section id="contact" className="contact-wrapper">
      <h1>Contact me</h1>
      <div className="contact-links-flex">
        <ContactLink 
          iconType={CONTACT_LINK_ICON_TYPE.EMAIL}
          type={CONTACT_LINK_TYPE.BUTTON}
          onClick={() => copyToClipboard('parvanraluca0@gmail.com')}
        >
          parvanraluca0@gmail.com
        </ContactLink>
        <ContactLink 
          iconType={CONTACT_LINK_ICON_TYPE.DOWNLOAD}
          type={CONTACT_LINK_TYPE.ANCHOR}
          href={CV}
          target='_blank'
        >
          Download my CV
        </ContactLink>
        <ContactLink 
          iconType={CONTACT_LINK_ICON_TYPE.GITHUB} 
          type={CONTACT_LINK_TYPE.ANCHOR}
          href='https://github.com/RalucP' 
          target='_blank'
        />
        <ContactLink 
          iconType={CONTACT_LINK_ICON_TYPE.LINKEDIN} 
          type={CONTACT_LINK_TYPE.ANCHOR}
          href='https://www.linkedin.com/in/raluca-parvan/' 
          target='_blank'
        />
      </div>
    </section>
  )
}

export default Contact;