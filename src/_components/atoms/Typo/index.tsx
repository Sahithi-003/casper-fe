import * as React from 'react';
import { Typography, TypographyProps } from '@mui/material';

interface TypographyComponentProps extends TypographyProps {
  children?: string | React.ReactNode;
}

export const TypographyComponent = (props:TypographyComponentProps) => {
  const {
    children,
    variant,
    align,
    color,
    gutterBottom,
    ...rest
  } = props;
  return (
    <div>
      <Typography
        variant={variant}
        align={align}
        gutterBottom={gutterBottom}
        color={color}
        {...rest}
      >
        {children}
      </Typography>
    </div>
  );
};