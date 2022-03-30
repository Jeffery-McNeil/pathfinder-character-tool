import Ancestry from "./Ancestry";

function Basics ({ character, ancestry, background, job }) {
    let size

    
    function sizeName(arg) {
        switch (arg) {
            case 'sma' : return "Small"
            case 'med' : return "Med"
            default : return null
        }
    }

    return (
        <div>
            <div>
                <p>Level: {character.level}</p>
            </div>
            <div>
                <p>Character Name: {character.name}</p>
            </div>
            <div>
                <p>Ancestry: {ancestry ? ancestry.name : null}</p>
            </div>
            <div>
                <p>Background: {background ? background.name : null}</p>
            </div>
            <div>
                <p>Class: {job ? job.name : null}</p>
            </div>
            <p>Size: {ancestry ? sizeName(ancestry.size) : null}</p>
            <p>Speed: {ancestry ? ancestry.speed : null}</p>
            <p>STR</p>
            <p>DEX</p>
            <p>CON</p>
            <p>INT</p>
            <p>WIS</p>
            <p>CHA</p>
        </div>
    )
}

export default Basics;