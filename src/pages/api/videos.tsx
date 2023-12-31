/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { type NextApiRequest, type NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const buildCriteriaConditions = (featured: Array<string>, category: number) => {
  const hasFeatured = !!featured.length;
  const hasCategory = !!category;
  const conditions = [];

  if (hasCategory) {
    conditions.push({ categoryId: { equals: category } });
  }

  if (hasFeatured) {
    featured.forEach((cast: string) => {
      conditions.push({ featured: { some: { name: cast } } })
    });
  }

  return (hasFeatured || hasCategory) ? { AND: conditions } : {};
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const criteria = req?.query?.criteria && JSON.parse(req.query.criteria as string);
    const conditions = buildCriteriaConditions(criteria.featured, criteria.category);

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
      where: {
        hidden: false,
        ...conditions,
      },
    });

    res.status(200).json(videos);
  } catch (error) {
    console.error('Error fetching videos:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}