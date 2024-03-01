import React from "react";
import { Button, ButtonProps } from "./Button";

type AppProps = {
  id: number;
  name: string;
  content: Content;
};

type Content = {
  title: string;
  body: string;
};

const buttonProps: ButtonProps = {
  onButtonClick: () => undefined,
  color: "blue",
  text: "imma button",
};

export const App = (_props: AppProps) => {
  const { onButtonClick, color, text } = buttonProps;
  return (
    <Button onButtonClick={onButtonClick} color="blue" text="imma button" />
  );
};
