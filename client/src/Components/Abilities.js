import React, { useState } from 'react';
import Modal from 'react-modal';
import JobChoice from './JobChoice';
import '../Css/Abilities.css'

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#39525C'
  },
};

function Abilities ({ ancestry, background, job }) {
    const [strength, setStrength] = useState(10)
    const [dexterity, setDexterity] = useState(10)
    const [constitution, setConstitution] = useState(10)
    const [intelligence, setIntelligence] = useState(10)
    const [wisdom, setWisdom] = useState(10)
    const [charisma, setCharisma] = useState(10)
    const [normal, setNormal] = useState(true)
      
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    const abilityChoice = [
      "Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"
    ]

    const filteredAbility = abilityChoice.filter((choice)=> { return (
      choice !== abilityName(ancestry ? ancestry.ability_boost_1 : null) && choice !== abilityName(ancestry ? ancestry.ability_boost_2 : null) && choice !== abilityName(ancestry ? ancestry.ability_flaw: null)
    )})

    const filteredBackground = abilityChoice.filter((choice)=> { return (
      choice !== (background ? background.ability_boost_1 : null) && choice !== (background ? background.ability_boost_2 : null)
    )})

    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
    }
  
    function closeModal() {
      setIsOpen(false);
    }

    function abilityName (arg) {
      switch (arg) {
          case 'str': return "Strength"
          case 'dex': return "Dexterity"
          case 'con': return "Constitution"
          case 'int': return "Intelligence"
          case 'wis': return "Wisdom"
          case 'cha': return "Charisma"
      }
    }

    function abilitySet (arg) {
      switch (arg) {
          case 'Strength': return setStrength(strength + 2)
          case 'Dexterity': return setDexterity(dexterity + 2)
          case 'Constitution': return setConstitution(constitution + 2)
          case 'Intelligence': return setIntelligence(intelligence + 2)
          case 'Wisdom': return setWisdom(wisdom + 2)
          case 'Charisma': return setCharisma(charisma + 2)
      }
    }

    function abilityFlawSet (arg) {
      switch (arg) {
          case 'Strength': return setStrength(strength - 2)
          case 'Dexterity': return setDexterity(dexterity - 2)
          case 'Constitution': return setConstitution(constitution - 2)
          case 'Intelligence': return setIntelligence(intelligence - 2)
          case 'Wisdom': return setWisdom(wisdom - 2)
          case 'Charisma': return setCharisma(charisma - 2)
      }
    }

    function ancestryChoice(event) {
        setStrength(10)
        setDexterity(10)
        setConstitution(10)
        setIntelligence(10)
        setWisdom(10)
        setCharisma(10)
        abilitySet(event.target.value)
    }

    function backgroundChoiceOne(event) {
      abilitySet(event.target.value)
    }

    function backgroundChoiceTwo(event) {
      abilitySet(event.target.value)
    }

    function freeBoost(event) {
       abilitySet(event.target.value) 
    }

    function handleClick () {
        abilitySet(abilityName(ancestry.ability_boost_1))
        abilitySet(abilityName(ancestry.ability_boost_2))
        abilityFlawSet((abilityName(ancestry.ability_flaw)))

        const abilities = {
          Strength : strength,
          Dexterity : dexterity,
          Constitution : constitution,
          Intelligence : intelligence,
          Widsom : wisdom,
          Charisma : charisma
        }

        const abilitiesArr = Object.entries(abilities)
        
        fetch('./ability_scores', {
          method: 'DELETE'
        })

        abilitiesArr.map((ability)=> {
          const newAbility = {
              name: ability[0],
              score: ability[1],
              bonus: ((ability[1]-10) / 2),
              character_id: localStorage.getItem('characterId')
          }

          return (
          fetch('/ability_scores', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(newAbility)
          }).then((response)=> response.json())
          .then((data)=> console.log(data))
          )

      })
    }

    function jobAbility(arg) {
        setNormal(!normal)
        abilitySet(arg)
    }
  
    return (
      <>
      <div id="main"></div>
      <div>
        <button className="button" onClick={openModal}>Abilities</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Select Abilities</h2>
          <div>
            <h3>Ancestry</h3>
              <select className="ability-select" onChange={ancestryChoice}>
                <option>Choose ability</option>
                {filteredAbility.map((choice)=> { return (
                    <option value={choice} key={choice} name={choice}>{choice}</option>
                  )
                })}
              </select>
              <p>+ {ancestry ? abilityName(ancestry.ability_boost_1) : null}</p>
              <p>+ {ancestry ? abilityName(ancestry.ability_boost_2) : null}</p>
              <p>- {ancestry ? abilityName(ancestry.ability_flaw) : null}</p>
            <h3>Background</h3>
              <select className="ability-select" onChange={backgroundChoiceOne}>
                <option>Choose ability</option>
                <option value={background ? background.ability_boost_1 : null}>{background ? background.ability_boost_1 : null}</option>
                <option value={background ? background.ability_boost_2 : null}>{background ? background.ability_boost_2 : null}</option>
              </select>
              <select className="ability-select" onChange={backgroundChoiceTwo}>
                <option>Choose ability</option>
                {filteredBackground.map((choice)=> { return (
                      <option value={choice} key={choice}>{choice}</option>
                    )
                })}
              </select>
            <JobChoice job={job} jobAbility={jobAbility}/>
            <h3>Free Boosts</h3>
            <div>
              <input type="checkbox" value="Strength" name="Strength" onClick={freeBoost} />Strength
              <input type="checkbox" value="Dexterity" name="Dexterity" onClick={freeBoost} />Dexterity
              <input type="checkbox" value="Constitution" name="Constitution" onClick={freeBoost} />Constitution
              <input type="checkbox" value="Intelligence" name="Intelligence" onClick={freeBoost} />intelligence
              <input type="checkbox" value="Wisdom" name="Wisdom" onClick={freeBoost} />Wisdom
              <input type="checkbox" value="Charisma" name="Charisma" onClick={freeBoost} />Charisma
            </div>
              

          </div>
          <button id='ability-button' onClick={handleClick}>Select</button>
          
        </Modal>
      </div>
      </>
    );

}

export default Abilities;