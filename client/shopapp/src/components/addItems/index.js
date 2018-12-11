import React, { Component } from "react";

import { graphql, compose } from "react-apollo";

import {
  addJeansMutation,
  addTshirtMutation,
  addGlassesMutation,
  getJeansQuerry,
  getTshirtQuerry,
  getSunglassesQuerry
} from "../queries/queries";

import "./addItems.css";

class AddItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      type: "",
      color: "",
      item: "select item",
      successfullMsg:null
    };
  }
  submitForm(e) {
    e.preventDefault();
    switch (this.state.item) {
      case "jeans":
        this.props.addJeansMutation({
          variables: {
            name: this.state.name,
            type: this.state.type,
            color: this.state.color
          },
          refetchQueries:[{query:getJeansQuerry}]
        }).then(() => {
          this.successfullyAdded("Successfully added Jeans")
        });
        break;
      case "tshirt":
        this.props.addTshirtMutation({
          variables: {
            name: this.state.name,
            type: this.state.type,
            color: this.state.color
          },
          refetchQueries:[{query:getTshirtQuerry}]
        }).then(() => {
          this.successfullyAdded("Successfully added T-Shirt")
        });
        break;
      case "sunglasses":
        this.props.addGlassesMutation({
          variables: {
            name: this.state.name,
            type: this.state.type,
            color: this.state.color
          },
          refetchQueries:[{query:getSunglassesQuerry}]
        }).then(() => {
          this.successfullyAdded("Successfully added Sunglasses")
        });
        break;
      default:
    }
  }
  successfullyAdded(msg) {
    this.setState({
      successfullMsg:msg,
      name:"",
      type:"",
      color:"",
      item:"select item"
    })
    setTimeout(() => {
      this.setState({successfullMsg:null})
    }, 2000);
  }
  render() {
    return (
      <form onSubmit={this.submitForm.bind(this)}>
       <div>{this.state.successfullMsg}</div> 
        <div className="headDiv">ADD ITEM</div>
        <label htmlFor="name">
          <span>Name:</span>
          <input
            type="text"
            value={this.state.name}
            required
            onChange={e => this.setState({ name: e.target.value })}
          />
        </label>
        <label htmlFor="type">
          <span>Type:</span>
          <input
            type="text"
            value={this.state.type}
            required
            onChange={e => this.setState({ type: e.target.value })}
          />
        </label>
        <label htmlFor="color">
          <span>Color:</span>
          <input
            type="text"
            value={this.state.color}
            required
            onChange={e => this.setState({ color: e.target.value })}
          />
        </label>
        <select
          value={this.state.item}
          onChange={e => this.setState({ item: e.target.value })}
        >
          <option disabled value="select item">
            Select Item
          </option>
          <option value="jeans">Jeans</option>
          <option value="tshirt">T Shirt</option>
          <option value="sunglasses">Sunglass</option>
        </select>
        <button>Submit</button>
      </form>
    );
  }
}

export default compose(
  graphql(addJeansMutation, { name: "addJeansMutation" }),
  graphql(addTshirtMutation, { name: "addTshirtMutation" }),
  graphql(addGlassesMutation, { name: "addGlassesMutation" })
)(AddItems);
