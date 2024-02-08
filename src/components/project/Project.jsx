import PropTypes from 'prop-types';
import Label from '../label/Label';
import ContactLink, { CONTACT_LINK_ICON_TYPE, CONTACT_LINK_TYPE } from '../contact-link/ContactLink'

import './Project.styles.scss';

const Project = ({ title, technologies, imageUrl, github, liveLink }) => {
  return (
    <div className='project-wrapper'>
      <img src={imageUrl} alt={`${title} presentation image`} />
      <div className='project-details'>
        <h3 className='title'>{title}</h3>
        <div className='project-tech'>
          {
            technologies.map((tech) => {
              return (
                <Label key={tech.id} value={tech.name} />
              )
            })
          }
        </div>
        <div className='project-links'>
          {liveLink && <ContactLink iconType={CONTACT_LINK_ICON_TYPE.LINK} type={CONTACT_LINK_TYPE.ANCHOR} href={liveLink} />}
          <ContactLink iconType={CONTACT_LINK_ICON_TYPE.GITHUB} type={CONTACT_LINK_TYPE.ANCHOR} href={github} />
        </div>
      </div>
    </div>
  )
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  technologies: PropTypes.array.isRequired,
  imageUrl: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  liveLink: PropTypes.string,
}

export default Project;