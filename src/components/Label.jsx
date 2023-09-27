import PropTypes from 'prop-types'

export default function Label(props){
    return(
        <div className="label">
            <p className="label-text">{props.text}</p>
            <span className="label-shadow"></span>
        </div>
    )
}
Label.propTypes = {
    text: PropTypes.string.isRequired,
}