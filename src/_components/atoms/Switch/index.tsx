import * as React from 'react';
import { styled, Switch } from '@mui/material';
import theme from '../../../core-utils/theme';

const StyledSwitch = styled(Switch)(() => ({
  width: 28,
  height: 16,
  padding: 0,
  borderRadius: 8,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: `${theme.palette.structural.white}`,
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: `${theme.palette.primary.primary_100}`,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
  },
}));

export interface SwitchProps {
  Checked?: boolean;
  handleChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const CustomSwitch = (props: SwitchProps) => {
  return (
    <StyledSwitch
      checked={props.Checked}
      onChange={props.handleChange}
      inputProps={{ 'aria-label': 'ant design' }}
    />
  );
};

export default CustomSwitch;
