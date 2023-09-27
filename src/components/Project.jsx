import PropTypes from 'prop-types'
import Label from "../components/Label"
import image from "../assets/passwordGenerator.png"

export default function Project(props){

  function renderContent(){
    return (
      <div className="project">
        <div className="project-visuals">
          {props.desktopImage && <img src={`src/assets/${props.desktopImage}`} alt="desktop image" className="project-img" />}
          {props.phoneImage && <img src={`src/assets/${props.phoneImage}`} alt="phone image" className="phone-ver" />}
          {console.log(props.desktopImage)}
        </div> 
        <h3 className="project-title">{props.title}</h3>
        <div className="labels">
          {
            props.labels.map(label => {
              return (
                <Label 
                  key={label.key}
                  text={label.text}
                />
              )
            })
          }
        </div>
      </div>
    )
  }

  return(
    props.source ? 
    <a href={props.source} target="blank">
      {renderContent()}
    </a> : renderContent()
  )
}
Project.propTypes = {
  title: PropTypes.string.isRequired,
  source: PropTypes.string,
  desktopImage: PropTypes.string.isRequired,
  phoneImage: PropTypes.string,
  labels: PropTypes.array.isRequired
}
