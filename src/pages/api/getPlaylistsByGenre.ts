import { NextApiRequest, NextApiResponse } from 'next';
import {createAxiosInstance} from "@/pages/api/apiUtils/createAxiosInstance";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    let axiosInstance = createAxiosInstance(req)
    let genre = req.query.genre
    const response = await axiosInstance.get(
      `${process.env.NEXT_SPOTIFY_API_URL}search?q=%22genre%3A${genre}%22&type=playlist&limit=20&offset=0`,
    );

    res.status(response.status).json(response.data);
  } catch (error: any) {
    res.status(error.response?.status || 500).json(error.response?.data || {});
  }
}