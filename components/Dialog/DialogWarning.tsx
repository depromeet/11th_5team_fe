import React, { ReactNode } from 'react';
import Image from 'next/image';
import Warning from 'public/svgs/warning.svg';
import styled from 'styled-components';
import theme from '@/styles/theme';

export interface DialogWarningProps {
  children: ReactNode;
}

const DialogWarning = ({ children }: DialogWarningProps) => {
  return (
    <DialogContainer>
      <Image src={Warning} alt="Warning" />
      <Title>{children}</Title>
    </DialogContainer>
  );
};

const DialogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.4rem 1.6rem 2.8rem;
`;

const Title = styled.p`
  margin-top: 1rem;
  text-align: center;
  ${theme.fonts.h4};
  color: ${theme.colors.white};
`;

export default DialogWarning;
