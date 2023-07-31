import {
  Outlet,
  redirect,
  useLoaderData,
  useNavigation,
} from 'react-router-dom';
import Wrapper from '../assets/wrappers/Dashboard';
import { Navbar, BigSidebar, SmallSidebar, Loading } from '../components';
import { useState, createContext, useContext } from 'react';
import customFetch from '../utils/customFetch';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

const userQuery = {
  queryKey: ['user'],
  queryFn: async () => {
    const { data } = await customFetch('/users/current-user');
    return data;
  },
};

export const loader = (queryClient) => async () => {
  try {
    return await queryClient.ensureQueryData(userQuery);
  } catch (error) {
    return redirect('/');
  }
};

export const DashboardContext = createContext();
const Dashboard = ({ isDarkThemeEnabled, queryClient }) => {
  const { user } = useQuery(userQuery).data;
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';
  const [isAuthError, setIsAuthError] = useState(false);
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
  };
  const toggleBigSidebar = () => {
    setBigSidebar(!showBigSidebar);
  };
  const logout = async () => {
    navigate('/');
    await customFetch.get('auth/logout');
    queryClient.invalidateQueries();
    queryClient.clear();

    toast.success('Logging out...');
  };

  customFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error?.response?.status === 401) {
        setIsAuthError(true);
      }
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    if (!isAuthError) return;
    logout();
  }, [isAuthError]);

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
              {isPageLoading ? <Loading /> : <Outlet context={{ user }} />}
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};
export default Dashboard;
