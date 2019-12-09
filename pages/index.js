import React from 'react';
import Link from 'next';

function Home() {
    return (
        <div>
            <h1>Ola ET</h1>
            <Link href="/">
                <a>Ola</a>
            </Link>
        </div>
    );
}
export default Home;
