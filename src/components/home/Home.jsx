import './Home.styles.scss';

import ExtendedLogo from '../../assets/extended-logo.svg';
import skills from '../../data/skills.json';
import occupation from '../../data/occupation.json';

import Label from '../label/Label';
import Typewriter from '../typewriter/Typewriter';

const Home = () => {
  return (
    <section id="home" className='home-wrapper'>
      <div className='intro-wrapper'>
        <div className='intro-flex'>
          <h1 className='intro-text'>I am</h1>
          <img src={ExtendedLogo} alt='Raluca Parvan' className='intro-name'/>
        </div>
        <Typewriter 
          sentences={occupation}
        />
        <div className='skills-flex'>
          {
            skills.map(skill => {
              return (
                <Label 
                  key={skill.id}
                  value={skill.value}
                />
              )
            })
          }
        </div>
      </div>
    </section>
  );
};

export default Home;
