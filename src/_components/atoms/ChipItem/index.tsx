/**
 * @author Bhavani Somanchi <bhavani.somanchi@zemosolabs.com>
 */

import { Chip, styled } from '@mui/material';
import React, { MouseEventHandler } from 'react';
import theme from '../../../core-utils/theme';

interface ChipProps {
  label: string;
  backgroundColor?: string;
  border?: string;
  borderRadius?: string;
  active?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement> &
    MouseEventHandler<HTMLButtonElement>;
  height?: string;
  width?: string;
  color?: string;
}

const StyledRoundedChip = styled(Chip)((props: ChipProps) => ({
  padding: '4px 0px',
  width: props.width || 'auto',
  height: props.height || '28px',
  backgroundColor: props.active
    ? theme.palette.primary.primary_50
    : props.backgroundColor || theme.palette.structural.white,
  borderRadius: '51px',
  border: props.active ? 'none' : props.border || '1px solid #EBEEFC',

  '&:hover': {
    backgroundColor: props.active
      ? theme.palette.primary.primary_50
      : theme.palette.structural.structural_50,
    border: props.active
      ? 'none'
      : props.border || `1px solid ${theme.palette.primary.primary_100}`,
    '& .MuiChip-label': {
      color: props.active
        ? theme.palette.primary.primary_300
        : theme.palette.primary.primary_100,
    },
  },
  '& .MuiChip-label': {
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '20px',
    padding: 'none !important',
    color: props.active
      ? theme.palette.primary.primary_300
      : theme.palette.text_color.medium_emphasis,
  },
}));

const ChipItem: React.FC<ChipProps> = (props: ChipProps) => {
  const {
    label,
    backgroundColor,
    border,
    borderRadius,
    active,
    onClick,
    height,
    width,
  } = props;
  return (
    <StyledRoundedChip
      variant="filled"
      active={active}
      label={label}
      backgroundColor={backgroundColor}
      border={border}
      borderRadius={borderRadius}
      onClick={onClick}
      height={height}
      width={width}
      data-testid="chip"
    />
  );
};

export default ChipItem;
