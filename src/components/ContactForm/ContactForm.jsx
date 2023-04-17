import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ContactForm = ({ onAddContact }) => {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleNumberChange = event => {
    setNumber(event.target.value);
  };


  const handleSubmit = event => {
    event.preventDefault();
    onAddContact(name, number);
    setName('');
    setNumber('');
  };

  return (
    <div className={'form__container'}>
      <form onSubmit={handleSubmit} className={'form'}>
        <label className={'form__label'}>
          <p className={'form__text'}>Name</p>
          <input
            type='text'
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            name='name'
            className={'form__input'}
            value={name}
            onChange={handleNameChange}
          />
        </label>

        <label className={'form__label'}>
          <p className={'form__text'}>Phone number</p>
          <input
            type='tel'
            pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
            title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
            name='number'
            required
            className={'form__input'}
            value={number}
            onChange={handleNumberChange}
          />
        </label>

        <button type='submit' className={'form__button'}>Add contact</button>
      </form>
    </div>
  );

};
ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
