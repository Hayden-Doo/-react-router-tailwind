import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import Logo from '../../common/Logo';

const LayoutType = () => {
  return (
    <div>
      {/* <Header /> */}
      <Logo />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default LayoutType;
