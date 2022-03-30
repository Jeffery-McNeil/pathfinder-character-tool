import React, { useState } from 'react';
import { useHistory } from "react-router-dom"
import Modal from 'react-modal';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function CreateCharacter () {
    const [formData, setFormData] = useState({
        name: "",
        level: 1,
        user_id: localStorage.getItem('user')
    })

    const history = useHistory()

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

    function handleChange (event) {
        const name = event.target.name;
        let value = event.target.value;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    function onSubmit (event) {
        event.preventDefault();

        handleSubmit(event, formData)
    }

    function handleSubmit (event, newItem) {
        event.preventDefault();
        fetch('/characters', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newItem)
        }).then((response)=> response.json())
        .then((data)=> localStorage.setItem('characterId', `${data.id}`))
        history.push('./character')
    }
  
    return (
      <>
      <div id="main"></div>
      <div>
        <button className="button" onClick={openModal}>Create a new Character</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Create a Character</h2>
          <button onClick={closeModal}>close</button>
          <form onSubmit={onSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange}/>
            </label>
            <select name="level" value={formData.level} onChange={handleChange}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
                <option value={11}>11</option>
                <option value={12}>12</option>
                <option value={13}>13</option>
                <option value={14}>14</option>
                <option value={15}>15</option>
                <option value={16}>16</option>
                <option value={17}>17</option>
                <option value={18}>18</option>
                <option value={19}>19</option>
                <option value={20}>20</option>
            </select>
            <input type="submit" value="Submit"/>
          </form>
        </Modal>
      </div>
      </>
    );

}

export default CreateCharacter;