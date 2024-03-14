import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { activity } = req.body;
    try {
      const activities = await prisma.activity.create({
        data: {
            activity: activity,
        },
      });
      res.status(201).json(activities);
    } catch (error) {
      res.status(500).json({ error: 'Unable to create activities' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}