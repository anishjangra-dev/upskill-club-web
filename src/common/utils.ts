import { ApiCallResponse } from './interface';

const isErrorResponse = (response: ApiCallResponse<unknown>) => {
  return 'err' in response;
};

const getFormattedDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const dateObj = new Date(dateString);
  return dateObj.toLocaleDateString('en-US', options);
};

export const Utils = {
  isErrorResponse,
  getFormattedDate,
};
