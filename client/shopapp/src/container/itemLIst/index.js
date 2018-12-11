import React, { Component } from "react";

import { graphql, compose } from "react-apollo";

import {
  getJeansQuerry,
  getTshirtQuerry,
  getSunglassesQuerry,
  updateJeansMutation,
  updateTshirtMutation,
  updateGlassesMutation
} from "../../components/queries/queries";

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      name: "",
      type: "",
      color: "",
      id: "",
      ItemType: ""
    };
  }
  displayItems() {
    if (!this.state.edit) {
      return (
        <div className="main">
          {this.props.items.map((item, index) => {
            return (
              <div key={index} className="itemDiv">
                <div className="HeadItem">ITEM</div>
                <div>
                  <div>Name:</div>
                  <div>{item.name}</div>
                </div>
                <div>
                  <div>Type:</div>
                  <div>{item.type}</div>
                </div>
                <div>
                  <div>Color:</div>
                  <div>{item.color}</div>
                </div>
                <div className="deleteIcon">
                  <div>
                    <img
                      src={require("../../assets/images/edit.png")}
                      onClick={() =>
                        this.setState({
                          edit: true,
                          name: item.name,
                          type: item.type,
                          color: item.color,
                          id: item.id,
                          ItemType: item.__typename
                        })
                      }
                      alt="editIcon"
                    />
                  </div>
                  <div>
                    <img
                      src={require("../../assets/images/delete.png")}
                      onClick={() => this.props.delItemfunc(item.id)}
                      alt="deleteIcon"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
    } else {
      return (
        <div className="itemDiv editItemDiv">
          <div className="HeadItem">ITEM</div>
          <br />
          <div>
            <div>Name:</div>
            <input
              className="editInput"
              type="text"
              value={this.state.name}
              required
              onChange={e => this.setState({ name: e.target.value })}
            />
          </div>
          <div>
            <div>Type:</div>
            <input
              className="editInput"
              type="text"
              value={this.state.type}
              required
              onChange={e => this.setState({ type: e.target.value })}
            />
          </div>
          <div>
            <div>Color:</div>
            <input
              className="editInput"
              type="text"
              value={this.state.color}
              required
              onChange={e => this.setState({ color: e.target.value })}
            />
          </div>
          <br />
          <div className="editBtn">
            <button
              onClick={() =>
                this.setState({ edit: false, name: "", type: "", color: "" })
              }
            >
              Cancel
            </button>
            <button onClick={() => this.editHandler()}>Done</button>
          </div>
        </div>
      );
    }
  }
  editHandler() {
    if(this.state.name.length && this.state.color.length && this.state.type.length) {
    switch (this.state.ItemType) {
      case "jeans":
        this.props
          .updateJeansMutation({
            variables: {
              name: this.state.name,
              type: this.state.type,
              color: this.state.color,
              id: this.state.id
            },
            refetchQueries: [{ query: getJeansQuerry }]
          })
          .then(() => {
            this.setState({
              edit: false,
              name: "",
              type: "",
              color: "",
              id: "",
              ItemType: ""
            });
          });
        break;
      case "tshirt":
        this.props
          .updateTshirtMutation({
            variables: {
              name: this.state.name,
              type: this.state.type,
              color: this.state.color,
              id: this.state.id
            },
            refetchQueries: [{ query: getTshirtQuerry }]
          })
          .then(() => {
            this.setState({
              edit: false,
              name: "",
              type: "",
              color: "",
              id: "",
              ItemType: ""
            });
          });
        break;
      case "sunglasses":
        this.props
          .updateGlassesMutation({
            variables: {
              name: this.state.name,
              type: this.state.type,
              color: this.state.color,
              id: this.state.id
            },
            refetchQueries: [{ query: getSunglassesQuerry }]
          })
          .then(() => {
            this.setState({
              edit: false,
              name: "",
              type: "",
              color: "",
              id: "",
              ItemType: ""
            });
          });
        break;
      default:
    }
  }
  }
  render() {
    return <div>{this.displayItems()}</div>;
  }
}

export default compose(
  graphql(updateJeansMutation, { name: "updateJeansMutation" }),
  graphql(updateTshirtMutation, { name: "updateTshirtMutation" }),
  graphql(updateGlassesMutation, { name: "updateGlassesMutation" })
)(ItemList);
