import React from 'react';
import { FigureProps } from '@/shared/type/figure';
import { SvgWrap } from './Figure.styles';

const EASYGOING = ({ checked }: FigureProps) => {
  return (
    <SvgWrap>
      <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          opacity={checked ? '1' : '0.15'}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M47.0977 15.8046C51.462 15.8046 55 12.2666 55 7.9023C55 3.53798 51.462 0 47.0977 0C42.7334 0 39.1954 3.53798 39.1954 7.9023C39.1954 12.2666 42.7334 15.8046 47.0977 15.8046ZM41.092 25.6034C41.092 31.585 36.6016 36.5177 30.8079 37.2146C30.9193 37.964 30.977 38.731 30.977 39.5115C30.977 48.0656 24.0426 55 15.4885 55C6.93444 55 0 48.0656 0 39.5115C0 30.9574 6.93444 24.023 15.4885 24.023C16.269 24.023 17.036 24.0807 17.7855 24.1921C18.4823 18.3984 23.415 13.908 29.3966 13.908C35.8558 13.908 41.092 19.1443 41.092 25.6034Z"
          fill="#121212"
        />
      </svg>
    </SvgWrap>
  );
};

export default EASYGOING;
