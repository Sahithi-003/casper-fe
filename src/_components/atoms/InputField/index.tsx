import React from 'react';
import { TextField, styled, InputAdornment } from '@mui/material';
import theme from '../../../core-utils/theme';
import { Image } from '../Image';

const StyledInput = styled(TextField)((props: InputProps) => ({
  width: '100%',
  '& .MuiOutlinedInput-input': {
    padding: props.isSearchBar ? '8px' : '12px 16px',
    textOverflow: 'ellipsis !important',
    fontSize: props.isSearchBar && 12,
    lineHeight: props.isSearchBar && 16,
    fontWeight: props.isSearchBar && 400,
  },
  '& .MuiInputBase-root': {
    padding: props.isMultiline && '0 !important',
  },
  '& .MuiInputBase-input': {
    '&::placeholder': {
      textOverflow: 'ellipsis !important',
      fontSize: props.isSearchBar ? 12 : 14,
      lineHeight: props.isSearchBar && 16,
      fontWeight: props.isSearchBar ? 400 : 500,
      color: `${theme.palette.text_color.low_emphasis1}`,
      overflow: 'ellipsis',
    },
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderStyle: 'solid',
      borderWidth: '1px',
      borderRadius: '8px',
      borderColor: `${theme.palette.grey_color.grey_600}`,
      border: `1px solid ${theme.palette.grey_color.grey_600}`,
      boxShadow:
        '0px 1px 2px rgba(50, 50, 71, 0.08), 0px 0px 1px rgba(50, 50, 71, 0.2)',
    },
    '&:hover fieldset': {
      borderStyle: 'solid',
      borderWidth: '1px',
      borderColor: `${theme.palette.grey_color.grey_600}`,
      boxShadow:
        '0px 1px 2px rgba(50, 50, 71, 0.08), 0px 0px 1px rgba(50, 50, 71, 0.2)',
    },
    '&.Mui-focused fieldset': {
      borderStyle: 'solid',
      borderWidth: '1px',
      borderColor: `${theme.palette.grey_color.grey_600}`,
    },
  },
  input: {
    '&::placeholder': {
      textOverflow: 'ellipsis !important',
      fontSize: props.isSearchBar ? 12 : 14,
      lineHeight: props.isSearchBar && 16,
      fontWeight: props.isSearchBar ? 400 : 500,
      color: `${theme.palette.text_color.low_emphasis1}`,
      overflow: 'ellipsis',
    },
  },
}));

export interface InputProps {
  placeholder: string;
  value?: string;
  image?: string;
  alt?: string;
  height?: string;
  isSearchBar?: boolean;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  maxLength?: number;
  isMultiline?: boolean;
}

const InputField = (props: InputProps) => {
  return (
    <StyledInput
      data-testid='input-field'
      variant="outlined"
      {...props}
      inputProps={{ maxLength: props.maxLength || 80 }}
      InputProps={{
        startAdornment: props.image && (
          <InputAdornment position="start">
            <Image source={props.image} alt={props.alt!} />
          </InputAdornment>
        ),
        style: {
          height: `${props.height}`,
        },
        rows: props.isMultiline ? 4 : 1,
        multiline: props.isMultiline,
      }}
    />
  );
};

export default InputField;
