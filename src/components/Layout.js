import React, { useEffect } from 'react';
import Aos from 'aos';

const Layout = ({ children }) => {
  useEffect(() => {
    Aos.init({
      delay: 200,
      duration: 800,
    });
  }, []);

  return <div className="max-w-lg mx-auto relative pb-28 bg-orange-50">{children}</div>;
};

export default Layout;
