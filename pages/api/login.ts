import { NextApiRequest, NextApiResponse } from 'next';
import customAPI from 'lib/api/common/customAxios';
import Cookies from 'cookies';
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const expiresTime = new Date();
    expiresTime.setHours(expiresTime.getHours() + 1);

    const cookies = new Cookies(req, res);
    cookies.set('access_token', 'fakasdfs', {
      httpOnly: true,
      expires: expiresTime,
      path: '/',
    });
    const loginData = req.body;

    res.status(200).json({ message: 'succesfully logged in' });
  }
}
