import React, { Component } from 'react';

import { graphql, compose } from 'react-apollo';

import '../style.css';
import { getTshirtQuerry, deleteTshirtMutation } from '../queries/queries';
import ItemList from '../../container/itemLIst';

class Tshirt extends Component {
  displayTshirt() {
    var data = this.props.getTshirtQuerry;
    if(data.loading){
      return(<div>Loading Jeans...</div>)
    } else {
        return <ItemList items={data.tshirt} delItemfunc={this.deleteHandler.bind(this)}/>
    }
  }
  deleteHandler(id) {
    let con = window.confirm("Are you sure you want to delete ?");
    if (con) {
      this.props.deleteTshirtMutation({
        variables: {
          id: id,
        },
        refetchQueries:[{query:getTshirtQuerry}]
      })
    }
  }
  render() {
    return (
   <div>
   {this.displayTshirt()}
   </div>
    );
  }
}

export default compose(
  graphql(getTshirtQuerry, { name: "getTshirtQuerry" }),
  graphql(deleteTshirtMutation, { name: "deleteTshirtMutation" })
)(Tshirt);