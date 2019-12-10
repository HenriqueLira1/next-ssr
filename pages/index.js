import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

function Home() {
    return (
        <div>
            <Head>
                <title>Home</title>
            </Head>
            <h1>Ola ET</h1>
            <Link href="/users">
                <a>Usuários</a>
            </Link>
        </div>
    );
}
export default Home;
