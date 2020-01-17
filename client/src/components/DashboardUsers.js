import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../sass/DashboardUsers.scss';
// import '../sass/EventsContainer-media-queries.scss';

const DashboardUsers = (props) => {
    // const [isLoading, setIsLoading] = useState(false);
    const [users, setUsers] = useState([]);
    // const [isError, setIsError] = useState(false);

    async function fetchData() {
        try {
            const res = await fetch("/api/users");
            const resJson = await res.json();

            setUsers(resJson);
        } catch(error) {
            alert(error);
        }
    }

    useEffect(() => {
        fetchData();

    }, []);

    return (
        <div className="flexcenter-container">
            <div className="events-list">
                <ul>
                    {users.map((user, index) => {
                        return (
                            <li key={index}>
                                <div key={index} className="event">
                                    <div className="user-name">
                                        <h5>{user.name.firstName} {user.name.lastName}</h5>
                                    </div>
                                    <div className="user-roles">
                                        <p>Current Role: {user.currentRole}</p>
                                        <p>Desired Role: {user.desiredRole}</p>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
};

export default DashboardUsers;
    