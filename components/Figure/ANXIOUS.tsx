import React from 'react';
import { FigureProps } from '@/shared/type/figure';
import { SvgWrap } from './Figure.styles';

const ANXIOUS = ({ checked }: FigureProps) => {
  return (
    <SvgWrap>
      <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          opacity={checked ? '1' : '0.15'}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 55L13.908 0L20.7821 27.1839L27.5 0L34.4542 28.1402L41.4084 0L55.0003 55H41.092H27.8164H27.8161H13.908H0Z"
          fill="#121212"
        />
      </svg>
    </SvgWrap>
  );
};

export default ANXIOUS;
