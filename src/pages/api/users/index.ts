import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Your endpoint logic here
    const user = { name: 'John Doe', email: 'john@example.com' };
    return res.status(200).json(user);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};