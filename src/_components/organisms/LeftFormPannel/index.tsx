/* eslint-disable max-statements-per-line */
import React, { useState, useContext } from 'react';
import { styled, Box, Grid } from '@mui/material';
import ParentInputField from '../../molecules/ParentInputField';
import ToggleSelection from '../../molecules/ToggleSelection';
import {
  TITLE_PLACEHOLDER_TEXT,
  TITLE,
  CONTENT_DESC_PLACEHOLDER_TEXT,
  CONTENT_DESC,
  TONE_OF_VOICE_PLACEHOLDER_TEXT,
  TONE_OF_VOICE,
  KEYWORDS,
  SELECT_CHANGE_EVENT_TEXT,
  OUTPUT_LENGTH,
  COMPOSE,
  menuItems,
  MAX_CHAR_TEXT,
  MAX_CHAR_KEYWORDS,
  MAX_CHAR_TONE_OF_VOICE,
  MAX_CHAR_CONTENT_DESC,
} from '../../../core-utils/constants';
import DropDown from '../../molecules/DropDown';
import { TypographyComponent } from '../../atoms/Typography';
import theme from '../../../core-utils/theme';
import IconButtonComponent from '../../atoms/IconButton';
import ButtonComponent from '../../atoms/Button';
import { PromptContext } from '../../../core-utils/promptContext';
import helpIcon from '../../../../public/icons/help-circle.svg';

const MainContainer = styled(Box)(() => ({
  gap: '24px',
  padding: '24px 20px',
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
}));

const StyledBox = styled(Box)(() => ({
  width: '100%',
  height: '3.12%',
  gap: '8px',
  display: 'flex',
  flexDirection: 'column',
}));

const SubContainer = styled(Box)(() => ({
  width: 'fit-content',
  display: 'flex',
  flexDirection: 'row',
}));

const BottomContainer = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  marginTop: '24px',
}));

const LeftFormPannel = () => {
  const [titleCharCount, setTitleCharCount] = useState<number>(0);
  const [titleInput, setTitleInput] = useState<string>('');
  const [titleSwitch, setTitleSwitch] = useState<boolean>(true);
  const [contentDescInput, setContentDescInput] = useState<string>('');
  const [contentDescCharCount, setContentDescCharCount] = useState<number>(0);
  const [contentDescSwitch, setContentDescSwitch] = useState<boolean>(true);
  const [tonesCharCount, setTonesCharCount] = useState<number>(0);
  const [tonesInput, setTonesInput] = useState<string>('');
  const [tonesSwitch, setTonesSwitch] = useState<boolean>(true);
  const [keywordsCharCount, setKeyCharCount] = useState<number>(0);
  const [keywordsInput, setKeywordsInput] = useState<string>('');
  const [keywordsSwitch, setKeywordsSwitch] = useState<boolean>(true);
  const [value, setDropDownValue] = useState<string>(menuItems[0]);
  const { setPromptInput, setPromptLength, promptLength } = useContext(
    PromptContext,
  );

  const handleInputChange = (
    field: 'title' | 'contentDesc' | 'keywords' | 'tones',
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const text = event.target.value;
    const count = text.length;
    switch (field) {
      case 'title':
        setTitleCharCount(count);
        setTitleInput(text);

        break;
      case 'contentDesc':
        setContentDescCharCount(count);
        setContentDescInput(text);

        break;
      case 'keywords':
        setKeyCharCount(count);
        setKeywordsInput(text);
        break;
      case 'tones':
        setTonesCharCount(count);
        setTonesInput(text);
        break;
      default:
        break;
    }
  };

  const handleOnClick = () => {
    let input = '';
    if (titleInput && titleSwitch) {
      input += `title: ${titleInput}`;
    }
    if (contentDescInput && contentDescSwitch) {
      input += `${input ? ', ' : ''}description: ${contentDescInput}`;
    }
    if (tonesInput && tonesSwitch) {
      input += `${input ? ', ' : ''}tone of voice: ${tonesInput}`;
    }
    if (keywordsInput && keywordsSwitch) {
      input += `${input ? ', ' : ''}keywords: ${keywordsInput}`;
    }
    if (value) {
      input += `${input ? ', ' : ''}language: ${value}`;
    }
    setPromptInput(input);
  };

  const onSelection = (index: number) => {
    setPromptLength(index);
  };

  const handleDropdownChange = (value: string) => {
    setDropDownValue(value);
  };

  return (
    <Grid height={'100%'} borderRight={'1px solid #EBEDF5'}>
      <MainContainer data-testid="left-pannel">
        <ParentInputField
          inputValue={titleInput}
          checked={titleSwitch}
          placeholder={TITLE_PLACEHOLDER_TEXT}
          TypoChildren={TITLE}
          charCount={titleCharCount}
          onChange={(event) => handleInputChange('title', event)}
          handleSwitchChange={() => setTitleSwitch(!titleSwitch)}
          maxCharCount={MAX_CHAR_TEXT}
        ></ParentInputField>
        <ParentInputField
          inputValue={contentDescInput}
          checked={contentDescSwitch}
          placeholder={CONTENT_DESC_PLACEHOLDER_TEXT}
          TypoChildren={CONTENT_DESC}
          charCount={contentDescCharCount}
          onChange={(event) => handleInputChange('contentDesc', event)}
          handleSwitchChange={() => setContentDescSwitch(!contentDescSwitch)}
          maxCharCount={MAX_CHAR_CONTENT_DESC}
        ></ParentInputField>
        <ParentInputField
          inputValue={tonesInput}
          checked={tonesSwitch}
          placeholder={TONE_OF_VOICE_PLACEHOLDER_TEXT}
          TypoChildren={TONE_OF_VOICE}
          charCount={tonesCharCount}
          onChange={(event) => handleInputChange('tones', event)}
          handleSwitchChange={() => setTonesSwitch(!tonesSwitch)}
          maxCharCount={MAX_CHAR_TONE_OF_VOICE}
        ></ParentInputField>
        <ParentInputField
          inputValue={keywordsInput}
          checked={keywordsSwitch}
          placeholder={KEYWORDS}
          TypoChildren={KEYWORDS}
          charCount={keywordsCharCount}
          onChange={(event) => handleInputChange('keywords', event)}
          handleSwitchChange={() => setKeywordsSwitch(!keywordsSwitch)}
          maxCharCount={MAX_CHAR_KEYWORDS}
        ></ParentInputField>
        <StyledBox>
          <SubContainer>
            <TypographyComponent
              style={{ paddingTop: '12px' }}
              variant="body2"
              color={`${theme.palette.text_color.medium_emphasis}`}
            >
              {SELECT_CHANGE_EVENT_TEXT}
            </TypographyComponent>
            <Box paddingLeft={'5px'} paddingTop="0px">
              <IconButtonComponent src={helpIcon} />
            </Box>
          </SubContainer>
          <DropDown
            width="100%"
            placeholder={SELECT_CHANGE_EVENT_TEXT}
            menuItems={menuItems}
            value={value}
            handleChange={(e) => handleDropdownChange(e.target.value as string)}
          ></DropDown>
        </StyledBox>
        <BottomContainer>
          <Grid display="flex" flexDirection="row" width="100%" container>
            <TypographyComponent
              style={{ paddingTop: '7px', paddingRight: '10px' }}
              variant="body2"
              color={`${theme.palette.text_color.high_emphasis}`}
            >
              {OUTPUT_LENGTH}
            </TypographyComponent>
            <ToggleSelection
              activeIndex={promptLength}
              type="letter"
              data={['S', 'M', 'L']}
              onSelection={onSelection}
            ></ToggleSelection>
          </Grid>
        </BottomContainer>
      </MainContainer>
      <Grid
        item
        width="100%"
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        height="64px"
        padding="12px 20px"
        borderTop="1px solid #EBEDF5"
      >
        <ButtonComponent
          label={COMPOSE}
          buttonColor={`${theme.palette.primary.primary_100}`}
          textVariant="subtitle2"
          variant="contained"
          width="100%"
          textColor={`${theme.palette.structural.white}`}
          onClick={handleOnClick}
        />
      </Grid>
    </Grid>
  );
};

export default LeftFormPannel;
