import React from 'react';
import HeadNav from './HeadNav/HeadNav';
import SideNav from './SideNav/SideNav';
import ContentRegion from './ContentRegion/ContentRegion';

import './Layout.css'

const Layout = (props) => {
  return (
    <div className="Layout">
      <HeadNav />
      <SideNav />
      <ContentRegion>{props.children}</ContentRegion>
    </div>
  );
}

export default Layout;
