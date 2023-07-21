import NavLinks from './NavLinks';
import Logo from '../components/Logo';
import Wrapper from '../assets/wrappers/BigSidebar';
import { DashboardContext } from '../pages/DashboardLayout';
import { useContext } from 'react';

const BigSidebar = () => {
  const { showBigSidebar } = useContext(DashboardContext);
  return (
    <Wrapper>
      <div
        className={
          showBigSidebar
            ? 'sidebar-container show-sidebar'
            : 'sidebar-container'
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
