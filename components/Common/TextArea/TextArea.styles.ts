import styled from 'styled-components';
import { TextAreaProps } from '@/components/Common/TextArea/TextArea';
import theme from '@/styles/theme';

export const Textarea = styled.textarea<Pick<TextAreaProps, 'height' | 'borderRadius'>>`
  width: 100%;
  padding: 1.6rem 1.8rem 1.8rem 1.8rem;
  display: inline-block;
  text-align: start;
  cursor: text;
  height: ${({ height }) => height};
  border-radius: ${({ borderRadius }) => borderRadius};
  background: ${theme.colors.gray2};
  border: none;
  right: 0;
  ${theme.fonts.body}
  color: ${theme.colors.white};
  outline: none;
  resize: none;

  :focus {
    border: 0.1rem solid ${theme.colors.gray4};
  }
  ::placeholder {
    color: ${theme.colors.gray4};
  }
  :disabled {
    color: ${theme.colors.white};
    -webkit-text-fill-color: ${theme.colors.white};
    opacity: 1;
  }
`;
