import React, { useContext, useEffect } from 'react'
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext'


const Users = () => {

    const githubContext = useContext(GithubContext);
    useEffect(() => {
        githubContext.defaultUsers();
        // eslint-disable-next-line 
    }, [])

    const { loading, users } = githubContext

    if (loading) {
        return <Spinner />
    }



    return (
        <div style={userStyle}>
            {users.map(user => (
                <UserItem key={user.id} user={user} />
            ))}
        </div>
    )

}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: '1rem'

}


export default Users
