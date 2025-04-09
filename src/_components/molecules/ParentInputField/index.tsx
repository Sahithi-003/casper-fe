import React from 'react';
import { styled, Box } from '@mui/material';
import CustomSwitch from '../../atoms/Switch';
import InputField from '../../atoms/InputField';
import { TypographyComponent } from '../../atoms/Typography';
import theme from '../../../core-utils/theme';
import { Image } from '../../atoms/Image';
import helpIcon from '../../../../public/icons/help-circle.svg';

export interface ParentInputFieldProps {
  placeholder: string;
  TypoChildren: string;
  charCount: number;
  maxCharCount?: number;
  checked: boolean;
  inputValue?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  handleSwitchChange?: React.ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  >;
}

const StyledBox = styled(Box)(() => ({
  gap: '6px',
  display: 'flex',
  flexDirection: 'column',
}));

const TopContainer = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
}));
const MidContainer = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
}));
const BottomContainer = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
}));

const ParentInputField = ({
  placeholder,
  TypoChildren,
  charCount,
  checked,
  inputValue,
  onChange,
  handleSwitchChange,
  maxCharCount,
}: ParentInputFieldProps) => {
  return (
    <StyledBox data-testid="inputField">
      <TopContainer>
        <Box
          sx={{ width: 'fit-content', display: 'flex', flexDirection: 'row' }}
        >
          <TypographyComponent
            variant="body2"
            color={`${theme.palette.text_color.medium_emphasis}`}
          >
            {TypoChildren}
          </TypographyComponent>
          <Box sx={{ marginLeft: '5px' }}>
            <Image source={helpIcon} alt="help image"></Image>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <CustomSwitch
            Checked={checked}
            handleChange={handleSwitchChange}
          ></CustomSwitch>
        </Box>
      </TopContainer>
      <MidContainer>
        <InputField
          value={inputValue}
          placeholder={placeholder}
          onChange={onChange}
          maxLength={maxCharCount}
          isMultiline={maxCharCount === 600}
        ></InputField>
      </MidContainer>
      <BottomContainer>
        <TypographyComponent
          variant="body2"
          color={`${
            charCount !== maxCharCount
              ? theme.palette.text_color.medium_emphasis
              : theme.palette.alert.alert_500
          }`}
        >
          {`${charCount}/${maxCharCount}`}
        </TypographyComponent>
      </BottomContainer>
    </StyledBox>
  );
};
export default ParentInputField;
