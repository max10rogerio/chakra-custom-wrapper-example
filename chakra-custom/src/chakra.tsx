import { Button } from "@chakra-ui/react";
import React from "react";

export type ChakraButtonProps = {
  name: string;
};

export const ChakraButton = (props: ChakraButtonProps) => {
  return <Button>{props.name}</Button>;
};

export const ChakraButton2 = (props: ChakraButtonProps) => {
  return <Button colorScheme="red">{props.name}</Button>;
};

export const ChakraButton3 = (props: ChakraButtonProps) => {
  return <Button colorScheme="red">{props.name}</Button>;
};

export const ChakraButton4 = (props: ChakraButtonProps) => {
  return <Button colorScheme="red">{props.name}</Button>;
};
