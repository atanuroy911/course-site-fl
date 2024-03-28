// pages/api/login.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { pool } from '@/utils/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    pool.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: 'Error logging in' });
      } else {
        if (results.length > 0) {
          res.status(200).json({ message: 'Login successful' });
        } else {
          res.status(401).json({ error: 'Invalid email or password' });
        }
      }
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
