import { NextApiRequest } from 'next';
import axios from 'axios';
import Cookies from 'cookie';

export function createAxiosInstance(req: NextApiRequest) {
  const instance = axios.create({
    baseURL: process.env.NEXT_ACCOUNTS_API_URL,
  });

  instance.interceptors.request.use((config) => {
    const cookies = Cookies.parse(req.headers.cookie || '');
    const accessToken = cookies.access_token;
    config.headers['Authorization'] = `Bearer ${accessToken}`;
    return config;
  });

  return instance;
}

// при истечении срока жизни токена возвращается ошибка в таком формате -
// {"error":{"status":401,"message":"Invalid access token"}}