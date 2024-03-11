import axios from 'axios';

const API_ENDPOINT = 'https://rickandmortyapi.com/api';
const API_TIMEOUT = 20000;

const httpClient = axios.create({
  baseURL: API_ENDPOINT,
  timeout: API_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const get = <T>(
  url: string,
  params?: Record<string, any>,
  headers?: any,
) =>
  httpClient.get<T>(url, {
    params,
    headers,
  });
