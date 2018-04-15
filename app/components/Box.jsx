import React from 'react';

export default class Box extends React.Component {

  render(){

    return(
      <button>
        {this.props.box}
      </button>
    );
  }
}
