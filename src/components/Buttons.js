import React, {useState} from 'react'
import {graphql} from 'react-apollo';

// CSS
import '../styles/Buttons.css'

// Queries
import {queryCharactersAndLocations} from '../queries/queries'

function Buttons({data}) {
    function createEpisode() {
        let newEpisodeNumber = localStorage.length+1;
        let newEpisodeCharacters = data.charactersByIds;
        let newEpisodeLocations = data.locationsByIds;
        let newEpisode = {
            episodeNumber: newEpisodeNumber,
            characters: newEpisodeCharacters,
            locations: newEpisodeLocations,
        }

        let episodes = {
            ...newEpisode
        }

        localStorage.setItem('episode' +newEpisodeNumber, JSON.stringify(episodes));
        window.location.reload()
    }
    return (
        <div className='App-main-buttons'>
            <button 
            id="App-main-buttons-create"
            onClick={createEpisode}>
                New episode
            </button>
        </div>
    )
}

export default graphql(queryCharactersAndLocations)(Buttons);
