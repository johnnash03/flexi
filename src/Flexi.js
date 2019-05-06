import React, { Component } from 'react';
import './Flexi.css';
class Flexi extends Component {
  constructor(props) {
    super(props);
    this.state = {formData: {}};
  }

  onChange = ({target: {name, value}}) => {
    const formData = {...this.state.formData, [name]: value}
    this.setState({...this.state, formData})
  }

  renderTextField = ({name, label}) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <input type="text" name={name} onChange={this.onChange}/>
      </div>
    )
  }

  renderDropDown = (item) => {
    const optionsHtml = item.values.map((value) => {
      return <option value={value} key={value}>{value}</option>
    })
    return (
      <div key={item.name}>
        <label>{item.label}</label>
        <select name={item.name} onChange={this.onChange}>
          {optionsHtml}
        </select>
      </div>
    );
  }

  submit = () => {
    this.props.onSubmit(this.state.formData);
  }

  render() {
    const formHtml = this.props.config.items.map(item => {
      if(item.type === "TextField") {
        return this.renderTextField(item); 
      } else if(item.type === "DropDown"){
        return this.renderDropDown(item);
      }
    })
    return (
      <div>
        {formHtml}
        <button onClick={this.submit}>Submit</button>
      </div>
    )
  }
}

export default Flexi;