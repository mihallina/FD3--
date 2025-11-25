import React from "react";
import "./withRainbowFrame.css";


function withRainbowFrame(colors) {
  return function (Comp) {
    return (props) => {
      const reversedColors = [...colors].reverse();
      let content = <Comp {...props}>{props.children}</Comp>;

      for (let i = 0; i < reversedColors.length; i++) {
        const color = reversedColors[i];
        content = (
          <div key={i} className="frame" style={{ borderColor: color }}>
            {content}
          </div>
        );
      }

      return content;
    };
  };
}

export default withRainbowFrame;
