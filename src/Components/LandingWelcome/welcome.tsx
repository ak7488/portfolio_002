import { baseURL } from "../../helpers/constants";
import Header from "../Header/Hdeader";
import "./welcome.css";

const Home = () => {
  return (
    <div className="welcome">
      <div className="hero"></div>
      <Header />
      <div className="welcome_introduction">
        <div className="welcome_me_img">
          <img src={`${baseURL}/profile-pic`} />
        </div>
        <div className="welcome_introduction_text">
          <p>Welcome</p>
          <br />
          <p>
            I'm <span>Anubhav Ananad</span>
          </p>
          <br />
          <p>
            I am a self tought <span>web developer</span>. I specilize in{" "}
            <span>MERN stack</span>
          </p>
          <br />
          <p>
            I also know <span>Next.js, Tailwind, React native</span> and{" "}
            <span>Electron.js</span>
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Home;
