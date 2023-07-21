import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import Wrapper from '../assets/wrappers/ThemeToggle';
import { useContext } from 'react';
import { DashboardContext } from '../pages/DashboardLayout';

const ThemeToggle = () => {
  const context = useContext(DashboardContext);
  const { isDarkTheme, toggleDarkTheme } = context;

  return (
    <Wrapper onClick={toggleDarkTheme}>
      {isDarkTheme ? (
        <BsFillSunFill className="toggle-icon" />
      ) : (
        <BsFillMoonFill className="toggle-icon" />
      )}
    </Wrapper>
  );
};
export default ThemeToggle;
