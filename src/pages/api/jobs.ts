import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const options = {
    method: "GET",
    url: "https://jobsearch4.p.rapidapi.com/api/v2/Jobs/Search",
    params: req.query,
    headers: {
      "X-RapidAPI-Key": "3eacc72e4amshb5e94d827aaf7acp12ece2jsnec5609b4f77e",
      "X-RapidAPI-Host": "jobsearch4.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    res.status(200).json(response.data.data)
  } catch (error) {
    console.error(error);
    res.status(400).json({name:"Error"})
  }
}
