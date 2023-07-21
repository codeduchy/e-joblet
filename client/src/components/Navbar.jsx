import Wrapper from '../assets/wrappers/Navbar';
import { FaAlignLeft } from 'react-icons/fa';
import Logo from './Logo';
import { useContext, useEffect, useState } from 'react';
import { DashboardContext } from '../pages/DashboardLayout';
import LogoutContainer from './LogoutContainer';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const { toggleSmallSidebar, toggleBigSidebar } = useContext(DashboardContext);
  const [isBigSidebar, setIsBigSidebar] = useState(false);

  let box = document.querySelector('#root');
  let width = box.offsetWidth;
  useEffect(() => {
    setIsBigSidebar(width >= 992);
  }, []);

  window.addEventListener('resize', () => {
    width = box.offsetWidth;
    setIsBigSidebar(width >= 992);
  });

  return (
    <Wrapper>
      <div className="nav-center">
        <button
          type="button"
          className="toggle-btn"
          onClick={isBigSidebar ? toggleBigSidebar : toggleSmallSidebar}
        >
          <FaAlignLeft />
        </button>
        <div>
          <span className="logo">
            <Logo />
          </span>
          <h4 className="logo-text">dashboard</h4>
        </div>
        <div className="btn-container">
          <ThemeToggle />
          <LogoutContainer />
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
