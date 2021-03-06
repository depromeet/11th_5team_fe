import { AUTH_TOKEN } from './auth';

export const LOCAL_STORAGE_KEY = {
  AUTH_TOKEN: AUTH_TOKEN,
  SEARCHED_RECENT_TAGS: 'searchedRecentTags',
} as const;

export const SESSION_STORAGE_KEY = {
  IS_ALREADY_VIEWED: 'isAlreadyViewed',
};
