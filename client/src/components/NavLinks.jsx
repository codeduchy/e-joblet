import { useContext } from 'react';
import { DashboardContext } from '../pages/DashboardLayout';
import links from '../utils/links';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  const { user, toggleSmallSidebar } = useContext(DashboardContext);

  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path, icon } = link;
        // admin user
        return (
          <NavLink
            to={path}
            key={text}
            onClick={toggleSmallSidebar}
            className="nav-link"
            end
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
