
import React, { useState } from 'react';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  // state = {
  //   name: '',
  //   number: ''
  // };

  const handleChange = e => {
      const { name, value } = e.target;
    // this.setState({ [e.target.name]: e.target.value });
     if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    // const { name, number } = this.state;
    if (name.trim() === '' || number.trim() === '') return;
 onSubmit({ name, number });
    setName('');
    setNumber('');
    // this.props.onSubmit({ name, number });
    // this.setState({ name: '', number: '' });
  };

  // render() {
  //   const { name, number } = this.state;

    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Enter name"
          required
        />
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          placeholder="Enter phone number"
          required
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }



