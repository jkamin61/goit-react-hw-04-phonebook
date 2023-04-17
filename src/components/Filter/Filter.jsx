import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ onChange, filter }) => {

  return (
    <div className={'filter'}>
      <label className={'filter__label'}>Find contacts by name</label>
      <input
        type='text'
        name='filter'
        className={'filter__input'}
        value={filter}
        onChange={onChange}
      />
    </div>
  );

};
Filter.propTypes = {
  filter: PropTypes.string.isRequired,
};

export default Filter;
