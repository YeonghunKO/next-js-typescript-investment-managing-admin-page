import { NextApiRequest, NextApiResponse } from 'next';
import customAPI from 'lib/api/common/customAxios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const loginData = req.body;
    console.log('loginData', loginData);

    //   const response = await customAPI({url:'login'})
    const token = 'fake token';
    res.setHeader('Set-Cookie', token);
    res.status(200).json({ message: 'succesfully logged in' });
  }
}
