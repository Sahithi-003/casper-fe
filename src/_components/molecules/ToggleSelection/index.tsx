import React from 'react';
import { Grid, styled } from '@mui/material';
import IconButtonComponent from '../../atoms/IconButton';

interface ToggleSelectionProps {
  activeIndex: number;
  // eslint-disable-next-line no-unused-vars
  onSelection: (arg: number) => void;
  type: 'letter' | 'icon';
  data?: string[];
  width?: string;
}

const StyledGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '2px',
  gap: '4px',
  height: '36px',
  border: '1px solid #EBEDF5',
  borderRadius: '4px',
}));

const ToggleSelection = (props: ToggleSelectionProps) => {
  const { activeIndex, onSelection, type, data, width } = props;
  return (
    <StyledGrid width={width} data-testid='toggle-selection'>
      {type === 'icon' &&
        data?.map((src, index) => (
          <IconButtonComponent
            key={index}
            src={src}
            type="icon"
            img_height="16px"
            img_width="16px"
            height="32px"
            width="32px"
            active={activeIndex === index ? true : false}
            onClick={() => onSelection(index)}
          />
        ))}
      {type === 'letter' &&
        data?.map((letter, index) => (
          <IconButtonComponent
            key={index}
            letter={letter}
            type="letter"
            height="32px"
            width="32px"
            active={activeIndex === index ? true : false}
            onClick={() => onSelection(index)}
          />
        ))}
    </StyledGrid>
  );
};

export default ToggleSelection;
