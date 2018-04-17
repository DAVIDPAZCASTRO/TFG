import React from 'react';

export default class Box extends React.Component {

  render(){
    let category = "category";
    if(this.props.box === "0" || this.props.box === "1" || this.props.box === "2" || this.props.box === "3" ||this.props.box === "4"){
      category += this.props.box;
    }else{
      category += "_blank"
    }
    return(
      <button className={category}>
        {this.props.box}
      </button>
    );
  }
}
