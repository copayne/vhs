import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const criteria = req?.query?.criteria && JSON.parse(req.query.criteria as string);

    const videos = await prisma.video.findMany({
      select: {
        category: true,
        featured: true,
        filmed: true,
        filmDate: true,
        id: true,
        length: true,
        name: true,
        src: true,
      },
      orderBy: {
        [criteria?.orderBy.field || 'filmDate']: criteria?.orderBy?.sort || 'asc',
      },
    });

    res.status(200).json(videos);
  } catch (error) {
    console.error('Error fetching videos:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}