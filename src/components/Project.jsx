import tendertime from "../assets/test-desktop.svg"
import test from "../assets/test-mobile.svg"
import Label from "../components/Label"

export default function Project(){
    return(
        <a className="project" href="">
          <div className="project-visuals">
              <img className='project-img' src={tendertime} alt="" />
              <img className="phone-ver" src={test} alt="" />
          </div>
          <h3 className="project-title">Title of the project</h3>
          <div className="labels">
            <Label />
            <Label />
            <Label />
          </div>
        </a>
    )
}