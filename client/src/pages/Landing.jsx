import Logo from '../components/Logo';
import main from '../assets/images/main.svg';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/LandingPage';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            repellat nesciunt. Molestiae a libero omnis laboriosam odio,
            eligendi at maiores, rem sint debitis modi incidunt, consequatur
            facilis consectetur asperiores dignissimos?
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demon User
          </Link>
        </div>
        <img src={main} alt="joblet image" className="img main-img" />
      </div>
    </Wrapper>
  );
};
export default Landing;
