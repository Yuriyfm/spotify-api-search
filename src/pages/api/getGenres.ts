import { NextApiRequest, NextApiResponse } from 'next';
import {createAxiosInstance} from "@/pages/api/apiUtils/createAxiosInstance";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    let axiosInstance = createAxiosInstance(req)

    const response = await axiosInstance.get(
      `${process.env.NEXT_SPOTIFY_API_URL}recommendations/available-genre-seeds`,
    );

    res.status(response.status).json(response.data);
  } catch (error: any) {
    res.status(error.response?.status || 500).json(error.response?.data || {});
  }
}