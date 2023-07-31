import { useRouteError } from 'react-router-dom';
const ErrorElement = () => {
  const error = useRouteError();
  console.log(error);
  return <div>There was an error...</div>;
};
export default ErrorElement;
