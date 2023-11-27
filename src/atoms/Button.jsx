import React from "react";

const Button = (props) => {
  return (
    <button
      className={props.classNameButton}
      type={props.typeButton}
      name={props.nameButton}
      onClick={props.onClickButton}
    >
      {props.children}
    </button>
  );
};

export default Button;
