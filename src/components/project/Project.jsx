import PropTypes from 'prop-types';
import Label from '../label/Label';
import ActionElement, { ACTION_ELEMENT_ICON_TYPE, ACTION_ELEMENT_TYPE } from '../action-element/ActionElement'

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
          {liveLink && <ActionElement iconType={ACTION_ELEMENT_ICON_TYPE.LINK} type={ACTION_ELEMENT_TYPE.ANCHOR} href={liveLink} />}
          <ActionElement iconType={ACTION_ELEMENT_ICON_TYPE.GITHUB} type={ACTION_ELEMENT_TYPE.ANCHOR} href={github} />
        </div>
      </div>
    </div>
  )
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  technologies: PropTypes.array.isRequired,
  imageUrl: PropTypes.string,
  github: PropTypes.string.isRequired,
  liveLink: PropTypes.string,
}

export default Project;