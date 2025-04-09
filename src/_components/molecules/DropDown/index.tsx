import React from 'react';
import { MenuItem, Select, SelectChangeEvent, styled } from '@mui/material';
import { TypographyComponent } from '../../atoms/Typography/index';
import theme from '../../../core-utils/theme';

interface DropdownProps {
  width?: string;
  height?: string;
  menuItems: string[];
  handleChange?: (
    // eslint-disable-next-line no-unused-vars
    event: SelectChangeEvent<unknown>,
    // eslint-disable-next-line no-unused-vars
    child: React.ReactNode,
  ) => void;
  value?: string;
  placeholder?: string;
}

const Dropdown = styled(Select)({
  padding: '10px 15px 10px 12px',
  '& .MuiSelect-select': {
    padding: '0px',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: `1px solid ${theme.palette.grey_color.grey_600} !important`,
    padding: '0px',
  },
});

const StyledMenuItem = styled(MenuItem)({
  borderBottom: `1px solid ${theme.palette.grey_color.grey_600}`,
});

const DropDown = (props: DropdownProps) => {
  const { width, height, placeholder, menuItems, handleChange, value } = props;
  return (
    <Dropdown
      // IconComponent={KeyboardArrowDownOutlinedIcon}
      placeholder={placeholder}
      defaultValue={menuItems[0]}
      onChange={handleChange}
      sx={{ width: width, height: height }}
      data-testid="dropdown"
      value={value}
    >
      {menuItems.map((menuItem) => (
        <StyledMenuItem key={menuItem} value={menuItem}>
          <TypographyComponent variant={'body2'} >
            {menuItem}
          </TypographyComponent>
        </StyledMenuItem>
      ))}
    </Dropdown>
  );
};

export default DropDown;
