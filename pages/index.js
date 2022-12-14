import Head from 'next/head';
import axios from 'axios';

import { Feed, Sidebar, Widgets } from '../components';

export default function Home({ newsResults, randomUsersResults }) {
  console.log('123123', process.env.NEXT_PUBLIC_FIREBASE_API_KEY);
  return (
    <div>
      <Head>
        <title>Twitter</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main className="flex min-h-screen mx-auto">
        <Sidebar />
        <Feed />
        <Widgets
          newsResults={newsResults}
          randomUsersResults={randomUsersResults}
        />
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const newsResponse = await axios.get(
    'https://saurav.tech/NewsAPI/top-headlines/category/business/us.json',
    {
      headers: {
        'Accept-Encoding': 'gzip,deflate,compress',
      },
    }
  );

  const randomUsersResponse = await axios.get(
    'https://randomuser.me/api/?results=30&inc=name,login,picture',
    {
      headers: {
        'Accept-Encoding': 'gzip,deflate,compress',
      },
    }
  );

  return {
    props: {
      newsResults: newsResponse?.data?.articles || [],
      randomUsersResults: randomUsersResponse?.data?.results || [],
    },
  };
}
