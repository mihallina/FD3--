import React from "react";
import "./FilterSelect.css";

class FilterSelect extends React.Component {
  state = {
    inputText: "",
    isChecked: false,
  };

  textChanged = (eo) => {
    this.setState({ inputText: eo.target.value });
  };

  checkboxChanged = (eo) => {
    this.setState({ isChecked: eo.target.checked });
  };

  resetAll = () => {
    this.setState({isChecked: false, inputText: ''});
  };

  render() {
    let filteredArr = this.props.wordsArr.filter((word) =>
      word.toLowerCase().includes(this.state.inputText.toLowerCase())
    );

    if(this.state.isChecked){
        filteredArr = filteredArr.sort()
    }
    
    const selectCode = filteredArr.map((word, index) => (
      <option key={index} value={word}>
        {word}
      </option>
    ));

    return (
      <div>
        <input
          type="checkbox"
          id="filter"
          checked={this.state.isChecked}
          onChange={this.checkboxChanged}
        />
        <input
          type="text"
          id="text"
          value={this.state.inputText}
          onChange={this.textChanged}
        />
        <button onClick={this.resetAll}>сброс</button>
        <select id="select" size="5">
          {selectCode}
        </select>
      </div>
    );
  }
}

export default FilterSelect;
