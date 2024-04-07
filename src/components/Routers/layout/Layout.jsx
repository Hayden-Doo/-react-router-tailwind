import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
