import './About.styles.scss';

import profilePhoto from '../../assets/about-photo.svg';

const About = () => {
  return (
    <section id='about'>
      <h1>About me</h1>
      <div className='about-wrapper'>
        <img src={profilePhoto} alt='Raluca Parvan profile photo' className='about-image'/>
        <div className="about-description-flex">
          <p className='about-description'>
            I am a dedicated student pursuing Interaction Design at 
            Malmö University, currently residing in the beautiful 
            city of <span className='bold'>Malmö, Sweden</span>. Originally from Romania, 
            my journey into the world of coding began in high school, 
            where I started to study programming. It was during this 
            time that I unearthed my passion for <span className='bold'>web development </span> 
            and, subsequently, front-end development. The dynamic nature of 
            creating visually appealing and user-friendly interfaces intrigued 
            me, propelling me into the exciting field of web design.
            </p>
          <p className='about-description'>
            Beyond the realm of code, I have a multitude of interests that contribute 
            to my well-rounded skill set. When I am not coding, 
            you will find me <span className='italic'>sketching</span> and 
            <span className='italic'> writing short stories</span> during my free time. 
            As a child, I developed a passion for solving puzzles, a trait that has 
            seamlessly transitioned into <span className='bold'>my problem-solving approach</span> in front-end development. 
            My goal is to weave creativity and functionality seamlessly in the digital space, 
            and I am excited about the prospect of developing a fulfilling career in front-end development.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About;