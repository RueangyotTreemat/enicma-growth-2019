import VectorMap from '@south-paw/react-vector-maps';
import thailand from '@south-paw/react-vector-maps/maps/json/thailand.json';
import React, {Component} from 'react';
 class MyMap extends Component{
  render(){
    return(
      <VectorMap {...thailand} />
    )
  }
}
export default MyMap;