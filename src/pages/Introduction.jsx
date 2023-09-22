import Skill from '../components/Skill'
import extendedLogo from '../assets/extended-logo.svg'
import flowers from '../assets/flowers.svg'
import PropTypes from 'prop-types'

export default function Home(props){

    return (
        <section >
            <div className="home-page">
                <div className="description">
                    <span>
                        <h2 className='intro-text'>I am</h2>
                        <img className='extended-logo' src={extendedLogo} alt="Raluca Parvan" />
                    </span>
                    <h2 className='intro-text'>A <span className='description-job'>Front-end Developer</span></h2>
                    <p>lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, 
                        lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, 
                        lorem ipsum dolor sit amet, lorem ipsum dolor sit amet</p>
                </div>
                <img src={flowers} alt="flowers decoration" />
            </div>
            <section>
                <h2>How can I help you</h2>
                <div className='skills'>
                {
                    props.data.map((skill) =>{
                        return (
                            <Skill 
                                key={skill.id}
                                id={skill.id}
                                name={skill.positionName}
                                description={skill.description}
                            />
                        )
                    })
                }
                </div>
            </section>
        </section>
    )
}
Home.propTypes = {
    data: PropTypes.array.isRequired
}
