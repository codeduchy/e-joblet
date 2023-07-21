import { Outlet } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Dashboard';
import { Navbar, BigSidebar, SmallSidebar } from '../components';
import { useState, createContext, useContext } from 'react';

export const DashboardContext = createContext();
const Dashboard = ({ isDarkThemeEnabled }) => {
  const user = { name: 'john' };

  const [showSmallSidebar, setSmallSidebar] = useState(false);
  const [showBigSidebar, setBigSidebar] = useState(true);
  const [isDarkTheme, setIsDarkTheme] = useState(isDarkThemeEnabled);

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle('dark-theme', newDarkTheme);
    localStorage.setItem('darkTheme', newDarkTheme);
  };
  const toggleSmallSidebar = () => {
    setSmallSidebar(!showSmallSidebar);
    console.log(123);
  };
  const toggleBigSidebar = () => {
    setBigSidebar(!showBigSidebar);
  };
  const logout = () => {
    console.log('dark theme toggle');
  };

  return (
    <DashboardContext.Provider
      value={{
        user,
        showSmallSidebar,
        showBigSidebar,
        isDarkTheme,
        toggleDarkTheme,
        toggleSmallSidebar,
        toggleBigSidebar,
        logout,
      }}
    >
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};
export default Dashboard;
