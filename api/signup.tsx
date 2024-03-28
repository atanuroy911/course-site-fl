import { NextApiRequest, NextApiResponse } from 'next';
import { pool } from '@/utils/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { username, email, password } = req.body;

    pool.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, password], (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: 'Error signing up' });
      } else {
        res.status(201).json({ message: 'User signed up successfully' });
      }
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}