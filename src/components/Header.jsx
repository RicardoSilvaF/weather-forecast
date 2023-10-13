import React from 'react';
import styled from 'styled-components';
const Header = () => {
  return (
    <HeaderComponent>
      <h1>Levo um casaquinho?</h1>
    </HeaderComponent>
  );
};

export default Header;

const HeaderComponent = styled.div`
  color: #322FA5;
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 3px;
  margin-top: 15px;

  @media (max-width: 350px) {
    letter-spacing: 1px;
    font-size: 27px;
  }
`;
