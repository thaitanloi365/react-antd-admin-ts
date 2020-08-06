import request from 'utils/request';

import api from './api';
import config from 'utils/config';

const gen = (params) => {
  let url = config.apiPrefix + params;
  let method = 'GET';

  const paramsArray = params.split(' ');
  if (paramsArray.length === 2) {
    method = paramsArray[0];
    url = config.apiPrefix + paramsArray[1];
  }

  return function (data) {
    return request({
      url,
      data,
      method,
    });
  };
};

const APIFunction = {};
for (const key in api) {
  APIFunction[key] = gen(api[key]);
}

export default APIFunction;
