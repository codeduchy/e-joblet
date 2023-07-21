import { FaUserCircle, FaCaretDown } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/LogoutContainer';
import { useContext, useState } from 'react';
import { DashboardContext } from '../pages/DashboardLayout';

const LogoutContainer = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user, logoutUser } = useContext(DashboardContext);

  return (
    <Wrapper>
      <button
        type="button"
        className="btn logout-btn"
        onClick={() => setShowLogout(!showLogout)}
      >
        {user.avatar ? (
          <img src={user.avatar} alt="avatar" className="img" />
        ) : (
          <FaUserCircle />
        )}

        {user?.name}
        <FaCaretDown />
      </button>
      <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
        <button type="button" className="dropdown-btn" onClick={logoutUser}>
          logout
        </button>
      </div>
    </Wrapper>
  );
};
export default LogoutContainer;
