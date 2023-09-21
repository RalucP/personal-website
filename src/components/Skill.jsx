import PropTypes from 'prop-types'

export default function Skill(props){
    
    return(
        <div>
            <div className='skill-card'>
                <div className='order'>
                    <h1 className='order-text'>{props.id}</h1>
                </div>
                <h3 className='skill-title'>{props.name}</h3>
                <p className='skill-description'>{props.description}</p>
            </div>
        </div>
    )
}
Skill.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}