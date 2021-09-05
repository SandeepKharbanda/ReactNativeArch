import ENV from '../config/appEnvironment/env.json';
import LocalStorage from '../services/localStorage';
import {TOKEN} from './constants';

const {protocol, baseUrl} = ENV;
const configApi = `${protocol}${baseUrl}`;

export const postRequest = (apiPath, params) => {
  return new Promise(async (resolve, reject) => {
    try {
      let configURL = `${configApi}${apiPath}`;

      const userToken = await LocalStorage.getItem(TOKEN);
      const authorization = userToken ? userToken : '';

      const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: authorization,
      };

      const response = await fetch(configURL, {
        method: 'POST',
        headers,
        body: JSON.stringify(params),
      });
      response
        .json()
        .then(responseJSON => {
          if (response.status >= 200 && response.status < 300) {
            resolve(responseJSON);
          } else {
            let error = new Error(`${responseJSON.message}`);
            reject(error);
          }
        })
        .catch(err => {
          reject(err);
        });
    } catch (error) {
      reject(error);
    }
  });
};

export const getRequest = (apiPath, params) => {
  return new Promise(async (resolve, reject) => {
    try {
      let queryParams = params
        ? Object.keys(params)
            .map(
              key =>
                encodeURIComponent(key) + '=' + encodeURIComponent(params[key]),
            )
            .join('&')
        : '';
      let configURL = `${configApi}${apiPath}?${queryParams}`;

      const userToken = await LocalStorage.getItem(TOKEN);
      const authorization = userToken ? userToken : '';
      const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: authorization,
      };
      const response = await fetch(configURL, {
        method: 'GET',
        headers,
      });
      response
        .json()
        .then(responseJSON => {
          if (response.status >= 200 && response.status < 300) {
            resolve(responseJSON);
          } else {
            let error = new Error(`${responseJSON.message}`);
            reject(error);
          }
        })
        .catch(err => {
          if (response.status >= 200 && response.status < 300) {
            resolve(response);
          } else {
            reject(err);
          }
        });
    } catch (error) {
      reject(error);
    }
  });
};
