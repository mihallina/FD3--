import React from "react";
import "./RainbowFrame.css";

class RainbowFrame extends React.Component {
  

  render() {

    const reversedColors = [...this.props.colors].reverse();
    let content = this.props.children;

    for (let i = 0; i < reversedColors.length; i++){
        const color = reversedColors[i];
        content = (
            <div key={i} className="frame" style={{borderColor: color}}>
                {content}
            </div>
        )
    }

    return content;
  }
}

export default RainbowFrame;
