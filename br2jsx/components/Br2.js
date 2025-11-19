import React from "react";
import "./Br2.css"

class Br2 extends React.Component {
  

  render() {

    const brReg = /<br\s*\/?>/gi;
    const textParts = this.props.text.split(brReg);
    const textWithEl = [];

    textParts.forEach((part, index) => {
        if(part !== ''){
            textWithEl.push(part);
        }

        if(index < textParts.length - 1){
            textWithEl.push(<br key={index} />);
        }
    });

    return (
        <div>{textWithEl}</div>
    )
  }
}

export default Br2;
