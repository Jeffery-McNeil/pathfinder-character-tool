import Ancestry from "./Ancestry";

function Basics ({ character, ancestry, background, job, abilityScores }) {

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
            <p>STR {abilityScores.length ? (abilityScores.find(element => element.name === 'Strength').score) : null} | + {abilityScores.length ? (abilityScores.find(element => element.name === 'Strength').bonus) : null}</p>
            <p>DEX {abilityScores.length ? (abilityScores.find(element => element.name === 'Dexterity').score) : null} | + {abilityScores.length ? (abilityScores.find(element => element.name === 'Dexterity').bonus) : null}</p>
            <p>CON {abilityScores.length ? (abilityScores.find(element => element.name === 'Constitution').score) : null} | + {abilityScores.length ? (abilityScores.find(element => element.name === 'Constitution').bonus) : null}</p>
            <p>INT {abilityScores.length ? (abilityScores.find(element => element.name === 'Intelligence').score) : null} | + {abilityScores.length ? (abilityScores.find(element => element.name === 'Intelligence').bonus) : null}</p>
            <p>WIS {abilityScores.length ? (abilityScores.find(element => element.name === 'Widsom').score) : null} | + {abilityScores.length ? (abilityScores.find(element => element.name === 'Widsom').bonus) : null}</p>
            <p>CHA {abilityScores.length ? (abilityScores.find(element => element.name === 'Charisma').score) : null} | + {abilityScores.length ? (abilityScores.find(element => element.name === 'Charisma').bonus) : null}</p>
        </div>
    )
}

export default Basics;