import ActionElement, { ACTION_ELEMENT_ICON_TYPE, ACTION_ELEMENT_TYPE } from "../action-element/ActionElement";

import CV from '../../assets/Raluca_Parvan_Resume.pdf';

import './Contact.styles.scss'

const Contact = () => {

  const copyToClipboard = async (value) => {
    try{
      await navigator.clipboard.writeText(value);
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
        <ActionElement 
          iconType={ACTION_ELEMENT_ICON_TYPE.EMAIL}
          type={ACTION_ELEMENT_TYPE.BUTTON}
          onClick={() => copyToClipboard('parvanraluca0@gmail.com')}
        >
          parvanraluca0@gmail.com
        </ActionElement>
        <ActionElement 
          iconType={ACTION_ELEMENT_ICON_TYPE.DOWNLOAD}
          type={ACTION_ELEMENT_TYPE.ANCHOR}
          href={CV}
          target='_blank'
        >
          Download my CV
        </ActionElement>
        <ActionElement 
          iconType={ACTION_ELEMENT_ICON_TYPE.GITHUB} 
          type={ACTION_ELEMENT_TYPE.ANCHOR}
          href='https://github.com/RalucP' 
          target='_blank'
        />
        <ActionElement 
          iconType={ACTION_ELEMENT_ICON_TYPE.LINKEDIN} 
          type={ACTION_ELEMENT_TYPE.ANCHOR}
          href='https://www.linkedin.com/in/raluca-parvan/' 
          target='_blank'
        />
      </div>
    </section>
  )
}

export default Contact;