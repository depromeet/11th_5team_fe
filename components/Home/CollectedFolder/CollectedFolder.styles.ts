import styled from 'styled-components';
import theme from '@/styles/theme';

export const CollectedFolderContainer = styled.figure`
  width: 100%;
  cursor: pointer;
`;

export const Caption = styled.figcaption`
  padding-top: 8px;
`;

export const FolderName = styled.p`
  margin-bottom: 4px;
  ${theme.fonts.btn2};
  color: ${theme.colors.white};
`;

export const FolderCount = styled.span`
  ${theme.fonts.caption1};
  color: ${theme.colors.gray4};
`;

export const BoxContainer = styled.figure`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.4rem;
  height: calc(100% - 4.2rem);
  min-height: 16.5rem;
`;

export const FolderImage = styled.div<{ thumbnail: string }>`
  max-height: 50%;
  border-radius: 1rem;
  background-image: url(${(props) => props.thumbnail});
  background-color: ${theme.colors.gray3};
`;
