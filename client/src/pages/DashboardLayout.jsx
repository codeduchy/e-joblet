import { Outlet, redirect, useLoaderData } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Dashboard';
import { Navbar, BigSidebar, SmallSidebar } from '../components';
import { useState, createContext, useContext } from 'react';
import customFetch from '../utils/customFetch';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const loader = async () => {
  try {
    const { data } = await customFetch('/users/current-user');
    return data;
  } catch (error) {
    return redirect('/');
  }
};

export const DashboardContext = createContext();
const Dashboard = ({ isDarkThemeEnabled }) => {
  const navigate = useNavigate();
  const { user } = useLoaderData();

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
  const logout = async () => {
    navigate('/');
    await customFetch.get('auth/logout');
    toast.success('Logging out...');
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
              <Outlet context={{ user }} />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};
export default Dashboard;
