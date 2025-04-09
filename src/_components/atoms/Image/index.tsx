import * as React from 'react';
interface Props{
    source: string
    alt: string
    width?: number
    height?: number
  }
  
  export const Image = (props: Props) => {
    return <img src={props.source} width={props.width} height={props.height} alt={props.alt}></img>;
  };