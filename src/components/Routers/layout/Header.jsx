import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../common/Logo';
import Button from '../../common/Button';
import tw from 'twin.macro';

const Header = () => {
  const location = useLocation();

  return (
    <header className="flex items-center justify-between p-4 border-b-2 bg-secondary bg-gray-500">
      <h1 className="text-3xl font-bold text-purple-700">Logo</h1>
      <Gnb>
        {/* <ul className="flex gap-6 text-2xl"> */}
        <ul>
          <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to="/">Home</Link>
          </li>
          <li className={location.pathname === '/about' ? 'active' : ''}>
            <Link to="/about">About</Link>
          </li>
          <li className={location.pathname === '/login' ? 'active' : ''}>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </Gnb>

      <div>
        <Button default>마이페이지</Button>
        <Button>마이페이지</Button>
      </div>
    </header>
  );
};

// const Gnb = tw.nav`
//   bg-primary p-3
// `;
const Gnb = tw.nav`
  ul{
    ${tw`flex gap-6`}
  }
// `;

export default Header;
