import React, {useState} from 'react'

// CSS
import '../styles/Episode.css'

function Episode({episodeNumber, episodeLocations, episodeCharacters}) {
    let [openEpisode, setOpenEpisode] = useState(false);

    function switchOpenEpisode() {
        setOpenEpisode(!openEpisode);
    }

    return (
        <button
            onClick= {switchOpenEpisode}
            style= {{height: openEpisode?'500px':'30px'}}
            className="App-main-screen-episode">

            <div>Episode {episodeNumber}</div>

            <h2>Locations</h2>

            <ul>
                {episodeLocations.map(location =>
                <li className="App-main-screen-episode-location">{location.name}</li>
                )}
            </ul>

            <h2>Characters</h2>
            <ul>
                {episodeCharacters.map(character =>
                    <li>
                        <img src={character.image} alt={character.name}></img>
                        <p>{character.name}</p>
                    </li>          
                )}
            </ul>
        </button>
    )
}

export default Episode
