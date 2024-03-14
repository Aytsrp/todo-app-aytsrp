import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'PUT') {
    const { activity } = req.body;
    try {
      const activities = await prisma.activity.update({
        where: { id: parseInt(id, 10) },
        data: { activity },
      });
      res.status(200).json(activities);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update activity' });
    }
  } else {
    res.setHeader('Allow', ['PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}