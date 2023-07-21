import { Link, useRouteError } from 'react-router-dom';
import img from '../assets/images/not-found.svg';
import Wrapper from '../assets/wrappers/ErrorPage';

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found" />
          <h3>Error! Page Not Found</h3>
          <Link to="/dashboard">go back home...</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h1>Error</h1>
      <p>status : {error.status}</p>
      <p>msg : {error.error.message}</p>
    </Wrapper>
  );
};
export default Error;
