import React, {useEffect, useState} from 'react';
import {getProjects} from 'endpoints/api';
import styles from './Home.module.css';

const Home = () => {
    const [projects, setProjects] = useState<string[]>();

    useEffect(() => {
        getProjects().then(res => {
            setProjects(res.data.data.map(p => p.name))
        })
    }, [])

    return (
        <div className={styles.Container}>
            Projects:
            <ul>
                {
                    projects?.map(name => <li>{name}</li>)
                }
            </ul>
        </div>
    );
}

export default Home;
