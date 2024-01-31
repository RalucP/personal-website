import PropTypes from 'prop-types';

import './Label.styles.scss';

const Skill = ({ value }) => {
  return (
    <div className="skill">{value}</div>
  );
}

Skill.propTypes = {
  value: PropTypes.string.isRequired
};

export default Skill;