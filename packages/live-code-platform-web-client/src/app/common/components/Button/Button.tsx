'use client';

import './Button.style.scss';
import type { MouseEventHandler } from "react";

type ButtonProps = {
  label: string;
  style?: object;
  className?: string;
  onClick?: MouseEventHandler;
}

export const Button = (props: ButtonProps) => {
  return (
    <div 
      style={props.style} 
      className={`button ${props.className}`} 
      onClick={props.onClick}
    >
      {props.label}
    </div>
  );
}
