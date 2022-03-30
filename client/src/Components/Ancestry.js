import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import AncestryCard from "./AncestryCard"
import '../Css/Ancestry.css'

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '80%',
  },
};

function Ancestry () {
    const [ancestries, setAncestries] = useState([])

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    useEffect(() => {
      fetch("https://api.pathfinder2.fr/v1/pf2/ancestry", {
        headers: {
          Authorization: "da468b89-2bf8-4e2b-a939-79c6e6ef25ce"
        }
      }).then(response => response.json())
      .then((data) => setAncestries(data.results))
    }, []);

  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }
  
    return (
      <>
      <div id="main"></div>
      <div>
        <button className="button" onClick={openModal}>Ancestry</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Select Ancestry</h2>
          <button onClick={closeModal}>close</button>
          <div>
            {ancestries.map((ancestry) => { 
              return (
                <AncestryCard key={ancestry._id} ancestry={ancestry}/>
              )
            })}
          </div>
        </Modal>
      </div>
      </>
    );

}

export default Ancestry;