import './Home.css'
import LandingWelcome from '../../Components/LandingWelcome/welcome'
import SkillsView from '../../Components/SkillView/SkillsView';

const Home = () => {
    return (
        <div className='home' onScroll={(e) => console.log(e)}>
            <LandingWelcome />
            <SkillsView />
        </div>
    )
};

export default Home;