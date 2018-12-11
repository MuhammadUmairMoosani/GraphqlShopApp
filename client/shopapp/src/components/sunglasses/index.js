import React, { Component } from 'react';

import { graphql, compose } from 'react-apollo';

import '../style.css';
import { getSunglassesQuerry, deleteSunglassesMutation } from '../queries/queries';
import ItemList from '../../container/itemLIst';

class Sunglasses extends Component {
  displaySunglasses() {
    var data = this.props.getSunglassesQuerry;
    if(data.loading){
      return(<div>Loading Jeans...</div>)
    } else {
        return <ItemList items={data.sunglasses} delItemfunc={this.deleteHandler.bind(this)}/>
    }
  }
  deleteHandler(id) {
    let con = window.confirm("Are you sure you want to delete ?");
    if (con) {
      this.props.deleteSunglassesMutation({
        variables: {
          id: id,
        },
        refetchQueries:[{query:getSunglassesQuerry}]
      })
    }
  }
  render() {
    return (
   <div>
   {this.displaySunglasses()}
   </div>
    );
  }
}

export default compose(
  graphql(getSunglassesQuerry, { name: "getSunglassesQuerry" }),
  graphql(deleteSunglassesMutation, { name: "deleteSunglassesMutation" })
)(Sunglasses);