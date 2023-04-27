import style from "../About/About.module.css";
import { Link } from "react-router-dom";
import linkedin from './linkedin.png'
import instagram from './instagram3.png'
import github from './github.png'


const About = () => {
  return (
    <div>

<Link to="/home">
        <a  className={style.a} href="#"><span >HOME</span><i></i></a>
      </Link>

      <div className={style.container}>
        <div className={style.img_content}>
          <div className={style.img}>
            <div className={style.info}>
              <h1>Juan Sebastian Muñoz Mayor</h1>
              <h4>Electronic Engineer and Full Stack Developer</h4>
            </div>
           
          </div>
        </div>
      </div>
      <div>
      <a
              className="icon"
              href="https://www.linkedin.com/in/sebastian-mayor/"
              target="_blank"
              rel="noreferrer"
            >
              <img className={style.iconL} src={linkedin} alt="linkedin"></img>
            </a>
            <a
              className="icon"
              href="https://github.com/sebasmayor06/PI-Videogames"
              target="_blank"
              rel="noreferrer"
            >
              <img className={style.iconG} src={github} alt="GitHub"></img>
            </a>
            <a
              className="icon"
              href="https://www.instagram.com/sebastian_mayor06/"
              target="_blank"
              rel="noreferrer"
            >
              <img className={style.iconI} src={instagram} alt="Instagram"></img>
            </a>
          </div>
      
    </div>
  );
};
export default About;
