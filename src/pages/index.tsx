/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type {
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';
import prisma from '../../lib/prisma';
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Featuring from '~/components/Featuring';
import Footer from '~/components/Footer';
import Library from '~/components/Library';
import NetworkBanner from '../components/NetworkBanner';
import VideoDetails from '~/components/VideoDetails';
import VideoPlayer from '~/components/VideoPlayer';
import { api } from "~/utils/api";
import { Inter } from 'next/font/google';

const interFont = Inter({
  weight: ['300', '400', '500', '600'],
  style: 'normal',
  subsets: ['latin'],
});

export const getStaticProps: GetStaticProps = async () => {
  const categories = await prisma.category.findMany({
    select: {
      id: true,
      name: true,
    }
  });

  return {
    props: { categories },
    revalidate: 10,
  };
};

export interface Video {
  category: Category,
  featured: Array<Actor>
  filmed: Array<Actor>
  filmDate: string,
  id: number,
  length: number,
  name: string,
  src: string,
}

export interface Category {
  id: number,
  name: string,
}

export interface Actor {
  name: string,
  id: number,
  headshot: string,
};

export default function Home({ categories }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${interFont.style.fontFamily};
        }
      `}</style>
      <Head>
        <title>The Payne Tapes</title>
        <meta name="description" content="Payne VHS digitization project" />
        <link rel="icon" href="/vhs-fav.ico" />
      </Head>
      <main className="bg-default-background min-h-screen w-full scroll-smooth">
        <section>
          <NetworkBanner />
          <VideoPlayer />
        </section>
        <section className="min-h-screen w-full sm:max-w-screen-md sm:m-auto mt-0">
          <VideoDetails categories={categories} />
          <Featuring />
          <Library categories={categories} />
        </section>
        <Footer />
      </main>
    </>
  );
}

// function AuthShowcase() {
//   const { data: sessionData } = useSession();

//   const { data: secretMessage } = api.example.getSecretMessage.useQuery(
//     undefined, // no input
//     { enabled: sessionData?.user !== undefined }
//   );

//   return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       <p className="text-center text-2xl text-white">
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {secretMessage && <span> - {secretMessage}</span>}
//       </p>
//       <button
//         className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
//         onClick={sessionData ? () => void signOut() : () => void signIn()}
//       >
//         {sessionData ? "Sign out" : "Sign in"}
//       </button>
//     </div>
//   );
// }
