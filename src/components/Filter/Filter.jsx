import React from 'react';


class Filter extends React.Component {
  render() {
    return (
      <div className={"filter"}>
        <label className={"filter__label"}>Find contacts by name</label>
        <input
          type="text"
          name="filter"
          className={"filter__input"}
          value={this.props.filter}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

export default Filter;
