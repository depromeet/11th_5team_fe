import React, { ChangeEvent, FormEvent } from 'react';
import { CommonTextField } from '@/components/Common';
import Close from 'public/svgs/close.svg';
import { Tag } from '@/shared/type/post';

interface SearchFieldProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (searchedTag: Tag) => void;
  onClickRightSideIcon?: () => void;
}
const SearchField = ({ value, onChange, onSubmit, onClickRightSideIcon }: SearchFieldProps) => {
  return (
    <form
      action=""
      onSubmit={(event: FormEvent) => {
        event.preventDefault();
        onSubmit(value);
      }}
    >
      <CommonTextField
        value={value}
        onChange={onChange}
        rightSideIcon={Close.src}
        placeholder={'궁금한 내용을 태그로 검색해보세요.'}
        onClickRightSideIcon={onClickRightSideIcon}
        hasRightSideIcon={value.length !== 0}
        isSearchField={true}
      />
    </form>
  );
};

export default SearchField;
