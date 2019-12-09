import React from 'react';
import axios from 'axios';
import Link from 'next';

function User({ users }) {
    return (
        <div>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.login}</li>
                ))}
            </ul>
            <Link href="/">
                <a>Ola</a>
            </Link>
        </div>
    );
}

User.getInitialProps = async () => {
    const response = await axios.get('https://api.github.com/orgs/rocketseat/members');

    return { users: response.data };
};

export default User;
