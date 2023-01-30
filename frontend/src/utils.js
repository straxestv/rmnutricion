import Axios from "axios";
import Cookie from 'js-cookie';

export const getError = (error) => {
  return error.response && error.response.data.message
    ? error.response.data.message
    : error.message;
};
export const updateToken = (userInfo) => {
  if (userInfo) {
    Axios.defaults.headers.common['Authorization'] = `Bearer ${userInfo.token}`;
    Cookie.set('userInfo', JSON.stringify(userInfo));
  } else {
    delete Axios.defaults.headers.common['Authorization'];
    Cookie.remove('userInfo');
  }
}