import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'DELETE') {
    try {
      await prisma.activity.delete({
        where: { id: parseInt(id, 10) },
      });
      res.status(200).json({ message: 'Activity deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete activity' });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    res.setHeader('Allow', ['DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}