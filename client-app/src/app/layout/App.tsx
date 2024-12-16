import NavBar from './NavBar';
import { observer } from 'mobx-react-lite';
import { Outlet, useLocation } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';

function App() {

  const location = useLocation();
  return (
    <main>
      {location.pathname === '/' ? <HomePage /> : (
        <>
          <NavBar />
          {/* Dashboard */}
          <div>
            <Outlet />
          </div>
            </>
          )}
    </main>
  );
}

export default observer(App);
