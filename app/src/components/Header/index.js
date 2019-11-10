import React from 'react';

import { HeaderPage } from './styles';

const Header = ({ text }) => {
  return(
    <HeaderPage>
      { text }
    </HeaderPage>
  )
};

export default Header;