import React from "react";

const RenderItem = (props) => {
  return (
    <div>
      <p
        style={{ textDecoration: props.marked ? "line-through" : null }}
        onClick={props.onClick}
      >
        {props.text}
      </p>
    </div>
  );
};

export default RenderItem;
