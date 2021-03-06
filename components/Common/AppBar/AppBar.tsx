import React, { ReactNode } from 'react';
import theme from '@/styles/theme';
import styled from 'styled-components';

export interface AppBarProps {
  children: ReactNode;
}

const LeftContainer = ({ children }: AppBarProps) => {
  return <ButtonContainer>{children}</ButtonContainer>;
};

const RightContainer = ({ children }: AppBarProps) => {
  return <RightButtonContainer>{children}</RightButtonContainer>;
};

const AppBar = ({ children }: AppBarProps) => {
  return <AppBarWrapper>{children}</AppBarWrapper>;
};

const AppBarWrapper = styled.header`
  z-index: 101;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  background-color: ${theme.colors.black};
  padding: 1rem 1.8rem;
  margin-right: -1.8rem;
  margin-left: -1.8rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: -1.2rem;
  margin-left: -1.2rem;

  > * {
    margin: 0 1.2rem;
  }
`;

const RightButtonContainer = styled(ButtonContainer)`
  margin-left: auto;
`;

export default Object.assign(AppBar, {
  Left: LeftContainer,
  Right: RightContainer,
});
