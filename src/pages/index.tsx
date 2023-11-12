import type {
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';
import { signIn, signOut, useSession } from "next-auth/react";
import prisma from '../../lib/prisma';
import Head from "next/head";
import ReactPlayer from "react-player";
import Featuring from '../components/Featuring';
import NetworkBanner from '../components/NetworkBanner';
import VideoHeader from '../components/VideoHeader';
import { api } from "~/utils/api";
import { Lato } from 'next/font/google';

const lato = Lato({
  weight: ['300', '400'],
  style: 'normal',
  subsets: ['latin'],
});

const CLOUDFRONT_ADDRESS = 'https://dx19ntdwg65hl.cloudfront.net';

const buildSrc = (fileName : string) => `${CLOUDFRONT_ADDRESS}/exports/${fileName}.mp4`;

export const getStaticProps: GetStaticProps = async () => {
  const videos = await prisma.video.findMany({
    select: {
      category: true,
      featured: true,
      filmed: true,
      // filmDate: true,
      id: true,
      length: true,
      name: true,
      src: true,
    }
  });

  return {
    props: { videos },
    revalidate: 10,
  };
};

interface Video {
  category: object,
  featured: Array<Actor>
  filmed: Array<Actor>
  id: number,
  length: number,
  name: string,
  src: string,
}

interface Actor {
  name: string,
  id: number,
  headshot: string,
};

export default function Home({ videos }: InferGetStaticPropsType<typeof getStaticProps>) {
  const video: Video = videos.length
    ? videos.find(v => v.name === "Christmas '94")
    : null;

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${lato.style.fontFamily};
        }
      `}</style>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col bg-light-background w-full">
      <NetworkBanner />
        <section className="flex min-h-screen flex-col w-full sm:w-1/2 sm:m-auto mt-8 sm:mt-8">
          <div className="sm:w-full sm:m-auto sm:mb-0 sm:mt-0">
            {
              video && (
                <ReactPlayer
                  controls
                  height="100%"
                  url={buildSrc(video.src)}
                  width="100%"
                />
              )
            }

          </div>
          <VideoHeader title={video.name} length={video.length} />
          <p className="pl-1 text-sm">
            Featuring:
          </p>
          <Featuring featuring={video.featured.map((actor: Actor) => actor.name.toLowerCase())} />
        </section>
      </main>
    </>
  );
}

function AuthShowcase() {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}
