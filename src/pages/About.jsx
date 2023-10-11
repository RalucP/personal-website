import aboutPhoto from "../assets/about-photo.svg";
import resumeIcon from "../assets/resume-icon.svg";
import resume from '../assets/Raluca_Parvan_Resume.pdf';

export default function About(){
  return (
    <section>
      <h1>About me</h1>
      <div className="about-container">
        <div className="about-image">
          <img src={aboutPhoto} alt="" />
          <a href={resume} target="_blanc" className="resume">
            <img src={resumeIcon} alt="" />
          </a>
        </div>
        <p className="about-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Pellentesque viverra, nisl eget malesuada consectetur, nisi 
          dolor euismod leo, non dapibus ligula nulla ut nisi. In ut 
          lorem pretium, imperdiet eros a, ultrices mauris. Vestibulum 
          eros arcu, porttitor et venenatis ac, tempor et lectus. Vivamus 
          maximus massa non neque maximus cursus. Donec molestie molestie 
          nibh aliquam aliquet. Sed tortor est, varius nec sapien at, 
          fringilla interdum mauris. Proin malesuada magna quis velit 
          accumsan, sed mattis nisi vehicula. Nulla facilisi.
          <br /><br />
          Aliquam pellentesque nulla at elit ultrices faucibus. Morbi semper 
          sodales sagittis. Nullam et justo et ipsum tempus lacinia. Sed 
          tincidunt eu ante et volutpat. In tincidunt odio finibus dui 
          vehicula ornare. In iaculis, ex eu lacinia commodo, quam nunc 
          consequat tellus, vitae sagittis justo nunc vel lacus. Orci varius 
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
          mus. Nam imperdiet faucibus euismod. Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit. Aenean finibus sem id elit accumsan, 
          a ultrices nibh ultricies. Quisque quis eros vel sem blandit mattis 
          quis ac augue. Duis quis rhoncus quam. Duis porta sem sed nisl posuere suscipit.
          </p>
      </div>
    </section>
  )
}