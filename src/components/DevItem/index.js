import React from 'react';
import './style.css';

const DevItem = (props) => {
    return (
        <li className="dev-item">
            <header>
                <img src={props.developer.avatar_url} alt={props.developer.name} />
                <div className="user-info">
                    <strong>{props.developer.name}</strong>
                    <span>{props.developer.techs.join(', ')}</span>
                </div>
            </header>
            <p>{props.developer.bio}</p>
            <a href={`http://github.com/${props.developer.github_username}`}>Github</a>
        </li>
    );
}

export default DevItem;