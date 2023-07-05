import axios from 'axios';
import { getToken } from '../utils/storage';

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};
const url = 'http://localhost:3004/';
export const apiCall = async (endpoint, method, data) => {
  const token = await getToken();

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return await axios[method](`${url}${endpoint}`, data).then((res) => res);
};
