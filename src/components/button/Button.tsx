import * as React from "react";
import styles from "./Button.module.css";

const defaultTag = "button";

type ButtonProps<T extends React.ElementType = typeof defaultTag> = {
  variant?: "primary" | "secondary";
  as?: T;
} & React.ComponentPropsWithoutRef<T>;

function Button<T extends React.ElementType = typeof defaultTag>({ variant = "secondary", as, ...rest }: ButtonProps<T>) {
  const Component = as || defaultTag;
  return (
    <Component className={styles[variant]} {...rest} />
  )
};

export default Button;
