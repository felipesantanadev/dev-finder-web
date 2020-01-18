import React, { useEffect, useState } from 'react';
import './style.css';

const RegisterForm = ( {onSubmit}) => {
    const [coordinates, setCoordinates] = useState([0, 0]);
    const [githubUsername, setGithubUsername] = useState('');
    const [techs, setTechs] = useState('');

    useEffect(() => {

        // Get User Location
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            setCoordinates([latitude, longitude]);
        }, (err) => {
            console.log(err);
        }, {
            timeout: 30000
        });


    }, []); // useEffect

    async function handleSubmit(e) {
        e.preventDefault();
        const response = await onSubmit({
            github_username: githubUsername,
            techs,
            latitude: coordinates[0],
            longitude: coordinates[1]
          });

          if (response.status == 200) {
            setGithubUsername('');
            setTechs('');
          }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-block">
                <label htmlFor="github_username">Github Username</label>
                <input id="github_username"
                    name="github_username"
                    value={githubUsername}
                    onChange={e => setGithubUsername(e.target.value)} />
            </div>

            <div className="input-block">
                <label htmlFor="techs">Technologies</label>
                <input id="techs"
                    name="techs"
                    value={techs}
                    onChange={e => setTechs(e.target.value)} />
            </div>

            <div className="input-group">
                <div className="input-block">
                    <label htmlFor="latitude">Latitude</label>
                    <input id="latitude" name="latitude" value={coordinates[0]} />
                </div>

                <div className="input-block">
                    <label htmlFor="longitude">Longitude</label>
                    <input id="longitude" name="longitude" value={coordinates[1]} />
                </div>
            </div>
            <button type="submit">Register</button>
        </form>
    )
}

export default RegisterForm;