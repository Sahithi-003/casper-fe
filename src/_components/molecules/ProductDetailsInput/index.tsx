import React, { useState } from 'react';
import { styled, Grid } from '@mui/material';
import InputField from '../../atoms/InputField';
import theme from '../../../core-utils/theme';
import { TypographyComponent } from '../../atoms/Typography';
import Icon from '../../../../public/images/Icon.png';

export interface ParentInputFieldProps {
  placeholder: string;
  TypoChildren: string;
  wordCount: number;
  isImportant?: boolean;
  isHavingHelpIcon?: boolean;
  bottom?: string;
  width?: string;
  height?: string;
  value?: string;
  maxCharCount?: number;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const StyledGrid = styled(Grid)(() => ({
  gap: '6px',
  display: 'flex',
  flexDirection: 'column',
  flex: 'none',
  order: 1,
  flexGrow: 0,
  alignSelf: 'stretch',
}));

const TopContainer = styled(Grid)(() => ({
  boxSizing: 'border-box',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

const ProductDetailsInput = (props: ParentInputFieldProps) => {
  const {
    value,
    setValue,
    placeholder,
    maxCharCount,
    TypoChildren,
    wordCount,
    isImportant,
    isHavingHelpIcon,
    bottom,
    width,
    height,
  } = props;
  const [charCount, setCharCount] = useState(0);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCharCount(value.length);
    setValue(value);
  };
  return (
    <StyledGrid data-testid="product-details-input" height={height} width={width}>
      <TopContainer>
        <Grid display="flex" gap="4px" flexDirection={'row'}>
          <TypographyComponent
            variant="body2"
            color={theme.palette.text_color.medium_emphasis}
          >
            {TypoChildren}
          </TypographyComponent>
          {isImportant && (
            <TypographyComponent
              variant="body2"
              color={theme.palette.alert.alert_500}
            >
              *
            </TypographyComponent>
          )}
          {isHavingHelpIcon && (
            <img src={Icon} width={'12px'} height={'12px'} alt="" />
          )}
        </Grid>
        <TypographyComponent
          variant="caption2"
          color={theme.palette.text_color.low_emphasis1}
        >
          {`${charCount}/${wordCount}`}
        </TypographyComponent>
      </TopContainer>
      <Grid paddingTop="2px">
        <InputField
          onChange={handleChange}
          placeholder={placeholder}
          value={value}
          maxLength={maxCharCount}
          isMultiline={maxCharCount === 600}
        />
      </Grid>
      {bottom && (
        <TypographyComponent
          variant="caption2"
          color={theme.palette.text_color.medium_emphasis}
        >
          {bottom}
        </TypographyComponent>
      )}
    </StyledGrid>
  );
};
export default ProductDetailsInput;
