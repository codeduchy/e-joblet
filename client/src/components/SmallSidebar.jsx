import Wrapper from '../assets/wrappers/SmallSidebar';
import { FaTimes } from 'react-icons/fa';

import Logo from './Logo';
import { NavLink } from 'react-router-dom';
import links from '../utils/links';
import { DashboardContext } from '../pages/DashboardLayout';
import { useContext } from 'react';

const SmallSidebar = () => {
  const { showSmallSidebar, toggleSmallSidebar } = useContext(DashboardContext);
  return (
    <Wrapper>
      <div
        className={
          showSmallSidebar
            ? 'sidebar-container show-sidebar'
            : 'sidebar-container'
        }
      >
        <div className="content">
          <button
            type="button"
            className="close-btn"
            onClick={toggleSmallSidebar}
          >
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <div className="nav-links">
            {links.map((link) => {
              const { text, path, icon } = link;

              return (
                <NavLink
                  to={path}
                  key={text}
                  className="nav-link"
                  onClick={toggleSmallSidebar}
                  end
                >
                  <span className="icon">{icon}</span>
                  {text}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
