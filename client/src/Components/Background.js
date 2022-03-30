import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import BackgroundCard from './BackgroundCard'

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: '80%',
    width: '80%'
  },
};

function Background () {
    const [backgrounds, setBackgrounds] = useState([])
  
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
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

    useEffect(() => {
      fetch("https://api.pathfinder2.fr/v1/pf2/background", {
        headers: {
          Authorization: "da468b89-2bf8-4e2b-a939-79c6e6ef25ce"
        }
      }).then(response => response.json())
      .then((data) => setBackgrounds(data.results))
    }, []);
  
    return (
      <>
      <div id="main"></div>
      <div>
        <button className="button" onClick={openModal}>Background</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Select Background</h2>
          <button onClick={closeModal}>close</button>
          {backgrounds.map((background) => { return(
            <BackgroundCard key={background.name} background={background} />
          )})}
        </Modal>
      </div>
      </>
    );

}

export default Background;