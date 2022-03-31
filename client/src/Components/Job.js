import React, { useState, useEffect }  from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import JobCard from './JobCard';
import '../Css/Job.css'

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
    width: '80%',
    backgroundColor: '#39525C'
  },
};

function Background ({ update }) {
    const [jobs, setJobs] = useState([])

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    useEffect(() => {
      fetch("https://api.pathfinder2.fr/v1/pf2/class", {
        headers: {
          Authorization: "da468b89-2bf8-4e2b-a939-79c6e6ef25ce"
        }
      }).then(response => response.json())
      .then((data) => setJobs(data.results))
    }, []);
    
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
    }
  
    function closeModal() {
      setIsOpen(false);
    }
  
    return (
      <>
      <div id="main"></div>
      <div>
        <button className="button" onClick={openModal}>Class</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Select Class</h2>
          <div className='job-container'>
            {jobs.map((job)=> { return(
              <JobCard key={job.name} job={job} update={update}/>
            )})}
          </div>
        </Modal>
      </div>
      </>
    );

}

export default Background;