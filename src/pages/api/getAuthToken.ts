import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const client_id = process.env.NEXT_SPOTIFY_CLIENT_ID
    const client_secret = process.env.NEXT_SPOTIFY_CLIENT_SECRET
    const configAccountAPI = {
      baseURL: process.env.NEXT_ACCOUNTS_API_URL,
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    };

    const response = await axios.post(
      `${process.env.NEXT_ACCOUNTS_API_URL}token/`,
      {
        grant_type: 'client_credentials',
        client_id,
        client_secret,
      },
      configAccountAPI
    );

    res.status(response.status).json(response.data);
  } catch (error: any) {
    res.status(error.response?.status || 500).json(error.response?.data || {});
  }
}