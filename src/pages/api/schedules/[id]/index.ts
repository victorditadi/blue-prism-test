import { NextApiRequest, NextApiResponse } from 'next';
import db from '../../db.json';

export default function userHandler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
    method,
    body,
  } = req;

  if (method === 'PUT') {
    const scheduleToBeUpdatedIndex = db.schedules.findIndex(
      (schedule) => schedule.id.toString() === id
    );
    db.schedules[scheduleToBeUpdatedIndex] = body;
    res.status(200).end(`updated`);
  } else {
    res.setHeader('Allow', ['GET', 'PUT']);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
