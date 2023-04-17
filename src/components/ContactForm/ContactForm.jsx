import React from 'react';
import PropTypes from 'prop-types';

class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleNumberChange = event => {
    this.setState({ number: event.target.value });
  };


  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    this.props.onAddContact(name, number);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <div className={'form__container'}>
        <form onSubmit={this.handleSubmit} className={'form'}>
          <label className={'form__label'}>
            <p className={'form__text'}>Name</p>
            <input
              type='text'
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              name='name'
              className={'form__input'}
              value={this.state.name}
              onChange={this.handleNameChange}
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
              value={this.state.number}
              onChange={this.handleNumberChange}
            />
          </label>

          <button type='submit' className={'form__button'}>Add contact</button>
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};

export default ContactForm;
