import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { type NextApiRequest, type NextApiResponse } from 'next';

const client = new S3Client({region: process.env.S3_REGION });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const file = req?.query?.file && req.query.file;

    if (file) {
      const command = new GetObjectCommand({
        Bucket: process.env.S3_BUCKET_NAME,
        Key: `exports/${file}`,
      });
    
      const url = await getSignedUrl(client, command, { expiresIn: 60 });
  
      res.status(200).json(url);
    }
  } catch (error) {
    console.error('Error fetching url:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}