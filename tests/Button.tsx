import React from "react";

export type ButtonProps = {
  onButtonClick: () => void;
  color: "blue" | "red";
  text: string;
};

export const Button = (props: ButtonProps) => {
  const { onButtonClick, color, text } = props;
  return (
    <button style={{ color }} onClick={onButtonClick}>
      {text}
    </button>
  );
};
