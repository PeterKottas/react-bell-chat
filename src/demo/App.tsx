import * as React from 'react';
require('./app.scss');
import { Routes, Route, Outlet, Link, useMatch } from 'react-router-dom';
import Standard from './pages/Standard';
import Mobile from './pages/Mobile';
import classNames from 'classnames';

const Layout = () => {
  const mobileMatch = useMatch('/mobile');
  return (
    <div
      className={classNames('container', {
        'container--mobile': mobileMatch,
      })}
    >
      <h1 className="text-center">react-bell-chat</h1>
      <p className="text-center buttons-wrapper">
        <a
          href="https://github.com/PeterKottas/react-bell-chat"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <Link to="/">Home</Link>
        <Link to="/mobile">Mobile</Link>
      </p>
      <div className="install">
        <code>yarn add react-bell-chat</code>
      </div>
      <Outlet />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Standard />} />
        <Route path="mobile" element={<Mobile />} />
      </Route>
    </Routes>
  );
};

export default App;
