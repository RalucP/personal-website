import tendertime from "../assets/projects/tendertime.png"
import tendertimePhone from "../assets/projects/tendertime-phone.png"
import Label from "../components/Label"

export default function Project(){
    return(
        <a className="project" href="https://tendertime.uni.mau.se" target="blank">
          <div className="project-visuals">
            <img src={tendertime} alt="tender time desktop version" className="project-img" />
            <img src={tendertimePhone} alt="tendertime phone version" className="phone-ver" />
          </div> 
          <h3 className="project-title">Tender Time</h3>
          <div className="labels">
            <Label />
            <Label />
            <Label />
          </div>
        </a>
    )
}