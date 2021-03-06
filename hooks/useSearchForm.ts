import { ChangeEvent, useState } from 'react';
import { getLocalStorageValue, setLocalStorageValue } from '@/shared/utils/localStorage';
import { LOCAL_STORAGE_KEY } from '@/shared/constants/storageKey';
import { useRouter } from 'next/router';
import useToast from './useToast';
import { ToastType } from '@/shared/type/common';
import { Tag } from '@/shared/type/post';

const useSearchForm = () => {
  const [searchResult, setSearchResult] = useState<string>('');
  const notify = useToast();
  const router = useRouter();

  const changeSearchResult = (event: ChangeEvent<HTMLInputElement>) => {
    // const TAG_FLAG = '#';
    // const isFirstTyped = event.target.value.length === 1 && searchResult.length === 0;
    // const onlyTagFlagRemain = event.target.value === '#' && searchResult.length === 2;
    //
    // if (isFirstTyped) {
    //   setSearchResult(TAG_FLAG + event.target.value);
    //   return;
    // }
    //
    // if (onlyTagFlagRemain) {
    //   setSearchResult('');
    //   return;
    // }

    setSearchResult(event.target.value);
  };

  const searchByTag = (searchedTag: Tag) => {
    // const TAG_FLAG_INDEX = 0;
    // const searchedTag = resultHasTagFlag.slice(TAG_FLAG_INDEX + 1, resultHasTagFlag.length);

    if (searchedTag.trim().length === 0) {
      notify({
        type: ToastType.ERROR,
        message: '검색 할 태그를 입력하세요.',
      });
      return;
    }
    router.push({
      pathname: '/search/result',
      query: {
        tag: searchedTag,
      },
    });
    addSearchedRecentTags(searchedTag);
  };

  const addSearchedRecentTags = (searchedTag: Tag) => {
    const MAX_SEARCHED_RECENT_TAGS_LENGTH = 8;
    const currentSearchedRecentTags: Tag[] = getLocalStorageValue(LOCAL_STORAGE_KEY.SEARCHED_RECENT_TAGS) || [];

    const duplicatedIndex = currentSearchedRecentTags.findIndex((tag) => tag === searchedTag);

    if (duplicatedIndex > -1) {
      currentSearchedRecentTags.splice(duplicatedIndex, 1);
    }

    if (currentSearchedRecentTags.length === MAX_SEARCHED_RECENT_TAGS_LENGTH) {
      currentSearchedRecentTags.pop();
    }

    const newSearchedRecentTags = [searchedTag, ...currentSearchedRecentTags];

    setLocalStorageValue(LOCAL_STORAGE_KEY.SEARCHED_RECENT_TAGS, newSearchedRecentTags);
  };

  return {
    searchResult,
    searchByTag,
    changeSearchResult,
    addSearchedRecentTags,
    setSearchResult,
  };
};

export default useSearchForm;
