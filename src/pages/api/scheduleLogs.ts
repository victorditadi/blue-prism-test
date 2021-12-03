import { NextApiRequest, NextApiResponse } from 'next';
import db from './db.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query } = req;
  if (query?.scheduleId) {
    res
      .status(200)
      .json(db.scheduleLogs.filter((log) => log.scheduleId.toString() === query.scheduleId));
  } else {
    res.status(200).json(db.scheduleLogs);
  }
}
